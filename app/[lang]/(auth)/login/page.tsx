import { LoginForm } from '@/components/auth/login-form'
import { Metadata } from "next";
import { MetadataLoginPage } from '@/lib/pages';

export const metadata: Metadata = MetadataLoginPage;

const LoginPage = () => {
    return (
        <LoginForm />
    )
}

export default LoginPage