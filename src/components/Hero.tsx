
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Truck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-medium">Premium Shopping Experience</span>
            <Star className="w-4 h-4 text-orange-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-orange-200 to-yellow-300 bg-clip-text text-transparent leading-tight">
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience premium shopping with our curated collection of exclusive products. 
            Quality, style, and elegance delivered right to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
            >
              Explore Collections
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">Free Shipping</h3>
              <p className="text-gray-400 text-sm text-center">On orders over $99</p>
            </div>

            <div className="flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">Premium Quality</h3>
              <p className="text-gray-400 text-sm text-center">Curated excellence</p>
            </div>

            <div className="flex flex-col items-center space-y-3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold">Secure Shopping</h3>
              <p className="text-gray-400 text-sm text-center">Protected payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
