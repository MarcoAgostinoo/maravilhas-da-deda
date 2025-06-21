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

// Conteúdo dos slides atualizado para "Maravilhas da Dedá"
const slideContent = [
  {
    title: "Bolos de Casamento: A Obra-Prima do seu Grande Dia",
    description: "Designs elegantes e sabores memoráveis que harmonizam com sua celebração. Cada bolo é uma joia comestível, criada para ser o centro das atenções.",
    url: "/p/servicos/casamentos",
  },
  {
    title: "Festas e Aniversários Temáticos",
    description: "Damos vida à sua comemoração! Bolos e doces personalizados que transformam o tema da sua festa em uma deliciosa realidade.",
    url: "/p/servicos/aniversarios",
  },
  {
    title: "Bolo no Pote: Felicidade em Camadas",
    description: "Uma dose individual de carinho. Sabores como Ninho com Frutas Vermelhas e Chocolate Belga para adoçar qualquer momento.",
    url: "/p/produtos/bolo-no-pote",
  },
  {
    title: "Kit Festa: Celebração Prática e Deliciosa",
    description: "A solução completa para sua festa. Combinação perfeita de bolo e brigadeiros gourmet para celebrar sem preocupações.",
    url: "/p/produtos/kit-festa",
  },
  {
    title: "Cheesecake de Frutas Vermelhas",
    description: "A combinação perfeita do aveludado do cream cheese com o frescor das frutas. Uma sobremesa sofisticada que encanta a todos.",
    url: "/p/produtos/cheesecake",
  },
  {
    title: "Eventos Corporativos com Sofisticação",
    description: "Impressione clientes e colaboradores com doces finos e presentes personalizados que fortalecem a imagem da sua marca.",
    url: "/p/servicos/corporativo",
  },
  {
    title: "Bolo de Cenoura com Cobertura de Chocolate Belga",
    description: "O clássico afetivo com um toque gourmet. Massa fofinha e uma cobertura generosa para um café da tarde inesquecível.",
    url: "/p/produtos/bolos-caseiros",
  },
];

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  // Título e subtítulo padrão atualizados com a identidade da marca
  title = "Conheça Nossas Maravilhas",
  subtitle = "Detalhes que encantam, sabores que apaixonam",
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
        {/* Trocado para usar as cores da identidade visual (sugestão) */}
        <p className="mb-2 text-lg" style={{ color: '#B2AC88' }}>{title}</p>
        <h2 className="text-3xl font-bold" style={{ color: '#4A2C2A' }}>
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
                  className={styles.embla__slide__link}
                >
                  <div className={`${styles.embla__slide__number}`}>
                    <Image
                      // IMPORTANTE: As imagens devem ser nomeadas como caroucelEmbla1.png, caroucelEmbla2.jpg, etc.
                      src={`/index/caroucelEmbla${index + 1}${imageExtensions[index]}`}
                      // Texto alternativo melhorado para SEO e acessibilidade
                      alt={`Maravilhas da Dedá - ${slideContent[index].title}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "low"}
                      width={800}
                      height={500}
                    />
                    <div className={`${styles.embla__slide__overlay}`}>
                      <h3
                        className={`${styles.embla__slide__title} text-white`} // Cor ajustada para melhor contraste com o overlay
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

// NOTA: Certifique-se de que os nomes dos seus arquivos de imagem correspondem a este padrão.
// Exemplo: /public/index/caroucelEmbla1.png, /public/index/caroucelEmbla2.jpg, etc.
// O número de extensões deve corresponder ao número de itens no `slideContent`.
const imageExtensions = ['.png', '.png', '.png', '.png', '.jpg', '.jpg', '.jpg'];