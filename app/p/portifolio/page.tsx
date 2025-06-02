import PortfolioPage from "@/app/components/portifolio/PortifolioPage";
import BannerPages from "@/app/components/bannerPages/BannerPages";

export default function Portifolio () {
  return(
    <div>
      <BannerPages
        title="Portifólio"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portifólio", active: true },
        ]}
      />
      <PortfolioPage />
    </div>
  )
}