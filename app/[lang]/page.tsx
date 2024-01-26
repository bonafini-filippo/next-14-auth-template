import HeroSection from "@/components/sections/hero-section"

const HeroImage = "/hero.png"

import { getDictionary } from '@/lib/dictionaries';

export default async function Home({ params: { lang } }: any) {

  const { homeDict } = await getDictionary(lang)

  return (<>
    <HeroSection
      subtitle="FB Development"
      title={homeDict.title}
      slogan={homeDict.subtitle}
      actionLabel="Contattaci"
      actionUrl="/contacts"
      secondaryActionLabel="Esplora"
      secondaryActionUrl="/services"
      image={HeroImage}
      imageAlt="Bg-hero"
    />

  </>)
}
