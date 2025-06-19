
import { Car, Wifi, ShoppingCart, Baby, Heart, Camera, CreditCard, Headphones } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Car,
      title: "Valet Parking",
      description: "Premium valet service for your convenience",
      available: "24/7 Available"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the mall",
      available: "Unlimited Access"
    },
    {
      icon: ShoppingCart,
      title: "Personal Shopper",
      description: "Expert assistance for your shopping needs",
      available: "By Appointment"
    },
    {
      icon: Baby,
      title: "Kids Play Area",
      description: "Safe and fun play zones for children",
      available: "Level 3"
    },
    {
      icon: Heart,
      title: "Medical Center",
      description: "First aid and basic medical assistance",
      available: "Level 2"
    },
    {
      icon: Camera,
      title: "Photo Studio",
      description: "Professional photography services",
      available: "Level 1"
    },
    {
      icon: CreditCard,
      title: "ATM & Banking",
      description: "Multiple ATMs and banking services",
      available: "All Levels"
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description: "Multilingual support desk",
      available: "Ground Floor"
    }
  ];

  const amenities = [
    "Wheelchair Accessible",
    "Baby Changing Rooms",
    "Prayer Room",
    "Lost & Found",
    "Currency Exchange",
    "Gift Wrapping",
    "Home Delivery",
    "Tax Refund Service"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience unmatched comfort and convenience with our comprehensive range of facilities 
            designed to enhance your shopping experience.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/30 p-6 transition-all duration-500 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <facility.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                {facility.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {facility.description}
              </p>

              <div className="inline-flex items-center bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                {facility.available}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Amenities</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                <span className="text-gray-300 text-sm font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Services Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">VIP Shopping Experience</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Enjoy exclusive access to our VIP lounge, personal shopping assistance, and premium services. 
            Book your appointment for a truly luxurious shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-orange-300">
              📞 Call: +91 44 1234 5678
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-orange-300">
              ✉️ Email: vip@olympiamall.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
