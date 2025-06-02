import { AnimatedElement } from "../../../styles/AnimatedElement";
import { lazy, Suspense } from "react";

// Lazy loading para componentes pesados
const ServiceCard = lazy(() => import("./ServiceCard"));

export const AnimatedSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Título com animação fade-in-up */}
        <AnimatedElement
          animationClass="fade-in-up"
          delayClass="delay-100"
          durationClass="duration-500"
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-blue-900 dark:text-white">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conheça nossas soluções inovadoras
          </p>
        </AnimatedElement>

        {/* Cards com diferentes animações */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Suspense
            fallback={
              <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-800" />
            }
          >
            <ServiceCard
              title="Design Moderno"
              description="Criamos interfaces modernas e responsivas que encantam seus usuários."
              animation="fade-in-left"
              delay="delay-200"
            />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-800" />
            }
          >
            <ServiceCard
              title="Desenvolvimento"
              description="Soluções tecnológicas robustas e escaláveis para seu negócio."
              animation="scale-in"
              delay="delay-300"
            />
          </Suspense>

          <Suspense
            fallback={
              <div className="h-48 animate-pulse bg-gray-100 dark:bg-gray-800" />
            }
          >
            <ServiceCard
              title="Suporte 24/7"
              description="Suporte técnico disponível 24 horas por dia, 7 dias por semana."
              animation="fade-in-right"
              delay="delay-400"
            />
          </Suspense>
        </div>

        {/* Seção de destaque com fade-in-down */}
        <AnimatedElement
          animationClass="fade-in-down"
          delayClass="delay-500"
          durationClass="duration-700"
          className="bg-blue-900 p-8 text-center text-white dark:bg-blue-900"
        >
          <h3 className="mb-4 text-2xl font-bold">
            Comece seu projeto hoje mesmo
          </h3>
          <p className="mb-6">
            Transforme suas ideias em realidade com nossa equipe especializada
          </p>
          <button className="bg-orange-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-orange-600">
            Fale Conosco
          </button>
        </AnimatedElement>
      </div>
    </section>
  );
};
