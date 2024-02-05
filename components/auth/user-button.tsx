"use client";

import { CiLogout, CiLogin, CiEdit, CiUser, CiServer, CiSettings } from "react-icons/ci";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { LoginButton } from "./login-button";
import { RegisterButton } from "./register-button";
import Link from "next/link";


export const UserButton = ({ dictionaries, lang }: any) => {

    const menuDict = dictionaries;

    const user = useCurrentUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback >
                        <CiUser className="w-8 h-8" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                {user ? (<>
                    <Link href={`/${lang}/dashboard`}>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiServer className="w-6 h-6 lg:w-4 lg:h-4 mr-2" />
                            <span className="text-lg lg:text-base">{menuDict.dashboard}</span>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={`/${lang}/settings`}>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiSettings className="w-6 h-6 lg:w-4 lg:h-4 mr-2" />
                            <span className="text-lg lg:text-base">{menuDict.settings}</span>
                        </DropdownMenuItem>
                    </Link>
                    <LogoutButton >
                        <DropdownMenuItem className="cursor-pointer">
                            <CiLogout className="w-6 h-6 lg:w-4 lg:h-4 mr-2" />
                            <span className="text-lg lg:text-base">{menuDict.logout}</span>
                        </DropdownMenuItem>
                    </LogoutButton>
                </>) : (<>
                    <LoginButton asChild lang={lang}>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiLogin className="w-6 h-6 lg:w-4 lg:h-4 mr-2" />
                            <span className="text-lg lg:text-base">{menuDict.login}</span>
                        </DropdownMenuItem>
                    </LoginButton>
                    <RegisterButton asChild lang={lang}>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiEdit className="w-6 h-6 lg:w-4 lg:h-4 mr-2" />
                            <span className="text-lg lg:text-base">{menuDict.register}</span>
                        </DropdownMenuItem>
                    </RegisterButton>
                </>)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}