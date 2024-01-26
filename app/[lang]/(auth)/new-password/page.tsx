import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "New Password",
};

const NewPasswordPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {
    const { newPasswordDict, messages } = await getDictionary(lang)
    const dictionariesForNewPasswordForm = { newPasswordDict, messages };

    return (
        <NewPasswordForm dictionaries={dictionariesForNewPasswordForm} />
    )
};

export default NewPasswordPage;