import HeroSection from "@/components/sections/hero-section"

const HeroImage = "/jumbo.jpeg"

export default function Home() {
  return (<>
    <HeroSection
      subtitle="FB Development"
      title="Realizziamo il sito per la tua attività!"
      slogan="Relizziamo siti web performanti, di ultima generazione insieme a te!"
      actionLabel="Contattaci"
      actionUrl="/contacts"
      secondaryActionLabel="Esplora"
      secondaryActionUrl="/services"
      image={HeroImage}
      imageAlt="Bg-hero"
    />

  </>)
}
