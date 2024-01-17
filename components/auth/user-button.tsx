"use client";

import { FaUser } from "react-icons/fa6";
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


export const UserButton = () => {

    const user = useCurrentUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback >
                        <CiUser className="w-7 h-7" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                {user ? (<>
                    <Link href="/dashboard">
                        <DropdownMenuItem className="cursor-pointer">
                            <CiServer className="w-4 h-4 mr-2" />
                            Dashboard
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/settings">
                        <DropdownMenuItem className="cursor-pointer">
                            <CiSettings className="w-4 h-4 mr-2" />
                            Settings
                        </DropdownMenuItem>
                    </Link>
                    <LogoutButton >
                        <DropdownMenuItem className="cursor-pointer">
                            <CiLogout className="w-4 h-4 mr-2" />
                            Logout
                        </DropdownMenuItem>
                    </LogoutButton>
                </>) : (<>
                    <LoginButton asChild>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiLogin className="w-4 h-4 mr-2" />
                            Login
                        </DropdownMenuItem>
                    </LoginButton>
                    <RegisterButton asChild>
                        <DropdownMenuItem className="cursor-pointer">
                            <CiEdit className="w-4 h-4 mr-2" />
                            Register
                        </DropdownMenuItem>
                    </RegisterButton>
                </>)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}