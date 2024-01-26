import { RegisterForm } from "@/components/auth/register-form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { MetadataRegisterPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataRegisterPage;

const RegisterPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {

    const { registerDict, messages } = await getDictionary(lang)
    const dictionariesForRegisterForm = { registerDict, messages };
    return (
        <RegisterForm dictionaries={dictionariesForRegisterForm} />
    )
}

export default RegisterPage;