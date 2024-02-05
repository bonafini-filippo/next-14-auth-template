import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { NextRequest, NextResponse } from 'next/server'

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes"

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from "negotiator"
import { i18n } from "./i18n.config"

const { auth } = NextAuth(authConfig)

let defaultLocale = i18n.defaultLocale
let locales = i18n.locales




function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    const currentLocale = request.nextUrl.pathname.split('/')[1];


    if (languages.includes(currentLocale)) {
        const locale = currentLocale;
        return locale;
    }

    const locale = matchLocale(languages, locales, defaultLocale);
    return locale;
}

function withLanguage(languages: string[], lang: string): string[] {
    const updatedLanguages: string[] = languages.map(language => lang + language);
    return updatedLanguages;
}


const middleware = auth((req) => {

    const pathname = req.nextUrl.pathname;
    const apiRoutePrefixes = ['/api'];
    const pathnameIsMissingLocale = locales.every(
        (locale) => {
            const isApiRoute = apiRoutePrefixes.some(prefix => pathname.startsWith(prefix));
            return !isApiRoute && !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`;
        }
    );

    const locale = getLocale(req);

    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

    const isPublicRoute = withLanguage(publicRoutes, `/${locale}`).includes(nextUrl.pathname);
    const isAuthRoute = withLanguage(authRoutes, `/${locale}`).includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (pathnameIsMissingLocale) {
        const params = req.nextUrl.search

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}${params}`, req.url)
        );
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }


    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);


        return Response.redirect(new URL(
            `/${locale}/login?callbackUrl=${encodedCallbackUrl}`,
            nextUrl
        ));
    }

    return null;
})

export default middleware;



export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
