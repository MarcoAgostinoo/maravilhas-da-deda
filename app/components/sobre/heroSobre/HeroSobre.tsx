import Image from "next/image";

export default function HeroSobre() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex-grow bg-white pt-20 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0 xl:pt-40 xl:pb-0 dark:bg-gray-900"
        style={{
          // Sugestão: Usar uma imagem de fundo sutil, como uma textura de mármore ou linho claro.
          // O logo pode ser aplicado em outro lugar para não poluir o fundo.
          // backgroundImage: "url(/caminho/para/textura-fundo.jpg)",
          backgroundColor: "#F5F5DC", // Usando o Bege Marfim da paleta
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="animate-on-scroll mt-10 scale-in overflow-hidden absolute inset-0">
          <Image
            className="hidden h-full w-full object-contain lg:translate-x-[400px] md:block"
            // IMPORTANTE: Substitua esta imagem por uma foto profissional da Andreia 'Dedá' em ação.
            src="/services2.jpeg" // Exemplo de nome de arquivo
            alt="Andreia 'Dedá', confeiteira da Maravilhas da Dedá, finalizando a decoração de um bolo."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative mb-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-2/5 bg-white/60 dark:bg-gray-900/80 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <h1 className="animate-on-scroll fade-in-right text-3xl font-bold text-[#4A2C2A] sm:text-4xl lg:text-5xl dark:text-white text-shadow-sm">
                A Arte de Transformar Sonhos em Doces Realidades
              </h1>
              <p className="animate-on-scroll fade-in-left mt-4 text-sm leading-6 text-gray-800 font-medium sm:text-base sm:leading-7 dark:text-gray-200 text-shadow-sm">
                À frente da Maravilhas da Dedá está Andreia, confeiteira com anos de experiência na alta gastronomia. Aqui, cada criação é uma obra de arte comestível, feita com técnica, carinho e os ingredientes mais nobres para transformar sua celebração em uma memória inesquecível.
              </p>

              <p className="animate-on-scroll fade-in-down mt-8 text-sm font-bold text-[#4A2C2A] sm:text-base dark:text-white text-shadow-sm">
                Nossos pilares de excelência:
              </p>
              <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                <li className="animate-on-scroll fade-in-right flex items-center delay-300">
                  <span className="text-xl text-[#D4AF37] sm:text-xl dark:text-yellow-400">🎨</span>
                  <span className="ml-3 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow-sm">
                    Design Artístico e Exclusivo, onde cada bolo é uma tela em branco.
                  </span>
                </li>
                <li className="animate-on-scroll fade-in-left flex items-center delay-400">
                  <span className="text-xl text-[#D4AF37] sm:text-xl dark:text-yellow-400">❤️</span>
                  <span className="ml-3 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow-sm">
                    Atendimento próximo e pessoal, direto com a Dedá, para cuidar do seu sonho.
                  </span>
                </li>
                <li className="animate-on-scroll fade-in-right flex items-center delay-500">
                  <span className="text-xl text-[#D4AF37] sm:text-xl dark:text-yellow-400">👩‍🍳</span>
                  <span className="ml-3 flex-1 text-sm font-medium text-gray-900 sm:text-base dark:text-white text-shadow-sm">
                    Ingredientes premium e frescos, do chocolate belga à baunilha de verdade.
                  </span>
                </li>
              </ul>

              <div className="animate-on-scroll fade-in-up group relative mt-8 inline-flex delay-600 sm:mt-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#d8c0c0] to-[#4A2C2A] opacity-70 blur-lg filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="/contato"
                  className="relative inline-flex items-center justify-center border border-transparent bg-[#4A2C2A] px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4A2C2A] focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-base dark:bg-[#4A2C2A] dark:hover:bg-opacity-90 shadow-lg"
                >
                  Fale com a Dedá
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-on-scroll fade-in-down delay-700 md:hidden mt-8">
          <Image
            className="h-full w-full object-cover sm:max-h-[400px] md:hidden"
            // IMPORTANTE: Substitua por uma foto de um bolo ou mesa de doces espetacular.
            src="/services2.jpeg" // Exemplo de nome de arquivo
            alt="Bolo de casamento deslumbrante da Maravilhas da Dedá"
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