import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { getUserById } from "@/data/user"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { UserRole } from "@prisma/client"
import { getTwoFactorConfermationByUserId } from "@/data/two-factor-confermation"
import { getAccountByUserId } from "./data/account"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    update
} = NextAuth({
    pages: {
        signIn: "/login",
        error: "/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {

            //allow Oauth without email verificatioon
            if (account?.provider !== "credentials") return true;
            const existingUser = await getUserById(user.id);

            //prevent sign in without email verification
            if (!existingUser?.emailVerified) return false;

            //2FA check
            if (existingUser.isTwoFactorEnabled) {
                const twoFactorConfermation = await getTwoFactorConfermationByUserId(existingUser.id);
                if (!twoFactorConfermation) return false;
                await db.twoFactorConfirmation.delete({
                    where: { id: twoFactorConfermation.id }
                });
            }

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }
            if (session.user) {
                session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
            }
            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.isOAuth = token.isOAuth as boolean;
            }
            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id)

            token.isOAuth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.role = existingUser.role;
            token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})