import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import ProductGrid from "@/components/ProductGrid";
import Lookbook from "@/components/Lookbook";
import BrandStory from "@/components/BrandStory";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BrandIntro />
      <ProductGrid />
      <Lookbook />
      <BrandStory />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
