"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb } from "react-icons/fa"; // Mantido FaLightbulb para o botão "Saber Mais"

// --- Interfaces para as Props ---

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  details: ReactNode;
  callToActionText: string;
  callToActionLink: string;
}

interface ServicesOverviewProps {
  title: string;
  description: string;
  features: Feature[];
  showGlobalCTA?: boolean;
  globalCTATitle?: string;
  globalCTADescription?: string;
  globalCTAText?: string;
  globalCTALink?: string;
}

const ServicesOverview = ({
  title,
  description,
  features,
  showGlobalCTA = true,
  globalCTATitle = "Pronto para transformar sua presença digital?",
  globalCTADescription = "Entre em contato conosco e vamos construir algo incrível juntos.",
  globalCTAText = "Fale Conosco Agora!",
  globalCTALink = "#",
}: ServicesOverviewProps) => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  const handleCardClick = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-ivory to-sage py-16 dark:from-chocolate dark:to-sage"
      aria-label="Visão Geral de Serviços"
    >
      {/* Background animado (mantido como estava) */}
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
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-chocolate md:text-4xl dark:text-gold">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-chocolate dark:text-ivory">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                flippedCardIndex !== index
                  ? {
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                  }
                  : {}
              }
              onClick={() => handleCardClick(index)} // O card inteiro continua virando ao ser clicado
              className={`relative h-[300px] cursor-pointer bg-white p-8 shadow-xl transition-all duration-500 will-change-transform md:h-[320px] dark:bg-gray-800 dark:shadow-2xl`}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Lado Frontal do Card */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-between p-8"
                initial={false}
                animate={{
                  rotateY: flippedCardIndex === index ? 180 : 0,
                  opacity: flippedCardIndex === index ? 0 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div>
                  <div className="mb-4 text-center md:text-left">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                <button
                  className="mt-4 inline-flex items-center justify-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  aria-label={`Saber mais sobre ${feature.title}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Mantém a parada da propagação
                    handleCardClick(index); // Chama diretamente a função de virar o card
                  }}
                >
                  Saber Mais <FaLightbulb className="ml-2" />
                </button>
              </motion.div>

              {/* Lado Traseiro (Flipped) do Card */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-between p-1"
                initial={false}
                animate={{
                  rotateY: flippedCardIndex === index ? 0 : -180,
                  opacity: flippedCardIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  backfaceVisibility: "hidden",
                  transform: `rotateY(${flippedCardIndex === index ? 0 : -180
                    }deg)`,
                }}
              >
                <div> {/* Mantido o layout original do verso */}
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title} - Detalhes
                  </h3>
                  {feature.details}
                </div>
                <div className="mt-4 flex flex-col items-center"> {/* Mantido o layout original do verso */}
                  <a
                    href={feature.callToActionLink}
                    className="inline-flex items-center bg-blue-600 px-5 py-2 text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
                    aria-label={feature.callToActionText}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {feature.callToActionText}
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedCardIndex(null);
                    }}
                    className="mt-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Voltar e fechar detalhes"
                  >
                    Voltar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Geral (opcional via prop) */}
        {showGlobalCTA && (
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {globalCTATitle}
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-700 dark:text-gray-300">
              {globalCTADescription}
            </p>
            <motion.a
              href={globalCTALink}
              className="inline-flex items-center bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {globalCTAText}
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesOverview;