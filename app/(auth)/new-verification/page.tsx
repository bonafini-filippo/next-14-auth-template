import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Verification",
};

const NewverificationPage = () => {
    return (
        <NewVerificationForm />
    )
}

export default NewverificationPage;