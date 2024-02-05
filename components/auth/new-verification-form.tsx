'use client';

import { useCallback, useEffect, useState } from "react";
import { HashLoader } from "react-spinners"
import { useSearchParams } from "next/navigation";

import { newVerificationDict } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = ({ dictionaries, lang }: any) => {
    const { newVerificationDict, messages } = dictionaries;
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {

        if (success || error) return;

        if (!token) {
            setError(newVerificationDict.errors.missingToken)
            return;
        };
        newVerificationDict(token, newVerificationDict)
            .then((data: any) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError(messages.errors.generic);
            })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    return (
        <CardWrapper
            headerLabel={newVerificationDict.title}
            backButtonLabel={messages.common.backToLogin}
            baclButtonHref="/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (<HashLoader />)}

                <FormSuccess message={success} />
                {!success && (<FormError message={error} />)}

            </div>
        </CardWrapper>
    )
}