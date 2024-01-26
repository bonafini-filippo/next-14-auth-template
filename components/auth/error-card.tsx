
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = ({ messages }: any) => {
    return (
        <CardWrapper
            headerLabel={messages.errors.generic}
            baclButtonHref="/login"
            backButtonLabel={messages.common.backToLogin}
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive w-10 h-10" />
            </div>
        </CardWrapper>
    )
}