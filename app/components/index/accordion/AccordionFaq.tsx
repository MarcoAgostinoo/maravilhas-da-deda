import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function AccordionFaq() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 mt-14 mb-14 max-w-7xl mx-auto">
      <Accordion collapseAll className="bg-white shadow-md rounded-lg flex-1">
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            O que é a Garagem Oficina?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              A Garagem Oficina é uma oficina mecânica em São Paulo, focada em oferecer serviços automotivos de alta qualidade. Liderada por Mario Fanucchi, um mecânico com mais de 20 anos de experiência, somos especializados em diagnósticos precisos, reparos confiáveis e um atendimento personalizado que cuida do seu carro como se fosse nosso.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Veja mais sobre nossos serviços na seção Serviços.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            Quem é Mario Fanucchi?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Mario Fanucchi é o coração da Garagem Oficina. Com mais de duas décadas de experiência em mecânica automotiva, ele combina paixão, conhecimento técnico e dedicação para oferecer o melhor cuidado ao seu veículo.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Mario é o especialista que você pode confiar para resolver qualquer problema com transparência e qualidade. Conheça mais sobre ele na nossa página Sobre Nós.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            Quais serviços vocês oferecem?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Na Garagem Oficina, oferecemos serviços completos para o seu veículo, incluindo: Sistema de Suspensão, Sistema de Freios, Motor, Injeção Eletrônica, Manutenção Automotiva Geral, Diagnóstico Computadorizado.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Tudo feito com a expertise de Mario Fanucchi para garantir qualidade e segurança.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion collapseAll className="bg-white shadow-md rounded-lg flex-1">
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            Por que escolher a Garagem Oficina?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Escolher a Garagem Oficina é optar por:
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Experiência: Mais de 20 anos cuidando de carros em São Paulo.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Confiança: Diagnósticos honestos e transparentes.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Qualidade: Reparos duradouros com as melhores técnicas.
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Atendimento: Mario cuida pessoalmente do seu veículo.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Paixão: Dedicação que faz a diferença em cada serviço. Seu carro merece o cuidado de quem entende e se importa.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            Onde vocês estão localizados?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Estamos em São Paulo, prontos para atender você. Nosso endereço é: Rua Exemplo, 123 - Vila Mariana - São Paulo - SP - CEP: 04010-000.
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Veja como chegar e nossos horários na página de Contato.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="border-b border-blue-200">
          <AccordionTitle className="text-blue-600 hover:text-orange-500 font-semibold text-lg">
            Como agendar um serviço?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              É simples agendar com a Garagem Oficina! Você pode:
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Ligar: (11) 99703-2814
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-300">
              Mandar mensagem no WhatsApp: (11) 98765-4321
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Preencher o formulário na página de Contato. Entre em contato e deixe seu carro nas mãos de quem realmente entende!
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}