import { CardWrapper } from "@/components/auth/card-wrapper"

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome"
            backButtonLabel="Don't have an account?"
            baclButtonHref="/auth/register"
            showSocial
        >
            login
        </CardWrapper>
    )
}