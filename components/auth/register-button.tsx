"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"

import { useRouter } from "next/navigation";
import { RegisterForm } from "./register-form";

interface RegisterButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
    lang: any
}

export const RegisterButton = ({
    children,
    mode = "redirect",
    asChild,
    lang
}: RegisterButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/${lang}/register`)
    }

    if (mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild} className="cursor-pointer">
                    {children}
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                    <RegisterForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}