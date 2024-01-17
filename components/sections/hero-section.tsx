import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage.external"

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
        <section className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    width={1260}
                    height={750}
                    src={image}
                    alt={imageAlt}
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
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
                        <Button variant="outline">
                            <Link href={actionUrl}>{actionLabel}</Link>
                        </Button>
                        {secondaryActionLabel && secondaryActionUrl && <Button variant="link">
                            <Link href={secondaryActionUrl}>
                                {secondaryActionLabel}
                            </Link>
                        </Button>}
                    </div>
                </div>
            </div>
        </section>
    )
}
