import { RegisterForm } from "@/components/auth/register-form";
import { MetadataRegisterPage } from "@/lib/pages";
import { Metadata } from "next";

export const metadata: Metadata = MetadataRegisterPage;

const RegisterPage = () => {
    return (
        <RegisterForm />
    )
}

export default RegisterPage;