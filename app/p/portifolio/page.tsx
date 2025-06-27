import PortfolioPage from "@/app/components/portifolio/PortifolioPage";
import BannerPages from "@/app/components/bannerPages/BannerPages";

export default function Portifolio () {
  return(
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
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