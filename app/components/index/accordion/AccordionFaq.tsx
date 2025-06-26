import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export function AccordionFaq() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 mt-14 mb-14 max-w-7xl mx-auto">
      <Accordion collapseAll className="bg-ivory shadow-md rounded-lg flex-1">
        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            O que é a Maravilhas da Dedá?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              A Maravilhas da Dedá é uma confeitaria premium artesanal localizada em São Paulo, especializada em bolos personalizados, doces finos e sobremesas sob medida para casamentos, festas e eventos corporativos.
            </p>
            <p className="text-chocolate dark:text-ivory">
              Cada criação é feita com ingredientes selecionados e atenção aos detalhes, unindo sabor, beleza e sofisticação.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            Quem é a Dedá?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              Andreia, carinhosamente chamada de Dedá, é confeiteira profissional com anos de experiência na alta gastronomia e fundadora da Maravilhas da Dedá.
            </p>
            <p className="text-chocolate dark:text-ivory">
              Ela cuida pessoalmente de cada etapa — da criação ao atendimento — garantindo que cada doce conte uma história e encante os sentidos.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            Vocês atendem que tipos de eventos?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              Atendemos casamentos, aniversários, batizados, chás de bebê, eventos corporativos e comemorações personalizadas.
            </p>
            <p className="text-chocolate dark:text-ivory">
              Nossos bolos e doces são planejados sob medida para harmonizar com o estilo do evento, seja clássico, moderno, temático ou institucional.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <Accordion collapseAll className="bg-ivory shadow-md rounded-lg flex-1">
        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            Por que escolher a Maravilhas da Dedá?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              Cada detalhe é pensado com carinho e profissionalismo. Utilizamos ingredientes de alta qualidade, como chocolate belga e baunilha natural, e entregamos criações que unem beleza e sabor.
            </p>
            <p className="text-chocolate dark:text-ivory">
              Nosso atendimento é direto com a confeiteira, garantindo que sua ideia seja transformada exatamente como sonhou.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            Como funciona o atendimento e a entrega?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              O atendimento é feito de forma personalizada pelo WhatsApp ou e-mail. Agendamos uma conversa para entender sua necessidade, sugerimos sabores e designs, e acompanhamos todo o processo.
            </p>
            <p className="text-chocolate dark:text-ivory">
              Entregamos em São Paulo e região com total cuidado e pontualidade.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel className="border-b border-sage">
          <AccordionTitle className="text-chocolate hover:text-gold font-semibold text-lg">
            Como faço para encomendar?
          </AccordionTitle>
          <AccordionContent className="p-4 max-h-64 overflow-y-auto">
            <p className="mb-2 text-chocolate dark:text-ivory">
              É simples! Você pode:
            </p>
            <ul className="list-disc list-inside text-chocolate dark:text-ivory">
              <li>Enviar uma mensagem pelo WhatsApp: (11) 99294-8196</li>
              <li>Entrar em contato pelo e-mail: maravilhasdadeda@gmail.com</li>
              <li>Preencher o formulário na nossa página de contato</li>
            </ul>
            <p className="mt-2 text-chocolate dark:text-ivory">
              Ficaremos felizes em transformar o seu evento em uma doce lembrança!
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
