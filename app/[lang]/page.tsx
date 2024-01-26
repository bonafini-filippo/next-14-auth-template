import HeroSection from "@/components/sections/hero-section"

const HeroImage = "/hero.png"

import { getDictionary } from "./dictionaries"

export default async function Home({ params: { lang } }: any) {

  const dict = await getDictionary(lang)


  return (<>
    <HeroSection
      subtitle="FB Development"
      title={dict.home.title}
      slogan={dict.home.subtitle}
      actionLabel="Contattaci"
      actionUrl="/contacts"
      secondaryActionLabel="Esplora"
      secondaryActionUrl="/services"
      image={HeroImage}
      imageAlt="Bg-hero"
    />

  </>)
}
