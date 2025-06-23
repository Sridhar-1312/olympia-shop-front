
import Navbar from "@/components/Navbar";

import MallHighlights from "@/components/MallHighlights";

import Facilities from "@/components/Facilities";
import LocationSection from "@/components/LocationSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

function Products() {
  return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
         <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-red-900/20 to-blue-900/20 animate-pulse"></div>
           <div className="relative z-10">
             <Navbar />
             <div className="pt-32"></div>
            < FeaturedProducts />
             <Footer />
           </div>
         </div>
       </div>
  )
}

export default Products