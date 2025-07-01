import AboutSection from "./components/index/about/AboutSection";
import { Hero } from "./components/index/carousel/Hero";
import FactsSection from "./components/index/factsSection/FactsSection";
import Features from "./components/index/features/Features";
import ServicesSection from "./components/index/servicesSection/ServicesSection";
import EmblaCarousel from "./components/index/emblaCaroussel/EmblaCaroussel";
import { EmblaOptionsType } from "embla-carousel";
import { AccordionFaq } from "./components/index/accordion/AccordionFaq";
import ServicesOverview from "./components/services/servicesOverview/ServicesOverview";
import { FaBirthdayCake, FaHeart, FaBuilding } from "react-icons/fa";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  containScroll: "trimSnaps",
  dragFree: true,
};

const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#F5F5DC] to-[#B2AC88] dark:from-[#4A2C2A] dark:to-[#B2AC88]">
      <Hero />
      <AboutSection />
      <FactsSection />
      <ServicesSection />
      <Features />
      <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
        title="Nossos Projetos"
        subtitle="Veja o que já encantou nossos clientes"
        showControls={true}
        showDots={true}
        autoplay={true}
        autoplayInterval={5000}
      />
      <ServicesOverview
        title="Delícias Sob Medida para Cada Ocasião"
        description="Sabor, beleza e carinho em cada criação – porque sua comemoração merece o melhor."
        features={[
          {
            icon: (
              <FaHeart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            ),
            title: "Bolos de Casamento",
            description: "Obras-primas comestíveis para o seu grande dia.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Designs exclusivos que combinam com o estilo da sua festa. Elegância e sabor em cada detalhe.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Criações clássicas e contemporâneas</li>
                  <li>Personalização total do design</li>
                  <li>Sabores harmonizados com recheios finos</li>
                  <li>Entrega pontual e montagem no local</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Bolos de Casamento",
            callToActionLink: "/p/servicos",
          },
          {
            icon: (
              <FaBirthdayCake className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            ),
            title: "Festas e Aniversários",
            description: "Temas que ganham vida em forma de bolo e doces.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Bolos decorados, cupcakes e doces personalizados para transformar qualquer festa em um espetáculo.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Aniversários infantis, teens e adultos</li>
                  <li>Doces personalizados com o tema da festa</li>
                  <li>Detalhes criativos e comestíveis</li>
                  <li>Atendimento direto com a Dedá</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Festas e Aniversários",
            callToActionLink: "/p/servicos",
          },
          {
            icon: (
              <FaBuilding className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            ),
            title: "Eventos Corporativos",
            description: "Sofisticação para encantar clientes e parceiros.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Bolos com logotipo, lembranças gourmet e kits de doces que reforçam a identidade da sua marca.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Presente corporativo personalizado</li>
                  <li>Bolos temáticos para eventos</li>
                  <li>Doces finos com embalagens de marca</li>
                  <li>Entrega estratégica em São Paulo</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Eventos Corporativos",
            callToActionLink: "/p/servicos",
          },
        ]}
        showGlobalCTA={true}
        globalCTATitle="Vamos transformar sua celebração em uma doce lembrança?"
        globalCTADescription="Com atendimento próximo, ingredientes nobres e design exclusivo, a Maravilhas da Dedá faz da sua comemoração uma experiência inesquecível."
        globalCTAText="Fale com a Dedá"
        globalCTALink="/p/contato"
      />
      <AccordionFaq />
    </main>
  );
}
