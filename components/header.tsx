"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const pages = [
        {
            label: "Mission",
            href: "/mission"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Services",
            href: "/services"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Contacts",
            href: "/contacts"
        },
    ]

    return (
        <header className="flex  justify-between items-center py-3 ">
            <nav className="flex flex-grow items-center md:flex-row flex-row-reverse md:gap-x-2">
                <div className="flex flex-grow md:flex-grow-0  z-50 ">
                    <Button
                        className="m-auto md:m-0"
                        asChild
                        variant={pathname === "/" ? "link" : "link"}>
                        <Link href="/">
                            <Image src="/logo-short-black.png" alt="fb-development-logo" width={40} height={40} />
                        </Link>
                    </Button>
                </div>

                <div className={`flex gap-10 flex-col md:relative absolute bg-white backdrop-blur-3xl z-30 top-0 duration-100 left-0 overflow-hidden  bottom-0 md:block md:bg-transparent ${openMenu ? "right-0" : "right-full"}`}>
                    <div className="md:hidden h-[66px] flex items-center ml-4 cursor-pointer" onClick={toggleMenu}>
                        <IoCloseOutline className="w-9 h-9" />
                    </div>
                    {pages.map(page => (
                        <Button
                            className="text-5xl md:text-base"
                            key={page.label}
                            asChild
                            variant={pathname === page.href ? "link" : "link"}>
                            <Link href={page.href}>
                                {page.label}
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className="w-[72px] md:hidden flex justify-center items-center" onClick={toggleMenu}>
                    <CiMenuBurger className="w-7 h-7 mr-2" />
                </div>
            </nav>
            <div className="px-4 z-50">
                <UserButton />
            </div>

        </header>
    )
}
