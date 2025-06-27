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
interface PortfolioItem {
  id: string;
  name: string;
  category: string[];
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
}

// **ATENÇÃO:** Substitua as URLs das imagens por fotos REAIS e de ALTA QUALIDADE da Garagem Oficina!
// Essas são apenas sugestões de nomes de arquivos para facilitar a visualização.
const allPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    name: "Bolo de Casamento Clássico com Flores de Açúcar",
    category: ["Bolos de Casamento", "Obra-prima"],
    image: "/servicos/servicos1.png",
    description: "Design elegante, flores modeladas à mão e sabor marcante. O centro das atenções do grande dia.",
    fullDescription:
      "Este bolo de casamento foi criado para um casal apaixonado por detalhes clássicos. Massa branca aveludada, recheio de ninho com chocolate e decoração com flores de açúcar feitas artesanalmente. Cada camada foi pensada para harmonizar com a celebração, tornando o momento ainda mais inesquecível.",
    highlights: [
      "Flores de açúcar modeladas à mão",
      "Massa branca aveludada",
      "Recheio de ninho e chocolate",
      "Decoração personalizada",
    ],
  },
  {
    id: "2",
    name: "Kit Festa: Bolo + Marmitinhas e Brigadeiros",
    category: ["Festas e Aniversários", "Kit Festa"],
    image: "/servicos/servicos2.jpeg",
    description: "Kit completo para comemorações: bolo de 1,5kg, marmitinhas e brigadeiros artesanais.",
    fullDescription:
      "Ideal para festas práticas e deliciosas! O kit inclui um bolo de massa branca com dois recheios à escolha, 30 marmitinhas de 250g (bolo + 3 brigadeiros) e brigadeiros gourmet de morango e ninho. Perfeito para aniversários e celebrações em família.",
    highlights: [
      "Bolo de 1,5kg massa branca",
      "Dois recheios à escolha",
      "Marmitinhas personalizadas",
      "Brigadeiros gourmet",
    ],
  },
  {
    id: "3",
    name: "Bolo no Pote: Sensação, Doce de Leite com Abacaxi e Ninho com Frutas Vermelhas",
    category: ["Bolos no Pote", "Sabores Especiais"],
    image: "/servicessection/services2.jpeg",
    description: "Sabores irresistíveis em porções individuais, perfeitos para presentear ou saborear.",
    fullDescription:
      "Os bolos no pote são um sucesso entre os clientes! Massa fofinha, recheios cremosos e frutas frescas. Disponíveis nos sabores sensação, doce de leite com abacaxi e ninho com frutas vermelhas. Uma explosão de sabor em cada colherada.",
    highlights: [
      "Massa fofinha",
      "Recheios cremosos",
      "Frutas frescas",
      "Embalagem prática",
    ],
  },
  {
    id: "4",
    name: "Bolo de Aniversário 2 Andares: Morango, Chocolate e Ninho",
    category: ["Festas e Aniversários", "Bolos de Aniversário"],
    image: "/servicos/servicos3.jpeg",
    description: "Dois andares, três recheios e decoração artística. O bolo que encanta todas as idades.",
    fullDescription:
      "Para um aniversário inesquecível, criamos este bolo de dois andares com massas de chocolate e branca, recheios de morango, chocolate e ninho. A decoração foi inspirada no tema da festa, com detalhes em pasta americana e toques de dourado.",
    highlights: [
      "Dois andares",
      "Três tipos de recheio",
      "Decoração artística",
      "Toques de dourado",
    ],
  },
  {
    id: "5",
    name: "Pudim Tradicional Tamanho Família",
    category: ["Doces Clássicos", "Sobremesas"],
    image: "/servicessection/services4.jpeg",
    description: "Receita tradicional, textura perfeita e calda dourada. Um clássico para qualquer ocasião.",
    fullDescription:
      "O pudim tradicional da Maravilhas da Dedá é feito com ingredientes selecionados, garantindo textura aveludada e sabor marcante. A calda dourada e brilhante é o toque final para uma sobremesa que agrada a todos.",
    highlights: [
      "Textura aveludada",
      "Calda dourada",
      "Receita de família",
      "Tamanho grande",
    ],
  },
  {
    id: "6",
    name: "Cheesecake com Gelatina de Frutas Vermelhas",
    category: ["Sobremesas", "Cheesecake"],
    image: "/servicessection/services3.jpeg",
    description: "Base crocante, creme leve e cobertura de frutas vermelhas frescas.",
    fullDescription:
      "Nossa cheesecake é feita com base crocante de biscoito, creme suave e cobertura de gelatina de frutas vermelhas. Uma sobremesa sofisticada, perfeita para eventos especiais e para quem busca um sabor marcante e delicado.",
    highlights: [
      "Base crocante",
      "Cobertura de frutas vermelhas",
      "Creme leve",
      "Apresentação elegante",
    ],
  },
  {
    id: "7",
    name: "Bolo de Cenoura com Chocolate",
    category: ["Bolos Clássicos", "Café da Tarde"],
    image: "/servicessection/services5.jpg",
    description: "Clássico do café da tarde, com cobertura generosa de chocolate.",
    fullDescription:
      "O bolo de cenoura da Dedá é famoso pela massa macia e cobertura farta de chocolate. Ideal para acompanhar um café ou chá, traz aquele sabor de infância e aconchego em cada fatia.",
    highlights: [
      "Massa macia",
      "Cobertura generosa de chocolate",
      "Sabor de infância",
      "Perfeito para café da tarde",
    ],
  },
];

