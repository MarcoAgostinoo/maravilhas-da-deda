"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "@/app/hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";
import Image from 'next/image';

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/p/sobre", label: "Sobre" },
  { href: "/p/servicos", label: "Serviços" },
  { href: "/p/portifolio", label: "Portifólio" },
  { href: "/p/contato", label: "Contato" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    if (isMobile && toggleRef.current) {
      toggleRef.current.click();
    }
  };

  return (
    <div className="flex h-0 text-white lg:h-12">
      <div className="hidden w-full overflow-hidden md:flex">
        <div className="relative w-8/12 overflow-hidden bg-gradient-to-r from-pink-400 to-pink-500 md:overflow-visible dark:from-pink-600 dark:to-pink-700">
          <div className="absolute top-0 -right-6 -skew-x-35 bg-gradient-to-r from-pink-500 to-pink-600 p-6 dark:from-pink-700 dark:to-pink-800"></div>
          <div className="flex items-center">
            <p className="relative z-10 mt-2 ml-8 text-lg font-semibold tracking-wide text-white dark:text-rose-100">
              Siga-nos:
            </p>
            <div className="mt-3 ml-4 flex gap-4">
              <Link href="https://www.instagram.com/maravilhas_da_deda/" target="_blank" className="text-white hover:scale-110 hover:text-rose-100 dark:text-rose-100">
                <FaInstagram size={22} />
              </Link>
              <Link href="https://www.facebook.com/andreia.aparecida.371517" target="_blank" className="text-white hover:scale-110 hover:text-rose-100 dark:text-rose-100">
                <FaFacebook size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-4/12 bg-gradient-to-r from-rose-800 to-rose-900 dark:from-rose-950 dark:to-rose-900">
          <p className="mt-2 ml-16 text-lg font-semibold tracking-wide text-white dark:text-rose-100">
            Encomendas: (11) 99294-8196
          </p>
        </div>
      </div>

      <Navbar
        fluid
        className={`fixed z-50 h-23 w-full transition-all duration-300 ${isScrolled ? "top-0 bg-white/60 text-black shadow-lg backdrop-blur-sm dark:bg-gray-900/95 dark:shadow-gray-800/20" : "top-0 bg-transparent md:top-10 dark:bg-transparent"}`}
      >
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-0 py-0 md:flex-row md:gap-4">
          {/* Linha principal em md+ */}
          <div className="hidden md:flex w-full items-center flex-nowrap gap-4">
            <NavbarBrand as={Link} href="/" className="animate-on-scroll fade-in-up p-0 m-0">
              <Image src={theme === 'dark' ? '/logodark.png' : '/logo.png'} alt="Logo" width={48} height={48} className="object-contain w-10 h-10 md:w-[70px] md:h-[70px]" />
            </NavbarBrand>
            <span className={`flex flex-nowrap items-center gap-2 bg-gradient-to-r ${isScrolled ? "from-rose-500 to-pink-500" : "from-white to-white"} bg-clip-text text-xs font-bold text-transparent filter transition-all duration-300 hover:scale-105 hover:from-rose-600 hover:to-pink-600 dark:from-pink-400 dark:to-rose-300 dark:hover:from-pink-500 dark:hover:to-rose-400`}>
              <span className="whitespace-nowrap text-lg">Maravilhas da Dedá</span>
            </span>
            <div className="flex flex-row items-center gap-8 lg:gap-16 ml-6">
              {NAV_LINKS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                  isScrolled={isScrolled}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavItem>
              ))}
            </div>
            <div className="flex flex-nowrap items-center gap-3 ml-auto">
              <Link
                href="https://wa.me/5511992948196?text=Olá! Gostaria de saber mais sobre os doces da Maravilhas da Dedá"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] px-6 py-3 text-white shadow-lg hover:scale-105 hover:bg-[#1EBE57]"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-semibold">WhatsApp</span>
              </Link>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="rounded-full border-2 border-white bg-white/10 p-2 hover:scale-110 hover:bg-rose-100 focus:ring-2 focus:ring-pink-300 focus:outline-none dark:border-gray-300 dark:bg-gray-800/50 dark:hover:bg-gray-700 dark:focus:ring-pink-600"
                >
                  {theme === "dark" ? (
                    <HiSun className="h-5 w-5 text-yellow-400 dark:text-yellow-300" />
                  ) : (
                    <HiMoon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  )}
                </button>
              )}
            </div>
          </div>
          {/* Mobile: logo, texto, tema, toggle na mesma linha; menu colapsável abaixo */}
          <div className="flex w-full items-center justify-between flex-nowrap gap-1 md:hidden">
            <div className="flex items-center flex-nowrap gap-1">
              <NavbarBrand as={Link} href="/" className="animate-on-scroll fade-in-up p-0 m-0">
                <Image src={theme === 'dark' ? '/logodark.png' : '/logo.png'} alt="Logo" width={48} height={48} className="object-contain w-10 h-10" />
              </NavbarBrand>
              <span className={`ml-2 flex flex-nowrap items-center gap-1 bg-gradient-to-r ${isScrolled ? "from-rose-500 to-pink-500" : "from-white to-white"} bg-clip-text text-xs font-bold text-transparent filter transition-all duration-300 hover:scale-105 hover:from-rose-600 hover:to-pink-600 dark:from-pink-400 dark:to-rose-300 dark:hover:from-pink-500 dark:hover:to-rose-400`}>
                <span className="whitespace-nowrap text-sm">Maravilhas da Dedá</span>
              </span>
            </div>
            <div className="flex flex-nowrap items-center gap-1 ml-auto">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="rounded-full border-2 border-white bg-white/10 p-2 hover:scale-110 hover:bg-rose-100 focus:ring-2 focus:ring-pink-300 focus:outline-none dark:border-gray-300 dark:bg-gray-800/50 dark:hover:bg-gray-700 dark:focus:ring-pink-600"
                >
                  {theme === "dark" ? (
                    <HiSun className="h-5 w-5 text-yellow-400 dark:text-yellow-300" />
                  ) : (
                    <HiMoon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  )}
                </button>
              )}
              <NavbarToggle
                ref={toggleRef}
                className={`border-2 transition-all hover:scale-110 lg:hidden ${isScrolled ? "border-gray-800 text-gray-800 dark:border-gray-200 dark:text-gray-200" : "border-white text-white dark:border-gray-200 dark:text-gray-200"}`}
              />
            </div>
          </div>
          {/* Menu colapsável mobile */}
          <NavbarCollapse className="md:hidden">
            <div className={`mt-6 flex flex-col space-y-0 p-4 ${isScrolled ? "bg-white/90 dark:bg-gray-900/95" : "bg-black/70"}`}>
              {NAV_LINKS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isActive={pathname === item.href}
                  isScrolled={isScrolled}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavItem>
              ))}
              <div className="pt-2">
                <Link
                  href="https://wa.me/5511992948196?text=Olá! Gostaria de saber mais sobre os doces da Maravilhas da Dedá"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] px-6 py-3 text-white shadow-lg hover:scale-105 hover:bg-[#1EBE57]"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="font-semibold">WhatsApp</span>
                </Link>
              </div>
            </div>
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  isScrolled: boolean;
  onClick?: () => void;
}

function NavItem({ href, children, isActive, isScrolled, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative block py-2 text-lg font-semibold transition-all hover:scale-105 lg:py-1 ${isScrolled
        ? isActive
          ? "text-rose-700 dark:text-rose-300"
          : "text-gray-900 hover:text-rose-700 dark:text-gray-100 dark:hover:text-rose-300"
        : isActive
          ? "font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          : "text-white hover:text-rose-100"}`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 ${isScrolled ? "bg-rose-600 dark:bg-rose-400" : "bg-white"} transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </Link>
  );
}