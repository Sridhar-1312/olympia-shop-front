import { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Clock, Car, Wifi, ShoppingCart } from "lucide-react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


const highlightImages = [
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Brands
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Floors
  "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Hours
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Parking
  "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // WiFi
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Food
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Events
  "https://images.unsplash.com/photo-1652739758426-56a564265f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MjQlMkY3JTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D", // Security
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Eco
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Open Days
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", // Anchor Stores
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"  // Location
];

const MallHighlights = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const containerRef = useRef(null);
  
  const highlights = [
    {
      icon: Star,
      number: "200+",
      label: "Premium Brands",
      description: "International & Indian brands",
      bgImage: highlightImages[0]
    },
    {
      icon: MapPin,
      number: "5",
      label: "Floors",
      description: "Spacious shopping levels",
      bgImage: highlightImages[1]
    },
    {
      icon: Clock,
      number: "12",
      label: "Hours Daily",
      description: "10 AM to 10 PM",
      bgImage: highlightImages[2]
    },
    {
      icon: Car,
      number: "2000+",
      label: "Parking Spaces",
      description: "Covered & open parking",
      bgImage: highlightImages[3]
    },
    {
      icon: Wifi,
      number: "Free",
      label: "Wi-Fi",
      description: "High-speed internet",
      bgImage: highlightImages[4]
    },
    {
      icon: ShoppingCart,
      number: "50+",
      label: "Food Options",
      description: "Restaurants & cafes",
      bgImage: highlightImages[5]
    },
    {
      icon: Star,
      number: "100+",
      label: "Events Hosted",
      description: "Exciting events year-round",
      bgImage: highlightImages[6]
    },
    {
      icon: Wifi,
      number: "24x7",
      label: "Security",
      description: "Round-the-clock surveillance",
      bgImage: highlightImages[7]
    },
    {
      icon: Car,
      number: "Eco",
      label: "Green Initiatives",
      description: "Sustainable mall practices",
      bgImage: highlightImages[8]
    },
    {
      icon: Clock,
      number: "365",
      label: "Open Days",
      description: "Open every day of the year",
      bgImage: highlightImages[9]
    },
    {
      icon: ShoppingCart,
      number: "10+",
      label: "Anchor Stores",
      description: "Major retail anchors for all needs",
      bgImage: highlightImages[10]
    },
    {
      icon: MapPin,
      number: "Central",
      label: "Prime Location",
      description: "Located in the heart of the city",
      bgImage: highlightImages[11]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-from-primary-900 to-primary-950">
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-2 mb-6">
          <MapPin className="w-4 h-4 text-orange-400" />
          <span className="text-orange-300 font-medium">Chennai's Premier Shopping Destination</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
          Olympia Mall Chennai
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the ultimate shopping, dining, and entertainment destination in the heart of Chennai.
        </p>
      </div>

      {/* Splide Slider */}
<Splide
  options={{
    type: 'loop',
    autoplay: true,
    interval: 1500,
    perPage: 4,
    perMove: 1,
    gap: '2rem',
    pagination: false,
    arrows: false,
    pauseOnHover: true,
    speed: 1000, // duration in ms
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)', // smooth and elegant
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
  }}
  aria-label="Mall Highlights"
  className="px-6"
>
        {highlights.map((highlight, index) => (
          <SplideSlide key={index}>
            <div className="w-full h-96 group relative rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.02]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center duration-500 group-hover:scale-110 group-hover:blur-sm transition-all"
                style={{ backgroundImage: `url(${highlight.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/40  transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
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
                <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default MallHighlights;