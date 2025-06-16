// app/portfolio/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dialog } from "@headlessui/react"; // Para o modal
import Image from "next/image";
import {
  FaCarSide, // Ícone para casos de sucesso automotivos
  FaTimes,
  FaWrench, // Ícone para "Ver Detalhes" ou "Expertise Aplicada"
} from "react-icons/fa";

// --- Interfaces de Dados ---
interface RepairCase {
  id: string;
  name: string; // Nome do caso de reparo (ex: "Troca de Motor Fiat Palio")
  category: string[]; // Ex: ["Motor", "Freios", "Suspensão"]
  image: string; // URL da imagem de capa do caso (pode ser "antes", "depois" ou do reparo)
  description: string; // Descrição curta para o card (resumo do problema/solução)
  fullDescription: string; // Descrição longa para o modal (problema, diagnóstico, o que foi feito, resultado)
  expertiseApplied: string[]; // Ex: ["Diagnóstico Computadorizado", "Retífica de Motor", "Balanceamento"]
}

// **ATENÇÃO:** Substitua as URLs das imagens por fotos REAIS e de ALTA QUALIDADE da Garagem Oficina!
// Essas são apenas sugestões de nomes de arquivos para facilitar a visualização.
const allRepairCases: RepairCase[] = [
  {
    id: "1",
    name: "Eliminação de Barulhos na Suspensão - Hyundai HB20",
    category: ["Suspensão", "Conforto"],
    image: "/portifolio/portifilio1.png",
    description: "Fim dos 'toc-toc' ao passar em buracos e valetas de São Paulo.",
    fullDescription:
      "Um Hyundai HB20, carro popular nas ruas de São Paulo, chegou com barulhos incômodos e direção imprecisa. Mario Fanucchi, com seu olhar apurado e experiência, diagnosticou rapidamente buchas da bandeja e pivôs desgastados, resultado do uso diário em pavimentos irregulares. Após a substituição por peças de qualidade e um alinhamento 3D preciso, o cliente saiu com o HB20 rodando suavemente e silenciosamente, como novo.",
    expertiseApplied: [
      "Diagnóstico de Suspensão",
      "Troca de Buchas e Pivôs",
      "Alinhamento 3D",
      "Testes de Rodagem",
    ],
  },
  {
    id: "2",
    name: "Freios com Segurança Total no Trânsito - Chevrolet Onix",
    category: ["Freios", "Segurança"],
    image: "/portifolio/portifilio2.webp",
    description: "Chiado e pedal duro no anda-e-para da cidade? Solução garantida.",
    fullDescription:
      "Um Chevrolet Onix, campeão de vendas, apresentava chiados fortes ao frear e um pedal duro, especialmente no trânsito pesado de São Paulo. Mario Fanucchi inspecionou o sistema e identificou discos e pastilhas desgastados além do limite. A troca foi feita por componentes de alta performance, e o sistema foi sangrado cuidadosamente, restaurando a capacidade de frenagem total e a segurança para o dia a dia do motorista.",
    expertiseApplied: [
      "Inspeção Detalhada de Freios",
      "Troca de Pastilhas e Discos",
      "Verificação de Fluido de Freio",
      "Ajuste de Sistema ABS",
    ],
  },
  {
    id: "3",
    name: "Restauração de Potência e Economia - Fiat Argo",
    category: ["Motor", "Injeção Eletrônica"],
    image: "/portifolio/portifilio3.jpg",
    description: "Carro 'engasgando' e alto consumo? Injeção eletrônica impecável.",
    fullDescription:
      "Um Fiat Argo chegou à Garagem Oficina com perda de potência perceptível, consumo elevado de combustível e luz da injeção acesa. Mario utilizou o scanner automotivo de última geração para um diagnóstico preciso: bicos injetores sujos e falha em um sensor de oxigênio. Após a limpeza ultrassônica dos bicos, substituição do sensor e um ajuste fino no módulo, o Argo recuperou sua performance e economia de fábrica.",
    expertiseApplied: [
      "Diagnóstico Computadorizado",
      "Limpeza de Bicos Injetores",
      "Substituição de Sensores",
      "Otimização de Injeção",
    ],
  },
  {
    id: "4",
    name: "Resfriamento Eficiente em Dias Quentes - VW Gol",
    category: ["Motor", "Arrefecimento"],
    image: "/portifolio/portifilio4.jpg",
    description: "Motor superaquecendo no trânsito das Marginais? Resolvemos para você.",
    fullDescription:
      "Um clássico VW Gol estava superaquecendo constantemente no trânsito intenso de São Paulo. Mario Fanucchi investigou e encontrou uma válvula termostática travada e radiador parcialmente obstruído. O sistema de arrefecimento foi limpo, a válvula substituída e o aditivo adequado foi aplicado. Agora, o Gol mantém a temperatura ideal mesmo nos dias mais quentes e no trânsito mais parado.",
    expertiseApplied: [
      "Diagnóstico de Superaquecimento",
      "Troca de Válvula Termostática",
      "Limpeza do Sistema de Arrefecimento",
      "Uso de Aditivo ABNT",
    ],
  },
  {
    id: "5",
    name: "Preparação de Veículo para Aplicativos - Renault Kwid",
    category: ["Revisão Geral", "Prevenção"],
    image: "/portifolio/portifilio5.jpg",
    description: "Motorista de app precisa de confiabilidade. Garantimos seu ganha-pão.",
    fullDescription:
      "Um motorista de aplicativo trouxe seu Renault Kwid para uma revisão completa, visando a máxima confiabilidade para o trabalho diário. Mario Fanucchi realizou um check-up preventivo rigoroso, incluindo troca de óleo e filtros, verificação de correias, velas, sistema de freios, suspensão e pneus. Todos os itens de desgaste rápido foram inspecionados e substituídos quando necessário, garantindo que o Kwid estivesse 100% pronto para rodar sem preocupações.",
    expertiseApplied: [
      "Revisão Preventiva Completa",
      "Troca de Fluidos Essenciais",
      "Inspeção de Itens de Segurança",
      "Otimização para Alta Rodagem",
    ],
  },
  {
    id: "6",
    name: "Solução de Problemas Elétricos Complexos - Fiat Palio",
    category: ["Elétrica", "Diagnóstico"],
    image: "/portifolio/portifilio6.jpg",
    description: "Luzes no painel, bateria arriando... Encontramos a raiz do problema.",
    fullDescription:
      "Um Fiat Palio apresentava uma série de problemas elétricos intermitentes, como luzes no painel acendendo sem motivo e bateria descarregando. Mario Fanucchi, com seu conhecimento em elétrica automotiva, rastreou a falha até um chicote elétrico com oxidação e um sensor com leitura errada. Realizou o reparo do chicote, substituiu o sensor e testou todos os sistemas, devolvendo a estabilidade elétrica e a confiança ao proprietário do Palio.",
    expertiseApplied: [
      "Diagnóstico de Falhas Elétricas",
      "Rastreamento de Curto-Circuitos",
      "Reparo de Fiação e Sensores",
      "Testes de Bateria e Alternador",
    ],
  },
  {
    id: "7",
    name: "Reparo de Câmbio Automático com Trancos e Patinação - Honda Fit (São Paulo)",
    category: ["Câmbio Automático", "Manutenção Corretiva", "Performance"],
    image: "/portifolio/portifilio7.jpg", // Sugestão de nome de imagem
    description: "Câmbio automático dando trancos, patinando ou com retenção de marchas em SP? Especialista em conserto e troca de fluido de transmissão automática.",
    fullDescription:
      "Um Honda Fit, muito utilizado no dia a dia de São Paulo, chegou à oficina com queixas de trancos nas trocas de marcha, sensação de patinação e retenção excessiva em algumas marchas, problemas comuns em câmbios automáticos, especialmente os do tipo CVT, com o uso severo no trânsito paulistano. Mario Fanucchi, especialista em câmbio automático em São Paulo, realizou um diagnóstico detalhado, que incluiu a verificação do nível e da qualidade do fluido da transmissão (ATF/CVTF). Constatou-se a necessidade de substituição do fluido, que estava degradado e com viscosidade alterada, além da troca do filtro do câmbio. Utilizando equipamento específico para a troca completa do fluido e seguindo as especificações do fabricante Honda, o serviço foi executado. Após a troca e uma recalibração do sistema, o Honda Fit voltou a ter trocas suaves, sem trancos, restaurando o conforto e a confiabilidade para enfrentar o trânsito de São Paulo. Este serviço é crucial para a longevidade do câmbio automático e evita reparos mais caros no futuro.",
    expertiseApplied: [
      "Diagnóstico Especializado de Câmbio Automático (CVT e Convencional)",
      "Troca de Fluido de Transmissão Automática (ATF/CVTF) com Máquina",
      "Substituição de Filtro de Câmbio Automático",
      "Reparo de Câmbio Automático (Mecatrônica, Corpos de Válvulas)",
      "Calibração e Adaptação de Câmbios Automáticos",
      "Prevenção de Falhas em Câmbio Automático SP"
    ],
  },
];

