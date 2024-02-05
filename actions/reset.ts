"use server";
import * as z from "zod"

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetMail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: z.infer<typeof ResetSchema>, resetDict: any) => {
    const validatedFields = ResetSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: resetDict.errors.invalidEmail }
    }
    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
        return { error: resetDict.errors.emailNotFound };
    };

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetMail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return { success: resetDict.messages.resetSent };
}