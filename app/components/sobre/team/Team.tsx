// components/Team.jsx
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

// Importando as fontes escolhidas (certifique-se de configurá-las no seu projeto Next.js)
// Exemplo de como importar e usar no Tailwind CSS (via @import em um arquivo CSS global):
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&family=Great+Vibes&display=swap');

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
}

const Team: React.FC<TeamProps> = ({
  title = "Quem Somos",
  subtitle = "Andreia Miguel- Dedá - Chefe Confeiteira",
  members,
  className = "",
}) => (
  // Mantendo o Beige Marfim como base, mas podemos clarear um pouco se necessário
  <section className={`w-full bg-[#F5F5DC] py-12 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-xl text-center">
        {/* Título: Playfair Display, cor contrastante com o fundo (Marrom Chocolate Amargo) */}
        <p className="animate-on-scroll fade-in-down mb-2 font-['Playfair_Display'] font-medium tracking-widest text-[#4A2C2A] uppercase">
          {title}
        </p>
        {/* Subtítulo: Playfair Display, cor de maior contraste (Marrom Chocolate Amargo, mais escuro se necessário) */}
        <h1 className="animate-on-scroll fade-in-up mb-5 text-4xl font-['Playfair_Display'] font-bold text-[#4A2C2A] md:text-5xl">
          {subtitle}
        </h1>
      </div>
      <div className="-mx-4 flex flex-wrap gap-y-8 justify-center">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="flex w-full justify-center px-4 md:w-1/2 lg:w-1/3"
          >
            <TeamMember member={member} index={idx} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

interface TeamMemberProps {
  member: TeamMember;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  const getAnimationClass = (index: number) => {
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
    // Sombra em Marrom Chocolate Amargo
    <div
      className={`group w-full max-w-sm overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#4A2C2A]/30 ${getAnimationClass(
        index
      )}`}
    >
      <div className="relative">
        <Image
          className="h-64 w-full object-contain transition-transform duration-300 hover:scale-105"
          src={member.image}
          alt={`Retrato de ${member.name}`}
          width={400}
          height={256}
          style={{ objectFit: "contain" }}
        />
        {/* Gradiente sutil para dar profundidade, terminando em algo mais escuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="flex">
        {/* Botão principal com fundo Marrom Chocolate Amargo e ícone Dourado */}
        <button
          className="relative flex flex-shrink-0 items-center justify-center bg-[#4A2C2A]"
          style={{ width: 90, height: 90 }}
          aria-label="Mostrar redes sociais"
        >
          <FaArrowRight className="text-2xl text-[#D4AF37]" />
        </button>
        <div className="relative flex w-full flex-col justify-center bg-white p-4">
          {/* Nome: Montserrat, cor contrastante (Marrom Chocolate Amargo) */}
          <h5 className="text-lg font-['Montserrat'] font-semibold text-[#4A2C2A]">{member.name}</h5>
          {/* Cargo: Montserrat, cor contrastante com o nome (Verde Sálvia, um pouco mais escuro se necessário) */}
          <span className="text-[#4A2C2A] font-['Montserrat']">{member.role}</span> {/* Mudei para Marrom Chocolate para maior contraste */}
          {/* Usando um fundo Dourado para os ícones sociais, com um pequeno ajuste de opacidade */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#D4AF37]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.social?.facebook && (
              <a
                className="flex h-8 w-8 items-center justify-center bg-white text-[#4A2C2A] transition-all duration-200 hover:scale-110 hover:bg-[#F5F5DC] hover:text-[#4A2C2A]" // Ícones Marrom Chocolate, fundo Bege Marfim
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook de ${member.name}`}
                title="Facebook"
              >
                <FaFacebookF />
              </a>
            )}
            {member.social?.twitter && (
              <a
                className="flex h-8 w-8 items-center justify-center bg-white text-[#4A2C2A] transition-all duration-200 hover:scale-110 hover:bg-[#F5F5DC] hover:text-[#4A2C2A]"
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Twitter de ${member.name}`}
                title="Twitter"
              >
                <FaTwitter />
              </a>
            )}
            {member.social?.instagram && (
              <a
                className="flex h-8 w-8 items-center justify-center bg-white text-[#4A2C2A] transition-all duration-200 hover:scale-110 hover:bg-[#F5F5DC] hover:text-[#4A2C2A]"
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${member.name}`}
                title="Instagram"
              >
                <FaInstagram />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                className="flex h-8 w-8 items-center justify-center bg-white text-[#4A2C2A] transition-all duration-200 hover:scale-110 hover:bg-[#F5F5DC] hover:text-[#4A2C2A]"
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${member.name}`}
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;