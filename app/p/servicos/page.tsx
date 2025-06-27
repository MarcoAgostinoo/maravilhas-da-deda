"use client";

import BannerPages from "@/app/components/bannerPages/BannerPages";
// Remove or use HeroServices
// import HeroServices from "@/app/components/services/heroServices/HeroServices";
import ServicesList from "@/app/components/services/servicesList/ServicesList";
import ServicesOverview from "@/app/components/services/servicesOverview/ServicesOverview";

const services = [
  {
    title: "Bolos de Casamento/servicos1.jpg",
    description:
      "Designs elegantes, sabores memoráveis e detalhes artísticos para tornar seu grande dia inesquecível.",
    image: "/servicos/servicos1.png", // Troque para uma imagem real se houver
    features: [
      "Modelagem artística e personalizada",
      "Sabores sofisticados e exclusivos",
      "Decoração com flores de açúcar e detalhes em dourado",
      "Mesas de doces finos: brigadeiros gourmet, macarons, bem-casados",
    ],
  },
  {
    title: "Festas e Aniversários",
    description:
      "Bolos temáticos, doces personalizados e kits festa que encantam todas as idades e estilos de comemoração.",
    image: "/servicos/servicos2.jpeg",
    features: [
      "Bolos decorados com pasta americana e esculturas",
      "Cupcakes, pirulitos de chocolate e brigadeiros",
      "Kits festa: marmitinhas, bolos no pote, mini bolos",
      "Opções para todos os temas e faixas etárias",
    ],
  },
  {
    title: "Eventos Corporativos",
    description:
      "Soluções sob medida para empresas: presentes, lembranças e bolos personalizados que impressionam.",
    image: "/servicos/servicos3.jpeg",
    features: [
      "Bolos com logo da empresa",
      "Kits de doces finos para eventos e datas comemorativas",
      "Embalagens elegantes e personalizadas",
      "Entrega pontual em toda São Paulo",
    ],
  },
  {
    title: "Bolos no Pote & Especiais",
    description:
      "Sabores irresistíveis em porções individuais, perfeitos para presentear ou adoçar o dia a dia.",
    image: "/servicos/servicos4.jpg",
    features: [
      "Sabores: sensação, doce de leite com abacaxi, ninho com frutas vermelhas",
      "Bolos de cenoura com chocolate, cheesecake de frutas vermelhas",
      "Pudim tradicional tamanho grande",
      "Brigadeiros gourmet: morango, ninho, chocolate",
    ],
  },
];

export default function Servicos() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#F5F5DC] to-[#B2AC88] dark:from-[#4A2C2A] dark:to-[#B2AC88]">
      <BannerPages
        title="Serviços, Doces Inesquecíveis"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", active: true },
        ]}
      />
      <ServicesList
        title="O Que Fazemos"
        subtitle="Confeitaria artística para celebrações únicas. Cada doce é uma obra-prima criada com carinho, sofisticação e atenção aos detalhes."
        services={services}
      />
      <ServicesOverview
        title="Por que escolher a Maravilhas da Dedá?"
        description="Unimos técnica, criatividade e ingredientes selecionados para criar doces que são o coração da sua celebração. Atendimento personalizado, arte em cada detalhe e sabores que encantam."
        features={[]}
        showGlobalCTA={true}
        globalCTATitle="Vamos adoçar sua próxima celebração?"
        globalCTADescription="Entre em contato e descubra como transformar seu evento em uma doce memória inesquecível."
        globalCTAText="Solicite um Orçamento"
        globalCTALink="/p/contato"
      />
    </div>
  );
}