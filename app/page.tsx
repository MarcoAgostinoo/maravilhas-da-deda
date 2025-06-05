import AboutSection from "./components/index/about/AboutSection";
import { Hero } from "./components/index/carousel/Hero";
import FactsSection from "./components/index/factsSection/FactsSection";
import Features from "./components/index/features/Features";
import ServicesSection from "./components/index/servicesSection/ServicesSection";
import EmblaCarousel from "./components/index/emblaCaroussel/EmblaCaroussel";
import { EmblaOptionsType } from "embla-carousel";
import { AccordionFaq } from "./components/index/accordion/AccordionFaq";
import ServicesOverview from "./components/services/servicesOverview/ServicesOverview";
import { FaMicrochip, FaCarSide, FaWrench } from 'react-icons/fa'

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <AboutSection />
      <FactsSection />
      <ServicesSection />
      <Features />
      <EmblaCarousel
        slides={SLIDES}
        options={OPTIONS}
        title="Nossos Projetos"
        subtitle="Veja o Que Concluímos Recentemente"
        showControls={true}
        showDots={true}
        autoplay={true}
        autoplayInterval={5000}
      />
      <ServicesOverview
        title="Mais Alguns de Nossos Serviços"
        description="Excelência e dedicação em cada detalhe para manter seu carro sempre em perfeitas condições."
        features={[
          {
            icon: (
              <FaMicrochip className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            ),
            title: "Diagnóstico Computadorizado",
            description:
              "Identificação precisa de falhas eletrônicas e sistemas de injeção.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Utilizamos scanner automotivo e tecnologia avançada para encontrar
                  qualquer problema antes que ele se agrave.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Leitura de códigos de falha (ABS, injeção, sensores)</li>
                  <li>Análise de luzes de advertência no painel</li>
                  <li>Verificação de sensores e atuadores</li>
                  <li>Relatório detalhado com orientações transparentes</li>
                </ul>
              </>
            ),
            callToActionText: "Agendar Diagnóstico",
            callToActionLink: "/servicos/diagnostico",
          },
          {
            icon: (
              <FaCarSide className="h-8 w-8 text-green-600 dark:text-green-400" />
            ),
            title: "Serviços de Ar Condicionado",
            description:
              "Conforto térmico garantido para enfrentar o trânsito e o calor de São Paulo.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Fazemos manutenção completa do sistema de ar condicionado,
                  garantindo desempenho, eliminação de odores e economia de combustível.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Higienização do sistema de ventilação</li>
                  <li>Recarga de gás refrigerante</li>
                  <li>Verificação de compressor e válvulas</li>
                  <li>Troca de filtro de cabine (antipólen)</li>
                </ul>
              </>
            ),
            callToActionText: "Ver Serviços de Ar Condicionado",
            callToActionLink: "/servicos/ar-condicionado",
          },
          {
            icon: (
              <FaWrench className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            ),
            title: "Manutenção Geral e Injeção",
            description:
              "Cuidado completo para o coração do seu veículo, do motor à elétrica.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Do óleo ao sistema eletrônico, cuidamos de tudo para que seu
                  carro funcione sempre como novo.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Troca de óleo e filtros (motor, ar, combustível)</li>
                  <li>Limpeza e reparo de bicos injetores e sensores</li>
                  <li>Verificação de sistema de arrefecimento e escapamento</li>
                  <li>Check-list completo de componentes elétricos básicos</li>
                </ul>
              </>
            ),
            callToActionText: "Conhecer Manutenção",
            callToActionLink: "/servicos/manutencao",
          },
        ]}
        showGlobalCTA={true}
        globalCTATitle="Pronto para dar cuidado profissional ao seu veículo?"
        globalCTADescription="Com mais de 20 anos de experiência, Mario Fanucchi garante diagnóstico honesto, reparos de qualidade e atendimento personalizado."
        globalCTAText="Agende Agora"
        globalCTALink="/contato"
      />
      <AccordionFaq />
    </main>
  );
}
