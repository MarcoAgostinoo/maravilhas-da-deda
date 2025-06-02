import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar/NavBar";
import { FooTer } from "./components/footer/FooTer";
import { WhatsAppButton } from "./components/whatsapp-button/WhatsAppButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KiSite - Soluções Web",
  description:
    "Template moderno e otimizado desenvolvido com Next.js e Flowbite React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900 dark:from-gray-800 dark:to-gray-900 dark:text-white`}
      >
        <NavBar />
        {children}
        <FooTer />
        <WhatsAppButton />
        <Script id="init-animations" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window === 'undefined') return;
              
              function initAnimations() {
                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                      }
                    });
                  },
                  {
                    threshold: 0.5,
                    rootMargin: '50px',
                  }
                );

                document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-right, .fade-in-left, .scale-in').forEach((element) => {
                  observer.observe(element);
                });
              }

              // Inicializa as animações quando o DOM estiver pronto
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAnimations);
              } else {
                initAnimations();
              }

              // Reinicializa as animações quando o conteúdo mudar
              const mutationObserver = new MutationObserver(() => {
                initAnimations();
              });

              mutationObserver.observe(document.body, {
                childList: true,
                subtree: true,
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
