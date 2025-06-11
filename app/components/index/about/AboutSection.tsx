import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { FaCheck, FaEnvelope, FaPhone } from "react-icons/fa";
import { ThemeProvider } from "flowbite-react";

const AboutSection = () => {
  return (
    <ThemeProvider>
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            {/* Left column with images */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-3 flex h-full">
                <div className="animate-on-scroll fade-in-right w-1/2 self-start px-3">
                  <Image
                    className="hover-scale h-auto w-full object-cover shadow-lg transition-all dark:shadow-gray-700"
                    src="/index/about1.jpg"
                    alt="About Us"
                    width={500}
                    height={300}
                    priority // Optional: prioritize loading for LCP
                  />
                </div>
                <div className="animate-on-scroll fade-in-left w-1/2 self-end px-3">
                  <Image
                    className="hover-scale h-auto w-full object-cover shadow-lg transition-all dark:shadow-gray-700"
                    src="/index/about2.png"
                    alt="About Us"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>

            {/* Right column with content */}
            <div className="animate-on-scroll fade-in-up w-full px-4 lg:w-1/2">
              <p className="animate-on-scroll fade-in-up mb-2 font-medium text-orange-500 uppercase">
                Sobre Nós
              </p>
              <h1 className="animate-on-scroll fade-in-up mb-4 text-5xl font-bold text-blue-900 dark:text-white">
                Conheça o Especialista por Trás da Garagem Oficina
              </h1>
              <p className="animate-on-scroll fade-in-up mb-4 text-gray-600 dark:text-gray-300">
                Mario Fanucchi não é apenas o proprietário; ele é a alma da Garagem Oficina. Com uma paixão que
                atravessa décadas e um conhecimento técnico profundo, Mario trata cada veículo como se fosse o seu.
                Descubra a dedicação de quem realmente entende de carro.
              </p>

              {/* Experience box with list */}
              <div className="mb-4 flex items-center">
                <div className="animate-on-scroll scale-in hover-shadow flex-shrink-0 bg-blue-900 p-8 transition-all dark:bg-gray-800">
                  <h1 className="text-7xl font-bold text-orange-500">25</h1>
                  <h5 className="text-xl font-bold text-orange-500">Anos de</h5>
                  <h5 className="font-bold text-orange-500">Experiência</h5>
                </div>
                <div className="ml-4">
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Experiência Comprovada
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Serviços Qualidade
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Atendimento Pessoa
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-4 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Reparos Completos
                  </p>
                  <p className="animate-on-scroll fade-in-right hover-scale mb-0 transition-all dark:text-white">
                    <span className="mr-2 inline-block">
                      <FaCheck size={20} color="#f97316" />
                    </span>
                    Transparência Total
                  </p>
                </div>
              </div>

              {/* Contact information */}
              <div className="-mx-2 flex flex-wrap pt-2">
                <div className="w-full px-2 sm:w-1/2">
                  <a href="mailto:mario.fanucchi@hotmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="animate-on-scroll fade-in-up hover-scale flex items-center transition-all">
                      <div className="hover-shadow flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 transition-all">
                        <FaEnvelope size={20} color="white" />
                      </div>
                      <div className="ml-3">
                        <p className="mb-1 text-gray-600 dark:text-gray-300">
                          Email
                        </p>
                        <h5 className="mb-0 text-md font-bold text-blue-900 dark:text-white">
                        mario.fanucchi@hotmail.com
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="w-full px-2 sm:w-1/2">
                  <a href="https://wa.me/11997032814" target="_blank" rel="noopener noreferrer">
                    <div className="animate-on-scroll fade-in-up hover-scale flex items-center transition-all">
                      <div className="hover-shadow flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900 transition-all dark:bg-gray-800">
                        <FaPhone size={20} color="white" />
                      </div>
                      <div className="ml-3">
                        <p className="mb-1 text-gray-600 dark:text-gray-300">
                          Ligue para nós
                        </p>
                        <h5 className="mb-0 text-md font-bold text-blue-900 dark:text-white">
                          11 99703-2814
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default AboutSection;
