"use server"
import * as z from "zod";
import bcrypt from "bcryptjs"

import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null,
    newPasswordDict?: any,
    messages?: any
) => {


    if (!token) {
        return { error: newPasswordDict.errors.missingToken };
    };
    const validatedFields = NewPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: newPasswordDict.errors.invalidFields };
    };
    const { password } = validatedFields.data;
    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) {
        return { error: newPasswordDict.errors.invalidToken };
    };
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return { error: newPasswordDict.errors.expiredToken };
    };
    const existingUSer = await getUserByEmail(existingToken.email);
    if (!existingUSer) {
        return { error: newPasswordDict.errors.emailDoesNotExist }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.update({
        where: { id: existingUSer.id },
        data: { password: hashedPassword },
    });
    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    })
    return { success: newPasswordDict.messages.passwordUpdated }
}