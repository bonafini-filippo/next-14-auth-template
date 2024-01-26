import { LoginForm } from '@/components/auth/login-form'
import { Metadata } from "next";
import { MetadataLoginPage } from '@/lib/pages';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionaries';

export const metadata: Metadata = MetadataLoginPage;

const LoginPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {

    const { loginDict, messages } = await getDictionary(lang)
    const dictionariesForLoginForm = { loginDict, messages };

    return (
        <LoginForm dictionaries={dictionariesForLoginForm} />
    )
}

export default LoginPage