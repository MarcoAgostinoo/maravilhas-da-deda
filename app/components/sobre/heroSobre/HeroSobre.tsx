// components/HeroSobre.jsx
import Image from "next/image";

export default function HeroSobre() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex-grow bg-white pt-20 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0 xl:pt-40 xl:pb-0 dark:bg-gray-900"
        style={{
          backgroundImage: "url(/logo2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="animate-on-scroll scale-in overflow-hidden absolute inset-0">
          <Image
            className="hidden h-full w-full object-contain lg:translate-x-[400px] md:block"
            src="/about3.png"
            alt="Oficina Garagem"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative mb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-2/5 bg-white/30 dark:bg-gray-900/80 p-6 rounded-xl shadow-md">
              <h1 className="animate-on-scroll fade-in-right text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white text-shadow">
                Garagem Oficina: Paixão e Expertise a Serviço do Seu Carro
              </h1>
              <p className="animate-on-scroll fade-in-left mt-4 text-sm leading-6 text-gray-800 font-medium sm:text-base sm:leading-7 dark:text-gray-200 text-shadow">
                Há mais de 25 anos, Mario Fanucchi dedica-se à mecânica automotiva com atenção artesanal e profissionalismo. Na Garagem Oficina, cada veículo recebe diagnósticos precisos, reparos confiáveis e um atendimento transparente, como se fosse de família.
              </p>

              <p className="animate-on-scroll fade-in-down mt-8 text-sm font-bold text-gray-900 sm:text-base dark:text-white text-shadow">
                Nossos diferenciais:
              </p>
              <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                <li className="animate-on-scroll fade-in-right flex items-center delay-300">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">🔧</span>
                  <span className="ml-2 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow">
                    Mais de 25 anos de experiência em mecânica automotiva
                  </span>
                </li>
                <li className="animate-on-scroll fade-in-left flex items-center delay-400">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">🤝</span>
                  <span className="ml-2 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow">
                    Atendimento personalizado, direto com o especialista
                  </span>
                </li>
                <li className="animate-on-scroll fade-in-right flex items-center delay-500">
                  <span className="text-sm text-orange-500 sm:text-base dark:text-orange-400">🛠️</span>
                  <span className="ml-2 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow">
                    Diagnósticos honestos e reparos de alta qualidade
                  </span>
                </li>
              </ul>

              <div className="animate-on-scroll fade-in-up group relative mt-8 inline-flex delay-600 sm:mt-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#contato"
                  className="relative inline-flex items-center justify-center border border-transparent bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-base dark:bg-orange-600 dark:hover:bg-orange-700 shadow-lg"
                >
                  Agende Seu Serviço
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-on-scroll fade-in-down delay-700 md:hidden">
          <Image
            className="h-full w-full object-cover sm:max-h-[400px] md:hidden"
            src="/about2.jpg"
            alt="Mario trabalhando na oficina"
            width={800}
            height={400}
            sizes="100vw"
            priority
          />
        </div>
      </section>
    </div>
  );
}