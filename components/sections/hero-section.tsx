import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { IoIosArrowRoundForward } from "react-icons/io";

interface typesHeroSection {
    title: string,
    subtitle: string,
    slogan: string,
    actionLabel: string,
    actionUrl: string,
    secondaryActionLabel?: string,
    secondaryActionUrl?: string,
    image: string,
    imageAlt: string
}

export default function HeroSection({ title, subtitle, slogan, actionLabel, actionUrl, secondaryActionLabel, secondaryActionUrl, image, imageAlt }: typesHeroSection) {
    return (
        <section className="relative  py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="grid lg:grid-cols-2 w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">

                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        {subtitle}
                    </p>
                    <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        {title}
                    </h1>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        {slogan}
                    </p>
                    <div className="flex gap-2 items-center">
                        <Button variant="default">
                            <Link href={actionUrl}>{actionLabel}</Link>
                        </Button>
                        {secondaryActionLabel && secondaryActionUrl &&
                            <Button variant="link" className="group">
                                <Link href={secondaryActionUrl} className="flex items-center justify-center gap-0.5 ">
                                    {secondaryActionLabel}
                                    <IoIosArrowRoundForward size={20} className="group-hover:animate-arrow" />
                                </Link>
                            </Button>}
                    </div>
                </div>
                <div>
                    <Image
                        className="object-contain  w-full h-full"
                        width={600}
                        height={600}
                        src={image}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </section>
    )
}
