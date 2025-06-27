import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // Mantido FaArrowRight para indicar 'saiba mais'

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServicesListProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  className?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
  title = "Nossos Serviços Principais", // Título ajustado
  subtitle = "Da Manutenção à Solução Complexa, Seu Carro em Boas Mãos", // Subtítulo ajustado
  services,
  className = "",
}) => (
  <section className={`w-full bg-gradient-to-br from-[#F5F5DC] to-[#B2AC88] dark:from-[#4A2C2A] dark:to-[#B2AC88] ${className}`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="animate-on-scroll fade-in-down mb-2 font-medium tracking-widest text-blue-600 uppercase dark:text-blue-400">
          {title}
        </p>
        <h1 className="animate-on-scroll fade-in-up mb-5 text-4xl font-bold text-gray-800 md:text-5xl dark:text-blue-100">
          {subtitle}
        </h1>
      </div>
      <div className="-mx-4 flex flex-wrap justify-center gap-y-8"> {/* Adicionado justify-center */}
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex w-full justify-center px-4 md:w-1/2 lg:w-1/3"
          >
            <ServiceCard service={service} index={idx} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getAnimationClass = (index: number) => {
    // Mantido o comportamento original das animações
    const animations = [
      "animate-on-scroll fade-in-up",
      "animate-on-scroll fade-in-right",
      "animate-on-scroll fade-in-down",
      "animate-on-scroll fade-in-left",
      "animate-on-scroll scale-in",
    ];
    const delay = (index * 100) % 500;
    return `${animations[index % animations.length]} delay-${delay}`;
  };

  return (
    <div
      className={`group w-full max-w-sm overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:hover:shadow-gray-700/50 ${getAnimationClass(index)}`}
    >
      <div className="relative">
        <Image
          className="h-64 w-full object-contain transition-transform duration-300 hover:scale-105 dark:opacity-80"
          src={service.image}
          alt={`Imagem do serviço ${service.title}`}
          width={400}
          height={256}
          style={{ objectFit: "contain" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-700/30"></div>
      </div>
      <div className="flex">
        {/* Este botão pode ser clicável para uma página de detalhes do serviço, se houver */}
        <button
          className="relative flex flex-shrink-0 items-center justify-center bg-blue-900 dark:bg-blue-800"
          style={{ width: 90, height: 90 }}
          aria-label={`Ver detalhes do serviço ${service.title}`}
        >
          <FaArrowRight className="text-2xl text-white" />
        </button>
        <div className="relative flex w-full flex-col justify-center bg-gray-100 p-4 dark:bg-gray-700">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
            {service.title}
          </h5>
          <p className="text-sm text-gray-600 dark:text-blue-200">
            {service.description}
          </p>
          <ul className="mt-2 space-y-1">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-blue-600 dark:text-blue-400"
              >
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;