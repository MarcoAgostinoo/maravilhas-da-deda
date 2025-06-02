import BannerPages from "@/app/components/bannerPages/BannerPages";
import FactsSection from "@/app/components/index/factsSection/FactsSection";
import HeroSobre from "@/app/components/sobre/heroSobre/HeroSobre";
import Team from "@/app/components/sobre/team/Team";

export default function Sobre() {
  return (
    <div className="flex flex-col">
      <BannerPages
        title="Sobre Nós"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sobre", active: true },
        ]}
      />
      <HeroSobre />
      <FactsSection />
      <Team
        members={[
          {
            name: "Mario Fanucchi",
            role: "Proprietário",
            image: "/about1.jpg",
            social: {
              facebook: "https://www.facebook.com/mario.fanucchi.1",
              instagram: "https://www.instagram.com/mario.fanucchi.1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
            },
          },
        ]}
      />
    </div>
  );
}
