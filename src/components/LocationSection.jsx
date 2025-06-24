import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Car, Train, Bus, ArrowRight, LocateFixed, Loader2 } from "lucide-react";

const LocationSection = () => {
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState(null);
  
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

  // Function to open Google Maps directions
  const openGoogleMaps = (userCoords = null) => {
    // Coordinates for Olympia Mall Chennai
    const mallLatitude = 12.9716;
    const mallLongitude = 80.0497;
    
    // Create Google Maps URL
    let mapsUrl;
    
    if (userCoords) {
      // Directions from user's location to mall
      mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userCoords.latitude},${userCoords.longitude}&destination=${mallLatitude},${mallLongitude}&travelmode=driving`;
    } else {
      // Just show mall location
      mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mallLatitude},${mallLongitude}`;
    }
    
    // Open in a new tab
    window.open(mapsUrl, '_blank');
  };

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    setLocationError(null);
    
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        openGoogleMaps({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        setIsLocating(false);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location access denied. Please enable location services.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("The request to get location timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
        }
      }
    );
  };

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
            
            {/* Interactive Live Map */}
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl h-64 mb-6 overflow-hidden">
              <iframe
                title="Olympia Mall Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.262763123068!2d80.24138751534814!3d13.041772217308157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e0e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sOlympia%20Mall!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    Olympia Mall,<br />
                    Rajiv Gandhi Salai (OMR),<br />
                    Sholinganallur, Chennai, Tamil Nadu 600119
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Opening Hours</p>
                  <p className="text-gray-300 text-sm">
                    Mon - Sun: 10:00 AM - 10:00 PM<br />
                    Holidays: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Contact</p>
                  <p className="text-gray-300 text-sm">
                    +91 44 5678 1234<br />
                    info@olympiamallchennai.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center pt-3 pb-3 rounded-full text-semibold text-white"
                onClick={getCurrentLocation}
              >
                {isLocating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Detecting Location...
                  </>
                ) : (
                  <>
                    <LocateFixed className="w-5 h-5 mr-2" />
                    Get Directions from My Location
                  </>
                )}
              </Button>
              
          
            </div>
            
            {locationError && (
              <div className="mt-4 text-red-400 text-sm p-3 bg-red-900/20 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {locationError}
              </div>
            )}
          </div>
          
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
              onClick={() => window.open('tel:+914456781234')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
              onClick={() => {
                navigator.clipboard.writeText("Olympia Mall, Rajiv Gandhi Salai (OMR), Sholinganallur, Chennai, Tamil Nadu 600119");
                alert("Location copied to clipboard!");
              }}
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