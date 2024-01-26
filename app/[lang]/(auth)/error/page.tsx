import { ErrorCard } from "@/components/auth/error-card";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import { getDictionary } from '@/lib/dictionaries';

export const metadata: Metadata = {
    title: "Error"
}

const AuthErrorPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {
    const { messages } = await getDictionary(lang)
    return (
        <ErrorCard messages={messages} />
    )
}

export default AuthErrorPage;