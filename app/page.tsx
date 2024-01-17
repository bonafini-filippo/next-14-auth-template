import HeroSection from "@/components/sections/hero-section"

const HeroImage = "/hero.png"

export default function Home() {
  return (
    <HeroSection
      title="Il sito per la tua attività"
      slogan="Relizziamo siti web performanti, di ultima generazione insieme a te!"
      actionLabel="Contattaci"
      actionUrl="/contacts"
      secondaryActionLabel="Esplora"
      secondaryActionUrl="/services"
      image={HeroImage}
      imageAlt=""
    />
  )
}
