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
  subtitle = "Mario Fanucchi - Mecânico Especialista",
  members,
  className = "",
}) => (
  <section className={`w-full bg-gray-50 py-12 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="animate-on-scroll fade-in-down mb-2 font-medium tracking-widest text-blue-600 uppercase">
          {title}
        </p>
        <h1 className="animate-on-scroll fade-in-up mb-5 text-4xl font-bold text-gray-800 md:text-5xl">
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
    <div
      className={`group w-full max-w-sm overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl ${getAnimationClass(
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="flex">
        <button
          className="relative flex flex-shrink-0 items-center justify-center bg-blue-900"
          style={{ width: 90, height: 90 }}
          aria-label="Mostrar redes sociais"
        >
          <FaArrowRight className="text-2xl text-white" />
        </button>
        <div className="relative flex w-full flex-col justify-center bg-gray-100 p-4">
          <h5 className="text-lg font-semibold text-gray-800">{member.name}</h5>
          <span className="text-blue-600">{member.role}</span>
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.social?.facebook && (
              <a
                className="flex h-8 w-8 items-center justify-center bg-white text-orange-500 transition-all duration-200 hover:scale-110 hover:bg-gray-100"
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
                className="flex h-8 w-8 items-center justify-center bg-white text-orange-500 transition-all duration-200 hover:scale-110 hover:bg-gray-100"
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
                className="flex h-8 w-8 items-center justify-center bg-white text-orange-500 transition-all duration-200 hover:scale-110 hover:bg-gray-100"
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
                className="flex h-8 w-8 items-center justify-center bg-white text-orange-500 transition-all duration-200 hover:scale-110 hover:bg-gray-100"
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
