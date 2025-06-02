import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const features = [
  {
    title: "Experiência Comprovada",
    desc: "Mais de 25 anos de atuação em mecânica automotiva, garantindo diagnósticos rápidos e precisos para qualquer tipo de veículo.",
  },
  {
    title: "Confiança e Transparência",
    desc: "Diagnósticos honestos e orçamentos claros, sem serviços desnecessários. Você sabe exatamente o que seu carro precisa.",
  },
  {
    title: "Qualidade e Precisão",
    desc: "Reparos feitos com peças de qualidade e mão de obra especializada para garantir durabilidade e segurança na estrada.",
  },
  {
    title: "Atendimento Personalizado",
    desc: "Todo o serviço é realizado diretamente por Mario Fanucchi, oferecendo cuidado individualizado e atenção aos mínimos detalhes.",
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
              src="/about1.jpg"
              alt="Feature"
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
              POR QUE NOS ESCOLHER!
            </p>
            <h2 className="mb-4 text-4xl leading-tight font-extrabold text-blue-900 dark:text-white">
              Algumas Razões Pelas Quais As Pessoas Nos Escolhem!
            </h2>
            <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
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
