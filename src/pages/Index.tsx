
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import FeatureSection from "@/components/home/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <PopularProductsSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
