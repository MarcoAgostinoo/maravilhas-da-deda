
"use client";

import BannerPages from "@/app/components/bannerPages/BannerPages";
// Remove or use HeroServices
// import HeroServices from "@/app/components/services/heroServices/HeroServices";
import ServicesList from "@/app/components/services/servicesList/ServicesList";
import ServicesOverview from "@/app/components/services/servicesOverview/ServicesOverview";
import { FaWrench, FaShieldAlt, FaTools } from "react-icons/fa"; // Remove FaCarSide if not used

const services = [
  {
    title: "Sistema de Suspensão",
    description: "Conforto, estabilidade e segurança para sua direção.",
    // **Atenção:** Troque essas imagens por fotos reais da Garagem Oficina!
    image: "/servicos/Servicessuspecao2.jpeg",
    features: [
      "Amortecedores e Molas",
      "Pivôs e Bandejas",
      "Buchas e Coxins",
      "Geometria e Balanceamento",
    ],
  },
  {
    title: "Sistema de Freios",
    description: "Sua segurança é nossa prioridade máxima na frenagem.",
    // **Atenção:** Troque essas imagens por fotos reais da Garagem Oficina!
    image: "/servicos/ServicesFreio2.jpg",
    features: [
      "Pastilhas e Discos",
      "Lonas e Tambores",
      "Fluido de Freio",
      "Regulagens e Manutenção ABS",
    ],
  },
  {
    title: "Motor e Injeção Eletrônica",
    description: "O coração do seu carro funcionando com máxima performance e economia.",
    // **Atenção:** Troque essas imagens por fotos reais da Garagem Oficina!
    image: "/servicos/Servicesmotor1.jpg",
    features: [
      "Diagnóstico de Motor",
      "Troca de Correias (Dentada/Acessórios)",
      "Limpeza de Bicos Injetores",
      "Reparo de Sensores e Atuadores",
    ],
  },
  {
    title: "Manutenção Automotiva Geral",
    description: "Cuidamos de tudo para você rodar tranquilo e com segurança.",
    // **Atenção:** Troque essas imagens por fotos reais da Garagem Oficina!
    image: "/servicos/Servicesmotor2.jpg",
    features: [
      "Troca de Óleo e Filtros",
      "Revisão Preventiva (Check-up)",
      "Sistema de Arrefecimento",
      "Verificação de Fluidos e Lubrificantes",
    ],
  },
  {
    title: "Diagnóstico Computadorizado",
    description: "Precisão tecnológica para identificar e solucionar falhas rapidamente.",
    // **Atenção:** Troque essas imagens por fotos reais da Garagem Oficina!
    image: "/servicos/computadorizado.jpg",
    features: [
      "Leitura de Códigos de Falha",
      "Análise de Desempenho do Motor",
      "Identificação de Problemas Elétricos",
      "Otimização de Consumo",
    ],
  },
];

export default function Servicos() {
  return (
    <div>
      <BannerPages
        title="Nossos Serviços"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", active: true },
        ]}
      />
      <ServicesList
        title="O Que Oferecemos"
        subtitle="Soluções Completas e Confiáveis para o Seu Veículo"
        services={services}
      />
      <ServicesOverview
        title="Nossas Especialidades e Diferenciais"
        description="Na Garagem Oficina, a paixão pela mecânica encontra a excelência no serviço. Conheça as áreas onde a experiência de Mario Fanucchi faz a diferença."
        features={[
          {
            icon: (
              <FaWrench className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            ),
            title: "Diagnóstico Preciso e Motor",
            description:
              "A expertise de mais de 20 anos para identificar e solucionar qualquer problema no coração do seu carro.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Com o conhecimento aprofundado de Mario Fanucchi, seu motor estará sempre em perfeito estado.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Diagnóstico Eletrônico Avançado</li>
                  <li>Reparo e Retífica de Motor</li>
                  <li>Otimização de Injeção Eletrônica</li>
                  <li>Troca de Correias e Fluidos Essenciais</li>
                </ul>
              </>
            ),
            callToActionText: "Agende seu Diagnóstico",
            callToActionLink: "/contato",
          },
          {
            icon: (
              <FaShieldAlt className="h-8 w-8 text-green-600 dark:text-green-400" />
            ),
            title: "Segurança e Estabilidade",
            description:
              "Seus sistemas de freio e suspensão em dia para uma direção segura e confortável em São Paulo.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Dirija com tranquilidade sabendo que seu veículo está preparado para qualquer situação.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Revisão Completa de Freios (ABS e Convencional)</li>
                  <li>Manutenção de Amortecedores e Molas</li>
                  <li>Reparo de Componentes da Suspensão</li>
                  <li>Alinhamento e Balanceamento</li>
                </ul>
              </>
            ),
            callToActionText: "Garanta Sua Segurança",
            callToActionLink: "/contato",
          },
          {
            icon: (
              <FaTools className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            ),
            title: "Manutenção Preventiva e Geral",
            description: "Pequenos cuidados que garantem a longevidade e o bom desempenho do seu veículo.",
            details: (
              <>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                  Invista na saúde do seu carro com revisões periódicas e serviços de manutenção completa.
                </p>
                <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
                  <li>Troca de Óleo e Filtros</li>
                  <li>Check-up de Viagem e Férias</li>
                  <li>Verificação de Fluidos e Vazamentos</li>
                  <li>Pequenos Reparos Elétricos</li>
                </ul>
              </>
            ),
            callToActionText: "Cuide do Seu Carro",
            callToActionLink: "/contato",
          },
        ]}
        showGlobalCTA={true}
        globalCTATitle="Pronto para o Cuidado que Seu Carro Merece?"
        globalCTADescription="Entre em contato com Mario Fanucchi e agende o serviço que seu veículo precisa. Qualidade e confiança garantidas."
        globalCTAText="Fale Conosco Agora!"
        globalCTALink="/contato"
      />
    </div>
  );
}