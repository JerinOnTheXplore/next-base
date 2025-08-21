import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import ProductsSection from "../../components/ProductsSection";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <ProductsSection></ProductsSection>
    </main>
    </div> 
  );
}
