import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export function FooTer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-pink-900 to-pink-800 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden">
      {/* Imagem de fundo ocupando toda a área do footer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/logo.png"
          alt="Logo de Fundo"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="relative container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">Maravilhas da Dedá</h3>
          <p className="text-sm italic">&quot;A doçura que transforma momentos em memórias&quot;</p>
          <p className="text-xs text-gray-300 dark:text-gray-400">
            Confeitaria artesanal especializada em bolos personalizados e doces finos para casamentos, aniversários e eventos especiais. Feitos com amor, arte e ingredientes de alta qualidade.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/5511992948196"
              className="text-white transition-colors hover:text-pink-300 dark:hover:text-pink-400"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/maravilhasdadeda"
              className="text-white transition-colors hover:text-pink-300 dark:hover:text-pink-400"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/maravilhasdadeda"
              className="text-white transition-colors hover:text-pink-300 dark:hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">Especialidades</h4>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li>Bolos de Casamento</li>
            <li>Doces Finos para Eventos</li>
            <li>Festas e Aniversários</li>
            <li>Mesas Temáticas</li>
            <li>Kits Corporativos</li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <nav className="flex flex-col items-center md:items-start w-full">
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase text-center md:text-left w-full">Links Rápidos</h4>
          <ul className="space-y-2 text-sm w-full flex flex-col items-center md:items-start">
            <li className="w-full text-center md:text-left">
              <Link href="/p/sobre" className="transition-colors hover:text-pink-300 dark:hover:text-pink-400">
                Sobre Nós
              </Link>
            </li>
            <li className="w-full text-center md:text-left">
              <Link href="/p/portfolio" className="transition-colors hover:text-pink-300 dark:hover:text-pink-400">
                Portfólio
              </Link>
            </li>
            <li className="w-full text-center md:text-left">
              <Link href="/p/servicos" className="transition-colors hover:text-pink-300 dark:hover:text-pink-400">
                Serviços
              </Link>
            </li>
            <li className="w-full text-center md:text-left">
              <Link href="/p/contato" className="transition-colors hover:text-pink-300 dark:hover:text-pink-400">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contato */}
        <div className="space-y-3">
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">Contato</h4>
          <div className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2 h-4 w-4 text-pink-300 dark:text-pink-400" />
            <span className="text-gray-300 dark:text-gray-400">
              Rua Dirce, nº 130 – Estância Guatambu, Itaquaquecetuba  – SP
            </span>
          </div>
          <div className="flex items-center text-sm">
            <FaPhoneAlt className="mr-2 h-4 w-4 text-pink-300 dark:text-pink-400" />
            <span className="text-gray-300 dark:text-gray-400">(11) 99294-8196</span>
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2 h-4 w-4 text-pink-300 dark:text-pink-400" />
            <span className="text-gray-300 dark:text-gray-400">maravilhasdadeda@gmail.com</span>
          </div>
          <div className="mt-2">
            <p className="font-medium uppercase text-sm">Atendimento</p>
            <p className="text-xs text-gray-300 dark:text-gray-400">
              Segunda a Sexta: 09:00–18:00<br />
              Sábados: 09:00–13:00
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-pink-700 dark:border-gray-700 py-6 text-center text-sm text-gray-300 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Maravilhas da Dedá. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://kisite.com.br"
            className="text-pink-300 hover:underline dark:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            KiSite Soluções Web
          </a>
        </p>
      </div>
    </footer>
  );
}