const PortfolioPage = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedRepairCase, setSelectedRepairCase] = useState<RepairCase | null>(null);

  // Extrai todas as categorias únicas e adiciona "Todos"
  const categories = [
    "Todos",
    ...Array.from(new Set(allRepairCases.flatMap((p) => p.category))),
  ];

  const filteredRepairCases =
    selectedCategory === "Todos"
      ? allRepairCases
      : allRepairCases.filter((repairCase) =>
          repairCase.category.includes(selectedCategory),
        );

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 50 },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 py-16 dark:from-gray-900 dark:to-gray-800"
      aria-label="Portfólio de Casos de Sucesso da Garagem Oficina"
    >
      {/* Background animado (reutilizado do ServicesOverview) */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full opacity-10 dark:opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <radialGradient
              id="grad1"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient
              id="grad2"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#grad1)"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.circle
            cx="800"
            cy="700"
            r="200"
            fill="url(#grad2)"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Seção Hero/Introdução */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mb-12 text-center"
        >
          <h1 className="animate-on-scroll fade-in-up mb-4 text-4xl font-extrabold text-gray-900 delay-100 md:text-5xl dark:text-white">
            Casos de Sucesso da Garagem Oficina
          </h1>
          <p className="animate-on-scroll fade-in-up mx-auto max-w-2xl text-lg text-gray-700 delay-200 dark:text-gray-300">
            Confira como a experiência de Mario Fanucchi transformou problemas comuns
            em soluções eficientes, garantindo a tranquilidade dos motoristas em São Paulo.
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="animate-on-scroll fade-in-up mb-12 flex flex-wrap justify-center gap-3 delay-300"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-900 text-white shadow-md hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Casos de Reparo */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="animate-on-scroll fade-in-up grid grid-cols-1 gap-8 delay-400 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredRepairCases.length > 0 ? (
            filteredRepairCases.map((repairCase) => (
              <motion.div
                key={repairCase.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRepairCase(repairCase)}
                className="group animate-on-scroll scale-in relative cursor-pointer overflow-hidden bg-white shadow-xl transition-transform duration-300 dark:bg-gray-800 dark:shadow-2xl"
              >
                <div className="animate-on-scroll scale-in relative h-48 overflow-hidden">
                  <Image
                    src={repairCase.image}
                    alt={repairCase.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold">
                        {repairCase.category.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="animate-on-scroll fade-in-up p-6 delay-100">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {repairCase.name}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {repairCase.description}
                  </p>
                  <button className="inline-flex items-center text-blue-900 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    Ver Detalhes do Caso <FaCarSide className="ml-2 text-sm" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="col-span-full text-center text-gray-700 dark:text-gray-300"
            >
              <p className="text-xl">
                Nenhum caso de reparo encontrado nesta categoria.
              </p>
              <p className="text-md mt-2">
                Tente outra categoria ou{" "}
                <button
                  onClick={() => setSelectedCategory("Todos")}
                  className="font-semibold text-blue-900 hover:underline dark:text-blue-400"
                >
                  veja todos os casos
                </button>
                .
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Geral */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="animate-on-scroll fade-in-up mt-16 text-center delay-500"
        >
          <h3 className="animate-on-scroll fade-in-up mb-4 text-2xl font-bold text-gray-900 delay-600 dark:text-white">
            Seu carro precisa de um especialista em São Paulo?
          </h3>
          <p className="animate-on-scroll fade-in-up mx-auto mb-8 max-w-xl text-lg text-gray-700 delay-700 dark:text-gray-300">
            Confie na experiência e precisão de Mario Fanucchi. Entre em contato e agende o serviço que seu veículo precisa.
          </p>
          <motion.a
            href="/p/contato"
            title="Agende um serviço com a Garagem Oficina"
            className="inline-flex items-center bg-blue-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com o Mario <FaWrench className="ml-3" />
          </motion.a>
        </motion.div>
      </div>

      {/* Modal de Detalhes do Caso de Reparo */}
      <AnimatePresence>
        {selectedRepairCase && (
          <Dialog
            open={!!selectedRepairCase}
            onClose={() => setSelectedRepairCase(null)}
            className="relative z-50"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="flex max-h-[90vh] w-full max-w-2xl transform flex-col bg-white p-6 text-left align-middle shadow-2xl transition-all dark:bg-gray-800"
              >
                {/* Título do Modal (Cabeçalho - não rola) */}
                <Dialog.Title
                  as="h3"
                  className="mb-4 flex flex-shrink-0 items-center justify-between text-2xl leading-6 font-bold text-gray-900 dark:text-white"
                >
                  {selectedRepairCase.name}
                  <button
                    onClick={() => setSelectedRepairCase(null)}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Fechar"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </Dialog.Title>

                {/* Conteúdo do Modal (Corpo - este é o que rola) */}
                <div className="-mr-2 flex-grow overflow-y-auto pr-2">
                  <div className="mb-4">
                    <div className="relative mb-4 h-64 w-full">
                      <Image
                        src={selectedRepairCase.image}
                        alt={selectedRepairCase.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedRepairCase.fullDescription}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Expertise Aplicada:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepairCase.expertiseApplied.map((expertise) => (
                        <span
                          key={expertise}
                          className="bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação (Rodapé - não rola) */}
                <div className="mt-6 flex flex-shrink-0 flex-wrap justify-center gap-4">
                  <a
                    href="/p/contato" // Link para a página de contato/agendamento
                    title={`Agendar serviço para o caso de ${selectedRepairCase.name}`}
                    className="inline-flex items-center bg-blue-900 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-900 dark:hover:bg-blue-800"
                  >
                    Agende Seu Serviço <FaCarSide className="ml-2" />
                  </a>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioPage;