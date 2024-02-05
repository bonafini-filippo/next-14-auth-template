"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header({ dictionaries, lang }: any) {
    const { pages, userMenu } = dictionaries;

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="flex  justify-between items-center py-3 bg-zinc-50 ">
            <nav className="flex flex-grow items-center md:flex-row  flex-row-reverse md:gap-x-2">
                <div className="flex flex-grow md:flex-grow-0  z-50 ">
                    <Button
                        className="m-auto md:m-0"
                        onClick={() => { setOpenMenu(false) }}
                        asChild
                        variant={pathname === `"/"` ? "link" : "link"}>
                        <Link href={`/${lang}`}>
                            <Image src="/logo-short-black.png" alt="fb-development-logo" width={40} height={40} />
                        </Link>
                    </Button>
                </div>

                <div className={`flex gap-12 flex-col md:relative absolute bg-zinc-50 backdrop-blur-2xl z-30 top-0 duration-100 left-0 overflow-hidden  bottom-0 md:block md:bg-transparent md:pt-0 pt-24 ${openMenu ? "right-0" : "right-full"}`}>

                    {Object.keys(pages).map(key => {
                        const page = pages[key];
                        return (
                            <Button
                                className="text-4xl md:text-base"
                                key={page.label}
                                asChild
                                variant={pathname === page.href ? "link" : "link"}
                                onClick={toggleMenu}
                            >
                                <Link href={`/${lang}/${page.href}`}>
                                    {page.label}
                                </Link>
                            </Button>
                        );
                    })}
                </div>
                <div className="w-[72px] md:hidden flex justify-center items-center z-50 cursor-pointer" onClick={toggleMenu}>
                    {openMenu ?
                        <IoCloseOutline className="w-9 h-9 " /> :
                        <CiMenuBurger className="w-7 h-7 " />
                    }
                </div>
            </nav>
            <div className="px-4 flex justify-center items-center">
                <UserButton dictionaries={userMenu} />
            </div>

        </header>
    )
}
