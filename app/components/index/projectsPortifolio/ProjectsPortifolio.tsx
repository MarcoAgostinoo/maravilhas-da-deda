"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { ThemeProvider } from "flowbite-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "animate.css/animate.min.css";

const NAV_NEXT_CLASS = "swiper-button-next-custom";
const NAV_PREV_CLASS = "swiper-button-prev-custom";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

// Default projects data using images from public folder
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Projeto 1",
    description:
      "Descrição do projeto 1 com detalhes sobre a implementação e tecnologias utilizadas.",
    imageUrl: "project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/project1",
  },
  {
    id: "2",
    title: "Projeto 2",
    description:
      "Descrição do projeto 2 destacando os principais recursos e funcionalidades.",
    imageUrl: "project2.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://example.com/project2",
  },
  {
    id: "3",
    title: "Projeto 3",
    description:
      "Descrição do projeto 3 com foco na experiência do usuário e design responsivo.",
    imageUrl: "/project3.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://example.com/project3",
  },
  {
    id: "4",
    title: "Projeto 4",
    description:
      "Descrição do projeto 4 abordando os desafios e soluções implementadas.",
    imageUrl: "/project4.jpg",
    technologies: ["Angular", "Firebase", "SCSS"],
    link: "https://example.com/project4",
  },
  {
    id: "5",
    title: "Projeto 5",
    description:
      "Descrição do projeto 5 com ênfase na arquitetura e escalabilidade.",
    imageUrl: "/project5.jpg",
    technologies: ["React Native", "GraphQL", "AWS"],
    link: "https://example.com/project5",
  },
  {
    id: "6",
    title: "Projeto 6",
    description:
      "Descrição do projeto 6 destacando a inovação e impacto no mercado.",
    imageUrl: "/project6.jpg",
    technologies: ["Flutter", "Django", "Docker"],
    link: "https://example.com/project6",
  },
];

export default function ProjectsPortfolio({
  projetosData = [],
}: {
  projetosData: Project[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const initialSlidesToPrioritize = 3;
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  // Use default projects if none are provided
  const projects = projetosData.length > 0 ? projetosData : defaultProjects;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (!projects || projects.length === 0) {
    return (
      <ThemeProvider>
        <section className="relative min-h-screen w-full overflow-hidden bg-blue-900 dark:bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
              <p className="text-blue-100 dark:text-gray-300">
                Nenhum projeto disponível no momento.
              </p>
            </div>
          </div>
        </section>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <section className="relative min-h-screen w-full overflow-hidden bg-blue-900 dark:bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-5"
          aria-hidden="true"
        ></div>
        <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
            <span className="mb-2 inline-block rounded-full bg-blue-500/10 dark:bg-gray-700 px-3 py-1 text-xs font-medium tracking-wider text-blue-400 dark:text-blue-300 uppercase sm:mb-3 sm:px-4 sm:py-1.5 sm:text-sm">
              Portfólio
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-white via-blue-400 to-blue-500 dark:from-gray-100 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-2xl leading-tight font-bold text-transparent sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Nossos Projetos em Destaque
            </h2>
            <p className="px-2 text-base text-blue-100 dark:text-gray-300 sm:px-0 sm:text-lg md:text-xl">
              Explore nossa coleção de projetos inovadores que transformam ideias
              em realidade.
            </p>
          </div>
          <div className="relative px-2 sm:px-4 md:px-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect={windowWidth < 640 ? "slide" : "coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: windowWidth < 640 ? 0 : 100,
                modifier: 1,
                slideShadows: windowWidth >= 640,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination-custom-portfolio",
              }}
              navigation={{
                nextEl: `.${NAV_NEXT_CLASS}`,
                prevEl: `.${NAV_PREV_CLASS}`,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="!pb-12 sm:!pb-16 md:!pb-20"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 12 },
                375: { slidesPerView: 1.1, spaceBetween: 16 },
                480: { slidesPerView: 1.2, spaceBetween: 20 },
                640: { slidesPerView: 1.5, spaceBetween: 24 },
                768: { slidesPerView: 2.2, spaceBetween: 28 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
                1280: { slidesPerView: 3.5, spaceBetween: 32 },
              }}
            >
              {projects.map((projeto, idx) => (
                <SwiperSlide
                  key={projeto.id}
                  className="group animate__animated animate__fadeInUp xs:!w-[280px] !w-[260px] sm:!w-[300px] md:!w-[320px] lg:!w-[350px]"
                  style={{ height: "auto" }}
                >
                  <ProjectCard
                    project={projeto}
                    isPriority={idx < initialSlidesToPrioritize}
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination-custom-portfolio !mt-6 flex justify-center sm:!mt-8"></div>
            </Swiper>
            <button
              type="button"
              aria-label="Slide anterior"
              role="button"
              tabIndex={0}
              className={`${NAV_PREV_CLASS} absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 transform cursor-pointer rounded-md border border-blue-400 dark:border-gray-600 bg-blue-800 dark:bg-gray-700 p-2 text-blue-400 dark:text-gray-300 transition-all hover:bg-blue-400 hover:text-white dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-800 focus:outline-none sm:left-2 sm:block sm:p-3 md:-left-6 lg:-left-12`}
            >
              <FiArrowLeft
                size={20}
                className="sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              role="button"
              tabIndex={0}
              className={`${NAV_NEXT_CLASS} absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 transform cursor-pointer rounded-md border border-blue-400 dark:border-gray-600 bg-blue-800 dark:bg-gray-700 p-2 text-blue-400 dark:text-gray-300 transition-all hover:bg-blue-400 hover:text-white dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-800 focus:outline-none sm:right-2 sm:block sm:p-3 md:-right-6 lg:-right-12`}
            >
              <FiArrowRight
                size={20}
                className="sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-4 text-center sm:hidden">
            <p className="animate-pulse text-xs text-blue-300/70 dark:text-gray-400">
              ← Deslize para ver mais projetos →
            </p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
