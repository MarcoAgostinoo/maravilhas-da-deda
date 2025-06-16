import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "flowbite-react";

const services = [
  {
    img: "/index/Servicessuspecao1.jpg", // Imagem de ícone/miniatura para suspensão
    img2: "/index/Servicessuspecao2.jpeg", // Imagem maior para suspensão
    title: "Sistema de Suspensão",
    desc: "Garantimos o conforto, estabilidade e segurança. Diagnóstico e reparo em amortecedores, molas, pivôs e mais.",
    link: "/p/servicos", // Futuramente pode apontar para /servicos/suspensao
  },
  {
    img: "/index/ServicesFreio1.jpg", // Imagem de ícone/miniatura para freios
    img2: "/index/ServicesFreio2.jpg", // Imagem maior para freios
    title: "Sistema de Freios",
    desc: "Sua segurança em primeiro lugar. Revisão completa, troca de pastilhas, discos, fluidos e reparos em geral.",
    link: "/p/servicos", // Futuramente pode apontar para /servicos/freios
  },
  {
    img: "/index/Servicesmotor1.jpg", // Imagem de ícone/miniatura para motor
    img2: "/index/Servicesmotor2.jpg", // Imagem maior para motor
    title: "Motor",
    desc: "O coração do seu carro em boas mãos. Diagnóstico, reparo, troca de correias, análise de ruídos e vazamentos.",
    link: "/p/servicos", // Futuramente pode apontar para /servicos/motor
  },
];

export default function ServicesSection() {
  return (
    <ThemeProvider>
      <section className="w-full bg-gray-100 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll fade-in-up mx-auto max-w-3xl pb-8 text-center">
            <p className="mb-2 font-medium uppercase tracking-widest text-orange-500 dark:text-orange-400">
              Alguns de Nossos Serviços
            </p>
            <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl dark:text-white">
              Serviços Completos para Seu Veículo na Garagem Oficina
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
                      Leia Mais
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