
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-red-900/20 to-blue-900/20 animate-pulse"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <CategoryShowcase />
          <FeaturedProducts />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
