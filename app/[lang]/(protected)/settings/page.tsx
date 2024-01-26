import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import SettingsForm from "./_components/settings-form";

import { MetadataSettingsPage } from "@/lib/pages";
import { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

export const metadata: Metadata = MetadataSettingsPage;

const SettingsPage = async ({
    params: { lang }
}: {
    params: { lang: Locale }
}) => {
    const { settingsDict, messages } = await getDictionary(lang)
    const dictionariesForSettingsForm = { settingsDict, messages };


    return (
        <Card className="shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    ⚙️ {settingsDict.title}
                </p>
            </CardHeader>
            <CardContent>
                <SettingsForm dictionaries={dictionariesForSettingsForm} />
            </CardContent>
        </Card>
    );
}

export default SettingsPage;