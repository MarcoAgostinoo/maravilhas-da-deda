import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Textos alinhados com a estratégia de marca da Garagem Oficina
const features = [
  {
    title: "Experiência Comprovada",
    desc: "Com mais de 20 anos de experiência, Mario Fanucchi oferece diagnósticos precisos e soluções eficazes, baseadas em um profundo conhecimento técnico.",
  },
  {
    title: "Confiança e Transparência",
    desc: "Acreditamos em diagnósticos honestos e orçamentos claros. Explicamos cada passo, sem empurrar serviços desnecessários. Sua confiança é nosso maior ativo.",
  },
  {
    title: "Qualidade e Precisão",
    desc: "Cada reparo é executado com atenção meticulosa aos detalhes, utilizando peças de qualidade para garantir a durabilidade e a segurança do seu veículo.",
  },
  {
    title: "Atendimento Personalizado",
    desc: "Aqui você fala diretamente com o especialista. Todo o serviço é realizado pessoalmente por Mario Fanucchi, garantindo um cuidado único e atenção total ao seu carro.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Imagem */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <Image
              src="/index/about3.jpg" // Sugestão: Usar uma foto real de Mario Fanucchi trabalhando
              alt="Mario Fanucchi, mecânico especialista da Garagem Oficina, trabalhando em um motor."
              width={600}
              height={400}
              className="w-full rounded-lg object-contain shadow-2xl"
              style={{
                minHeight: 400,
                maxHeight: 480,
                objectPosition: "center",
              }}
              priority
            />
          </div>
          {/* Texto e features */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <p className="mb-2 text-sm font-semibold tracking-wider text-orange-500 uppercase">
              POR QUE ESCOLHER A GARAGEM OFICINA
            </p>
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-blue-900 dark:text-white">
              A Confiança que Nasce da Experiência
            </h2>
            <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
              Na Garagem Oficina, entendemos que seu carro é mais que um veículo: é parte essencial do seu dia a dia. Por isso, nosso compromisso é oferecer um serviço onde a técnica apurada encontra a honestidade e o atendimento pessoal.
            </p>
            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}