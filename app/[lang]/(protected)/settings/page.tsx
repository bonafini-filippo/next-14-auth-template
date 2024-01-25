import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import SettingsForm from "./_components/settings-form";

import { MetadataSettingsPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataSettingsPage;

const SettingsPage = () => {


    return (
        <Card className="shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    ⚙️ Settings
                </p>
            </CardHeader>
            <CardContent>
                <SettingsForm />
            </CardContent>
        </Card>
    );
}

export default SettingsPage;