
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Car, Train, Bus } from "lucide-react";

const LocationSection = () => {
  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Easy access via OMR & ECR",
      details: "2000+ parking spaces available"
    },
    {
      icon: Train,
      title: "By Metro",
      description: "Nearest: Velachery Metro Station",
      details: "5 mins walk from station"
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Multiple bus routes available",
      details: "Direct connectivity from all areas"
    }
  ];

  const nearbyLandmarks = [
    "Phoenix MarketCity - 2 km",
    "VR Chennai - 3 km",
    "Chennai Airport - 8 km",
    "Express Avenue - 12 km",
    "Marina Beach - 15 km",
    "Central Railway Station - 18 km"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-medium">Visit Us in Chennai</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Location & Directions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conveniently located in the heart of Chennai with excellent connectivity 
            and easy access from all parts of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
            
            {/* Map Placeholder */}
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl h-64 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Interactive Map</p>
                  <p className="text-gray-300 text-sm">Click to view full map</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    123 OMR Main Road, Thoraipakkam,<br />
                    Chennai, Tamil Nadu 600097
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Mall Timings</p>
                  <p className="text-gray-300 text-sm">
                    Daily: 10:00 AM - 10:00 PM<br />
                    (Extended hours during festivals)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Contact</p>
                  <p className="text-gray-300 text-sm">
                    +91 44 1234 5678<br />
                    info@olympiamall.com
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              Get Directions
            </Button>
          </div>

          {/* Transport & Nearby */}
          <div className="space-y-8">
            {/* How to Reach */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">How to Reach</h3>
              
              <div className="space-y-6">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{option.title}</h4>
                      <p className="text-gray-300 text-sm mb-1">{option.description}</p>
                      <p className="text-orange-400 text-xs">{option.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nearby Landmarks</h3>
              
              <div className="grid grid-cols-1 gap-3">
                {nearbyLandmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Parking
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Share Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
