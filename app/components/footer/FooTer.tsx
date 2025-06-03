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
  FaLinkedinIn,
} from "react-icons/fa";

export function FooTer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden">
      {/* Imagem de fundo ocupando toda a área do footer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/logo2.png"
          alt="Logo de Fundo"
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* Container Principal (conteúdo do footer em cima da imagem) */}
      <div className="relative container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">Garagem Oficina</h3>
          <p className="text-sm italic">&quot;Nosso Compromisso com Excelência Automotiva&quot;</p>
          <p className="text-xs text-gray-300 dark:text-gray-400">
            Com mais de 20 anos de experiência, oferecemos diagnósticos precisos, reparos confiáveis e
            atendimento personalizado. Aqui, seu carro recebe o cuidado que merece.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/5511997032814"
              className="text-white transition-colors hover:text-orange-400 dark:hover:text-orange-500"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400 dark:hover:text-orange-500"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400 dark:hover:text-orange-500"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-orange-400 dark:hover:text-orange-500"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">Serviços</h4>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li>Manutenção Preventiva</li>
            <li>Suspensão e Freios</li>
            <li>Injeção Eletrônica</li>
            <li>Diagnóstico Computadorizado</li>
            <li>Revisões Periódicas</li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <nav>
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/p/sbre" className="transition-colors hover:text-orange-400 dark:hover:text-orange-500">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/p/servicos" className="transition-colors hover:text-orange-400 dark:hover:text-orange-500">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/p/servicos" className="transition-colors hover:text-orange-400 dark:hover:text-orange-500">
                Por Que Escolher
              </Link>
            </li>
            <li>
              <Link href="/p/contato" className="transition-colors hover:text-orange-400 dark:hover:text-orange-500">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contato */}
        <div className="space-y-3">
          <h4 className="mb-4 text-lg font-semibold tracking-wide uppercase">Contato</h4>
          <div className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2 h-4 w-4 text-orange-400 dark:text-orange-500" />
            <span className="text-gray-300 dark:text-gray-400">Rua Fonseca Galvão, nº 55 – Vila Mariana, São Paulo – SP</span>
          </div>
          <div className="flex items-center text-sm">
            <FaPhoneAlt className="mr-2 h-4 w-4 text-orange-400 dark:text-orange-500" />
            <span className="text-gray-300 dark:text-gray-400">(11) 9 5451-0976</span>
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2 h-4 w-4 text-orange-400 dark:text-orange-500" />
            <span className="text-gray-300 dark:text-gray-400">mario.fanucchi@hotmail.com</span>
          </div>
          <div className="mt-2">
            <p className="font-medium uppercase text-sm">Horário de Funcionamento</p>
            <p className="text-xs text-gray-300 dark:text-gray-400">Seg–Sex: 08:00–17:00</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-blue-700 dark:border-gray-700 py-6 text-center text-sm text-gray-300 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Garagem Oficina. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://kisite.com.br"
            className="text-orange-400 hover:underline dark:text-orange-500"
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
