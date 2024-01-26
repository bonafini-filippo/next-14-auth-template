import { ResetForm } from "@/components/auth/reset-form"
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reset",
};


const ResetPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {

    const { resetDict, messages } = await getDictionary(lang)
    const dictionariesForResetForm = { resetDict, messages };

    return (
        <ResetForm dictionaries={dictionariesForResetForm} />
    )
}

export default ResetPage