import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

export default async function ProtectedLayout({ children }: ProtectedLayoutProps) {

    const session = await auth();

    return (
        <SessionProvider session={session}>
            <Navbar />
            <div className="flex justify-center mt-20">
                {children}
            </div>

        </SessionProvider>
    );
};
