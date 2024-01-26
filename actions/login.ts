"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import {
    generateVerificationToken,
    generateTwoFarctorToken,
} from "@/lib/tokens";
import {
    sendVerificationMail,
    sendTwoFactorTokenEmail,
} from "@/lib/mail";
import { db } from "@/lib/db";
import { getTwoFactorConfermationByUserId } from "@/data/two-factor-confermation";


export const login = async (
    values: z.infer<typeof LoginSchema>,
    callbackUrl?: string | null
) => {

    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { email, password, code } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist!" }
    }
    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);
        await sendVerificationMail(
            verificationToken.email,
            verificationToken.token,
        )
        return { success: "Confermation email sent!" }
    }

    if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if (code) {
            const twoFactorToken = await getTwoFactorTokenByEmail(
                existingUser.email
            );

            if (!twoFactorToken) {
                return { error: "Invalid code!" };
            }

            if (twoFactorToken.token !== code) {
                return { error: "Invalid code!" };
            };

            const hasExpired = new Date(twoFactorToken.expires) < new Date();

            if (hasExpired) {
                return { error: "Code expired!" };
            };

            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id }
            });

            const existingConfermation = await getTwoFactorConfermationByUserId(
                existingUser.id
            )
            if (existingConfermation) {
                await db.twoFactorConfirmation.delete({
                    where: { id: existingConfermation.id }
                })
            }

            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                }
            });

        } else {
            const twoFactorToken = await generateTwoFarctorToken(existingUser.email);
            await sendTwoFactorTokenEmail(
                twoFactorToken.email,
                twoFactorToken.token,
            )
            return { twoFactor: true };
        }

    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
        throw error;
    }
}