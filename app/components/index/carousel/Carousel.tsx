import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";

const carouselItems = [
  {
    id: 1,
    image: "/carousel-1.jpg",
    title: "Serviços Industriais de Qualidade",
    description: "Oferecemos soluções industriais completas para sua empresa",
  },
  {
    id: 2,
    image: "/carousel-2.jpg",
    title: "Experiência e Confiabilidade",
    description: "Mais de 20 anos de experiência no mercado industrial",
  },
  {
    id: 3,
    image: "/carousel-3.jpg",
    title: "Equipe Especializada",
    description:
      "Profissionais altamente qualificados para atender suas necessidades",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] w-full">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 ${index === currentIndex ? "block" : "hidden"}`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="bg-opacity-40 absolute inset-0 rounded-lg bg-black"></div>
                <div
                  className={`animate__animated absolute bottom-0 left-0 w-full p-8 text-white ${
                    index === currentIndex
                      ? direction === "right"
                        ? "animate__fadeInRight"
                        : "animate__fadeInLeft"
                      : ""
                  }`}
                >
                  <h2 className="mb-2 text-4xl font-bold">{item.title}</h2>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-800 shadow-lg transition hover:bg-[#FF6F0F] hover:text-white"
            aria-label="Slide anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-gray-800 shadow-lg transition hover:bg-[#FF6F0F] hover:text-white"
            aria-label="Próximo slide"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-[#FF6F0F]" : "bg-white"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
