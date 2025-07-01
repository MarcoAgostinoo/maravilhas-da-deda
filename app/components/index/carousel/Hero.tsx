"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/hero1.png", // Substitua pela imagem da vitrine principal
    alt: "Bolos e doces decorados",
    pt: "pt-[120px]",
    title: "Encante seus convidados",
    subtitle: "Com doces e bolos sofisticados",
    tagline: "Maravilhas da Dedá",
    description: "Doces finos e bolos decorados para transformar seu evento em uma experiência inesquecível. Elegância, sabor e beleza em cada detalhe.",
    buttons: [
      {
        text: "Fazer seu pedido",
        href: "https://wa.me/5511992948196?text=Olá! Gostaria de fazer um orçamento para doces e bolos personalizados.",
        className:
          "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/hero2.png", // Imagem de bolos de casamento ou doces finos
    alt: "Bolos de casamento",
    pt: "pt-[120px]",
    title: "Momentos que merecem o melhor",
    subtitle: "Bolos, doces e encantos",
    tagline: "Feitos com amor e perfeição",
    description: "Seja um casamento, aniversário ou evento corporativo, criamos verdadeiras obras de arte com sabor e elegância para deixar sua celebração inesquecível.",
    buttons: [
      {
        text: "Ver portfólio",
        href: "/p/portifolio",
        className:
          "flex items-center justify-center bg-yellow-400 px-5 py-2.5 text-sm font-medium text-gray-900 shadow-lg hover:bg-yellow-500 hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/hero3.jpg", // Imagem de mesa de doces decorada
    alt: "Doces finos para eventos",
    pt: "pt-[120px]",
    title: "Sabores que encantam",
    subtitle: "Experiência e sofisticação",
    tagline: "Confeitaria premium em São Paulo",
    description: "Com anos de experiência na alta gastronomia, entregamos doces e bolos que unem sabor, beleza e qualidade, feitos sob medida para tornar sua festa única.",
    buttons: [
      {
        text: "Saiba mais",
        href: "/p/servicos",
        className:
          "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
    ],
  },
];


export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen w-full bg-gray-900 dark:bg-gray-950" />;
  }

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-screen w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div className="relative z-10">
                <div className={`animate-initial px-8 ${slide.pt} text-left md:px-16 lg:px-24 mt-20`}>
                  <p className="fade-in-right mb-2 lg:mb-8 text-sm font-bold bg-orange-200 text-orange-500 dark:text-orange-400 uppercase drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] delay-100 md:text-base inline-block px-2 py-0.5 rounded-full">
                    {slide.tagline}
                  </p>
                  <h2 className="fade-in-up mb-4 text-4xl font-black text-white dark:text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] delay-200 md:text-5xl lg:text-6xl">
                    <span className="font-black text-orange-400  dark:text-orange-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{slide.title}</span>
                    <br />
                    <span className="font-black text-white-500 mt-20 dark:text-orange-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{slide.subtitle}</span>
                  </h2>
                  <p className="fade-in-up mb-8 max-w-2xl text-lg leading-relaxed font-semibold text-white dark:text-gray-200 drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] delay-300 md:text-xl">
                    {slide.description}
                  </p>
                  <div className="fade-in-up flex gap-4 delay-400">
                    {slide.buttons.map((button, buttonIndex) => (
                      <Link target="_blank" href={button.href} key={buttonIndex}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className={button.className}
                        >
                          {button.text}
                        </motion.button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
