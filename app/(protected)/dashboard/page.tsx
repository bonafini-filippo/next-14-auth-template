/* "use client";

import { useCurrentUser } from "@/hooks/use-current-user"; */

import { MetadataDashboardPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataDashboardPage;

const DashboardPage = () => {
    /* const user = useCurrentUser(); */
    return (
        <div>
            dashboard Page
        </div>

    );
}

export default DashboardPage;