const PortfolioPage = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  // Extrai todas as categorias únicas e adiciona "Todos"
  const categories = [
    "Todos",
    ...Array.from(new Set(allPortfolioItems.flatMap((p) => p.category))),
  ];

  const filteredPortfolioItems =
    selectedCategory === "Todos"
      ? allPortfolioItems
      : allPortfolioItems.filter((portfolioItem) =>
        portfolioItem.category.includes(selectedCategory),
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
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5DC] to-[#B2AC88] py-16 dark:from-[#4A2C2A] dark:to-[#B2AC88]"
      aria-label="Portfólio de Bolos e Doces Artísticos da Maravilhas da Dedá"
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
              <stop offset="0%" stopColor="#D4AF37" />
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
              <stop offset="0%" stopColor="#D8C0C0" />
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
          <h1 className="animate-on-scroll fade-in-up mb-4 text-4xl font-extrabold text-[#4A2C2A] delay-100 md:text-5xl dark:text-[#F5F5DC]" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
            A Arte de Celebrar com Sabor
          </h1>
          <p className="animate-on-scroll fade-in-up mx-auto max-w-2xl text-lg text-[#4A2C2A] delay-200 dark:text-[#F5F5DC]" style={{ fontFamily: 'Montserrat, Lato, sans-serif' }}>
            Criamos bolos e doces artísticos que transformam sua festa em um evento inesquecível. Cada detalhe é pensado para encantar, cada sabor é uma nova descoberta.
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
              className={`px-5 py-2 font-medium transition-all duration-300 ${selectedCategory === category
                ? "bg-[#4A2C2A] text-[#F5F5DC] shadow-md hover:bg-[#D4AF37] dark:bg-[#4A2C2A] dark:hover:bg-[#D4AF37]"
                : "bg-[#F5F5DC] text-[#4A2C2A] hover:bg-[#D8C0C0] dark:bg-[#B2AC88] dark:text-[#F5F5DC] dark:hover:bg-[#D8C0C0]"
                }`}
              style={{ fontFamily: 'Montserrat, Lato, sans-serif' }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Casos de Reparo (Portfólio de Doces) */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="animate-on-scroll fade-in-up grid grid-cols-1 gap-8 delay-400 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPortfolioItems.length > 0 ? (
            filteredPortfolioItems.map((portfolioItem) => (
              <motion.div
                key={portfolioItem.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 25px rgba(212,175,55,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPortfolioItem(portfolioItem)}
                className="group animate-on-scroll scale-in relative cursor-pointer overflow-hidden bg-[#F5F5DC] shadow-xl transition-transform duration-300 dark:bg-[#4A2C2A] dark:shadow-2xl"
              >
                <div className="animate-on-scroll scale-in relative h-48 overflow-hidden">
                  <Image
                    src={portfolioItem.image}
                    alt={portfolioItem.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 text-[#F5F5DC]">
                      <p className="text-sm font-semibold">
                        {portfolioItem.category.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="animate-on-scroll fade-in-up p-6 delay-100">
                  <h3 className="mb-2 text-xl font-semibold text-[#4A2C2A] dark:text-[#F5F5DC]" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
                    {portfolioItem.name}
                  </h3>
                  <p className="mb-4 text-[#4A2C2A] dark:text-[#F5F5DC]" style={{ fontFamily: 'Montserrat, Lato, sans-serif' }}>
                    {portfolioItem.description}
                  </p>
                  <button className="inline-flex items-center text-[#D4AF37] hover:text-[#B2AC88] dark:text-[#D4AF37] dark:hover:text-[#B2AC88]">
                    Ver Detalhes da Maravilha <FaCarSide className="ml-2 text-sm" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="col-span-full text-center text-[#4A2C2A] dark:text-[#F5F5DC]"
            >
              <p className="text-xl">
                Nenhuma maravilha encontrada nesta categoria.
              </p>
              <p className="text-md mt-2">
                Tente outra categoria ou{" "}
                <button
                  onClick={() => setSelectedCategory("Todos")}
                  className="font-semibold text-[#D4AF37] hover:underline dark:text-[#D4AF37]"
                >
                  veja todas as maravilhas
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
          <h3 className="animate-on-scroll fade-in-up mb-4 text-2xl font-bold text-[#4A2C2A] delay-600 dark:text-[#F5F5DC]" style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
            Vamos adoçar sua próxima celebração?
          </h3>
          <p className="animate-on-scroll fade-in-up mx-auto mb-8 max-w-xl text-lg text-[#4A2C2A] delay-700 dark:text-[#F5F5DC]" style={{ fontFamily: 'Montserrat, Lato, sans-serif' }}>
            Será um prazer ouvir sobre seu evento e ajudar a torná-lo ainda mais especial. Envie uma mensagem para solicitar um orçamento ou tirar dúvidas. Responderemos o mais breve possível.
          </p>
          <motion.a
            href="/p/contato"
            title="Solicite um orçamento com a Maravilhas da Dedá"
            className="inline-flex items-center bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#4A2C2A] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#B2AC88] focus:ring-4 focus:ring-[#D4AF37] focus:outline-none dark:bg-[#D4AF37] dark:hover:bg-[#B2AC88] dark:focus:ring-[#D4AF37]"
            style={{ fontFamily: 'Montserrat, Lato, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicite um Orçamento <FaWrench className="ml-3" />
          </motion.a>
        </motion.div>
      </div>

      {/* Modal de Detalhes do Caso de Reparo */}
      <AnimatePresence>
        {selectedPortfolioItem && (
          <Dialog
            open={!!selectedPortfolioItem}
            onClose={() => setSelectedPortfolioItem(null)}
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
                  {selectedPortfolioItem.name}
                  <button
                    onClick={() => setSelectedPortfolioItem(null)}
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
                        src={selectedPortfolioItem.image}
                        alt={selectedPortfolioItem.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedPortfolioItem.fullDescription}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Destaques:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPortfolioItem.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação (Rodapé - não rola) */}
                <div className="mt-6 flex flex-shrink-0 flex-wrap justify-center gap-4">
                  <a
                    href="/p/contato" // Link para a página de contato/agendamento
                    title={`Agendar serviço para o caso de ${selectedPortfolioItem.name}`}
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