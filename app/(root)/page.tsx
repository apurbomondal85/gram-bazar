import Categories from "./Home/Categories"
import DailySellSection from "./Home/DailySellSection"
import HealthySection from "./Home/HealthySection"
import HeroSection from "./Home/HeroSection"
import OnlyForYou from "./Home/OnlyForYou"
import PopularProducts from "./Home/PopularProducts"
import ProductsBanner from "./Home/ProductsBanner"
import ServicesSectioon from "./Home/ServicesSectioon"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSectioon />
      <Categories />
      <ProductsBanner />
      <PopularProducts />
      <HealthySection />
      <OnlyForYou />
      <DailySellSection />
    </div>
  )
}

export default HomePage