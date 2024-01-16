import { db } from "@/lib/db";

export const getTwoFactorConfermationByUserId = async (
    userId: string
) => {
    try {
        const twoFactorConfermation = await db.twoFactorConfirmation.findUnique({
            where: { userId }
        });
        return twoFactorConfermation;
    } catch (error) {
        return null;
    }
}