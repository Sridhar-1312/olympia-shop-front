
import { Star, MapPin, Clock, Car, Wifi, ShoppingCart } from "lucide-react";

const MallHighlights = () => {
  const highlights = [
    {
      icon: Star,
      number: "200+",
      label: "Premium Brands",
      description: "International & Indian brands"
    },
    {
      icon: MapPin,
      number: "5",
      label: "Floors",
      description: "Spacious shopping levels"
    },
    {
      icon: Clock,
      number: "12",
      label: "Hours Daily",
      description: "10 AM to 10 PM"
    },
    {
      icon: Car,
      number: "2000+",
      label: "Parking Spaces",
      description: "Covered & open parking"
    },
    {
      icon: Wifi,
      number: "Free",
      label: "Wi-Fi",
      description: "High-speed internet"
    },
    {
      icon: ShoppingCart,
      number: "50+",
      label: "Food Options",
      description: "Restaurants & cafes"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-medium">Chennai's Premier Shopping Destination</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Olympia Mall Chennai
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate shopping, dining, and entertainment destination in the heart of Chennai. 
            Your one-stop destination for everything you desire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/30 p-8 text-center transition-all duration-500 hover:scale-105 hover:bg-white/5"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {highlight.number}
                </span>
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange-300 transition-colors">
                {highlight.label}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MallHighlights;
