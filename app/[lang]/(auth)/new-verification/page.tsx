import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Verification",
};

const NewverificationPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {

    const { newVerificationDict, messages } = await getDictionary(lang)
    const dictionariesForNewVerificationForm = { newVerificationDict, messages };

    return (
        <NewVerificationForm dictionaries={dictionariesForNewVerificationForm} lang={lang} />
    )
}

export default NewverificationPage;