"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerificationDict = async (token: string, newVerificationDict: any) => {


    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        return { error: newVerificationDict.errors.missingToken };
    };
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return { error: newVerificationDict.errors.expiredToken };
    };
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: newVerificationDict.errors.emailDoesNotExist };
    };
    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    });

    await db.verificationToken.delete({
        where: { id: existingToken.id }
    })

    return { success: newVerificationDict.messages.emailVerified }
}