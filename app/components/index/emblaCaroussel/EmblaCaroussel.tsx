"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import styles from "./EmblaCaroussel.module.css";
import EmblaCarouselArrowButtons from "./EmblaCarouselArrowButtons";
import EmblaCarouselDotButton from "./EmblaCarouselDotButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  title?: string;
  subtitle?: string;
  showControls?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
};

const slideContent = [
  {
    title: "Eliminação de Barulhos na Suspensão - Hyundai HB20",
    description: "Fim dos 'toc-toc' ao passar em buracos e valetas de São Paulo.",
    url: "/p/servicos",
  },
  {
    title: "Freios com Segurança Total no Trânsito - Chevrolet Onix",
    description: "Chiado e pedal duro no anda-e-para da cidade? Solução garantida.",
    url: "/p/servicos",
  },
  {
    title: "Restauração de Potência e Economia - Fiat Argo",
    description: "Carro 'engasgando' e alto consumo? Injeção eletrônica impecável.",
    url: "/p/servicos",
  },
  {
    title: "Resfriamento Eficiente em Dias Quentes - VW Gol",
    description: "Motor superaquecendo no trânsito das Marginais? Resolvemos para você.",
    url: "/p/servicos",
  },
  {
    title: "Preparação de Veículo para Aplicativos - Renault Kwid",
    description: "Motorista de app precisa de confiabilidade. Garantimos seu ganha-pão.",
    url: "/p/servicos",
  },
  {
    title: "Solução de Problemas Elétricos Complexos - Fiat Palio",
    description: "Luzes no painel, bateria arriando... Encontramos a raiz do problema.",
    url: "/p/servicos",
  },
  {
    title: "Reparo de Câmbio Automático com Trancos e Patinação - Honda Fit (São Paulo)",
    description: "Câmbio automático dando trancos, patinando ou com retenção de marchas em SP? Especialista em conserto e troca de fluido de transmissão automática.",
    url: "/p/servicos",
  },
];

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  title = "Nossos Projetos",
  subtitle = "Veja o Que Concluímos Recentemente",
  showControls = true,
  showDots = true,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
    dragFree: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const autoplayCallback = useCallback(() => {
    if (!emblaApi) return;

    const nextIndex =
      (emblaApi.selectedScrollSnap() + 1) % emblaApi.scrollSnapList().length;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    const intervalId = setInterval(autoplayCallback, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay, autoplayInterval, autoplayCallback]);

  return (
    <div
      className="mt-16 w-full p-6"
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-lg text-blue-900 dark:text-blue-300">{title}</p>
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
          {subtitle}
        </h2>
      </div>
      <section className={`${styles.embla} p-6`}>
        <div className={`${styles.embla__viewport}`} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div
                className={styles.embla__slide}
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} de ${slides.length}`}
              >
                <a
                  href={slideContent[index].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.embla__slide__link}
                >
                  <div className={`${styles.embla__slide__number}`}>
                    <Image
                      src={`/index/caroucelEmbla${index + 1}${imageExtensions[index]}`}
                      alt={`Projeto ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "low"}
                      width={800}
                      height={500}
                    />
                    <div className={`${styles.embla__slide__overlay}`}>
                      <h3
                        className={`${styles.embla__slide__title} text-orange-500`}
                      >
                        {slideContent[index].title}
                      </h3>
                      <p className={styles.embla__slide__description}>
                        {slideContent[index].description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <div className={styles.embla__controls}>
            <div className={styles.embla__buttons}>
              <EmblaCarouselArrowButtons emblaApi={emblaApi} direction="prev" />
              <EmblaCarouselArrowButtons emblaApi={emblaApi} direction="next" />
            </div>
            {showDots && (
              <div className={styles.embla__dots}>
                {scrollSnaps.map((_, index) => (
                  <EmblaCarouselDotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default EmblaCarousel;
const imageExtensions = ['.png', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg'];
