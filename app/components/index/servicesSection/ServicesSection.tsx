import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "flowbite-react";

const services = [
  {
    img: "/ServicesSection/services1.png", // Ex: Close-up de uma flor de açúcar
    img2: "/ServicesSection/services2.jpeg", // Ex: Foto de um bolo de casamento elegante
    title: "Casamentos Inesquecíveis",
    desc: "O bolo de casamento é o símbolo da celebração do amor. Criamos designs que harmonizam com o estilo da sua festa, do clássico ao contemporâneo, e mesas de doces finos para encantar seus convidados.",
    link: "/servicos/casamentos",
  },
  {
    img: "/deda/aniversario-miniatura.jpg", // Ex: Close-up de um cupcake temático
    img2: "/deda/aniversario-bolo-tematico.jpg", // Ex: Foto de um bolo de aniversário vibrante
    title: "Festas e Aniversários",
    desc: "Seja um aniversário infantil com o personagem favorito do seu filho ou uma celebração cheia de estilo, nós damos vida ao seu tema. Nossos bolos decorados, cupcakes e doces personalizados completam a festa.",
    link: "/servicos/festas-e-aniversarios",
  },
  {
    img: "/deda/corporativo-miniatura.jpg", // Ex: Close-up de um doce com logo
    img2: "/deda/corporativo-kit-doces.jpg", // Ex: Foto de um kit elegante de doces corporativos
    title: "Eventos Corporativos",
    desc: "Surpreenda clientes e parceiros com um toque de sofisticação. Oferecemos kits de doces, bolos com o logo da sua empresa e lembranças personalizadas que fortalecem a imagem da sua marca.",
    link: "/servicos/corporativo",
  },
];


export default function ServicesSection() {
  return (
    <ThemeProvider>
      <section className="w-full bg-gray-100 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll fade-in-up mx-auto max-w-3xl pb-8 text-center">
            <p className="mb-2 font-medium uppercase tracking-widest text-orange-500 dark:text-orange-400">
              Para Cada Ocasião, uma Doce Maravilha
            </p>
            <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl dark:text-white">
              Celebrações Únicas, Doces Inesquecíveis
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="animate-on-scroll fade-in-up group relative w-full overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800 sm:w-[350px]"
              >
                {/* Container da imagem */}
                <div className="relative flex h-56 w-full items-center justify-center overflow-hidden">
                  {/* Miniatura centralizada */}
                  <Image
                    src={service.img}
                    alt={`Miniatura de ${service.title}`}
                    width={100}
                    height={100}
                    className="absolute top-1/2 left-1/2 z-20 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-orange-500 object-cover opacity-100 shadow-lg transition-all duration-500 group-hover:opacity-0 dark:border-orange-400"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Imagem principal com efeito */}
                  <Image
                    src={service.img2}
                    alt={service.title}
                    fill
                    className="h-56 w-full translate-y-8 object-cover opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 350px) 100vw, 350px"
                  />
                  {/* Overlay escuro */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                {/* Conteúdo */}
                <div className="relative z-20 flex flex-col items-center px-6 py-8">
                  <div className="flex w-full flex-col items-center">
                    <div className="mb-4 flex w-full items-center justify-center gap-2">
                      <hr className="w-1/4 border-t-2 border-orange-500 dark:border-orange-400" />
                      <h3 className="text-center text-xl font-bold text-blue-900 dark:text-white">
                        {service.title}
                      </h3>
                      <hr className="w-1/4 border-t-2 border-orange-500 dark:border-orange-400" />
                    </div>
                    <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
                      {service.desc}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-block rounded bg-orange-500 px-6 py-2 font-semibold text-white shadow transition-all duration-300 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}