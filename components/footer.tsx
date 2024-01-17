import { pages } from "@/lib/pages";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4 bg-zinc-100 md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image width={100} height={100} alt="Logo-Fb-Development" src="/logo-black.svg" />
                </Link>
                <p className="my-6 text-gray-500 dark:text-gray-400">Il sito web perfetto per la tua attività</p>
                <nav>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        {pages.map(page => (
                            <li key={page.label}>
                                <Link className="mr-4 hover:underline md:mr-6" href={page.href}>{page.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">FB-Development</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
