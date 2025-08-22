import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import ProductsSection from "../../components/ProductsSection";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen">
        
        <HeroSection />
        <ProductsSection />
        
      </main>
      
    </div>
  );
}
