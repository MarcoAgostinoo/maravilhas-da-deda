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
    image: "/index/slide_01.png",
    alt: "Slide 1",
    pt: "pt-[120px]",
    title: "Bem-vindo à Garagem Oficina",
    subtitle: "Serviços Mecânicos em Geral",
    tagline: "",
    description: "A Garagem Oficina realiza serviços automotivos de alta qualidade, desde manutenções preventivas até reparos complexos, garantindo segurança e desempenho do seu veículo. Agende sua visita.",
    buttons: [
      {
        text: "Entre em contato",
        href: "https://wa.me/5511997032814?text=Olá! Gostaria de informações sobre serviços mecânicos",
        className: "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/index/slide_02.png",
    alt: "Slide 2",
    pt: "pt-[150px]",
    title: "Estamos aqui para te apoiar",
    subtitle: "Serviços de Manutenção Automotiva",
    tagline: "",
    description: "Sob o comando de Mario Fanucchi, mecânico com mais de duas décadas de experiência, oferecemos soluções completas para o seu carro, desde a manutenção preventiva até reparos complexos.",
    buttons: [
      {
        text: "Nossos serviços",
        href: "/p/servicos",
        className: "flex items-center justify-center bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-gray-800 hover:shadow-gray-700/30 focus:ring-4 focus:ring-gray-300 focus:outline-none",
      },
    ],
  },
  {
    image: "/index/slide_03.png",
    alt: "Slide 3",
    pt: "pt-[120px]",
    title: "Temos uma vasta experiência",
    subtitle: "Serviços Automotivos e Reparos de Qualidade",
    tagline: "",
    description: "Agende sua revisão ou solicite um orçamento. Confiança, qualidade e um atendimento personalizado que faz a diferença. Afinal, sua satisfação é o nosso maior combustível.",
    buttons: [
      {
        text: "Saiba mais",
        href: "/p/sobre",
        className: "flex items-center justify-center border border-yellow-400 px-5 py-2.5 text-sm font-medium text-yellow-400 shadow-lg hover:bg-yellow-400 hover:text-white hover:shadow-yellow-400/30 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
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
              {/* Inside the SwiperSlide component, update the text content section: */}
              <div className="relative z-10">
                <div className={`animate-initial px-8 ${slide.pt} text-left md:px-16 lg:px-24`}>
                  <p className="fade-in-right mb-2 text-sm font-bold text-orange-500 dark:text-orange-400 uppercase drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] delay-100 md:text-base">
                    {slide.tagline}
                  </p>
                  <h2 className="fade-in-up mb-4 text-4xl font-black text-white dark:text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] delay-200 md:text-5xl lg:text-6xl">
                    <span className="font-black text-orange-400 dark:text-orange-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{slide.title}</span>
                    <br />
                    <span className="font-black text-orange-400 dark:text-orange-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">{slide.subtitle}</span>
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
