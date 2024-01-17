"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
    const pathname = usePathname();


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
                <div className="flex flex-grow md:flex-grow-0">
                    <Button
                        className="m-auto md:m-0"
                        asChild
                        variant={pathname === "/" ? "link" : "link"}>
                        <Link href="/">
                            <Image src="/logo-short-black.png" alt="fb-development-logo" width={40} height={40} />
                        </Link>
                    </Button>
                </div>

                <div className="hidden md:block">
                    {pages.map(page => (
                        <Button
                            key={page.label}
                            asChild
                            variant={pathname === page.href ? "link" : "link"}>
                            <Link href={page.href}>
                                {page.label}
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className="w-[72px] md:hidden flex justify-center items-center">
                    <CiMenuBurger className="w-7 h-7 mr-2" />
                </div>

            </nav>
            <div className="px-4">
                <UserButton />
            </div>

        </header>
    )
}
