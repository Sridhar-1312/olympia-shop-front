
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, ChefHat } from "lucide-react";

const FoodCourt = () => {
  const restaurants = [
    {
      id: 1,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.8,
      priceRange: "₹200-400",
      image: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8LTVxX2dhU29rTWt8fGVufDB8fHx8fA%3D%3D",
      specialty: "Authentic Tamil Cuisine",
      time: "20-30 mins",
      level: "Level 1"
    },
    {
      id: 2,
      name: "McDonald's",
      cuisine: "Fast Food",
      rating: 4.5,
      priceRange: "₹150-300",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
      specialty: "Burgers & Fries",
      time: "10-15 mins",
      level: "Level 2"
    },
    {
      id: 3,
      name: "Mainland China",
      cuisine: "Chinese",
      rating: 4.7,
      priceRange: "₹400-800",
      image: "https://images.unsplash.com/photo-1701773169812-750e47f0ab19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fG1haW4lMjBsYW5kJTIwY2hpbmElMjByZXN0dWFyYW50JTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
      specialty: "Authentic Chinese",
      time: "25-35 mins",
      level: "Level 3"
    },
    {
      id: 4,
      name: "Pizza Hut",
      cuisine: "Italian",
      rating: 4.4,
      priceRange: "₹300-600",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      specialty: "Wood-fired Pizza",
      time: "20-25 mins",
      level: "Level 4"
    },
    {
      id: 5,
      name: "Chai Point",
      cuisine: "Beverages",
      rating: 4.6,
      priceRange: "₹50-200",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjQyODk1N3x8ZW58MHx8fHx8",
      specialty: "Premium Tea & Snacks",
      time: "5-10 mins",
      level: "Level 5"
    },
    {
      id: 6,
      name: "Barbecue Nation",
      cuisine: "Barbecue",
      rating: 4.7,
      priceRange: "₹800-1200",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
      specialty: "Live Grill Experience",
      time: "45-60 mins",
      level: "Level 6"
    }
  ];

  const foodCourtFeatures = [
    {
      icon: ChefHat,
      title: "50+ Restaurants",
      description: "Diverse cuisines from around the world"
    },
    {
      icon: Star,
      title: "Premium Dining",
      description: "Fine dining and casual options"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast food and grab-n-go options"
    },
    {
      icon: MapPin,
      title: "Multiple Levels",
      description: "Food courts on Level 4 & 5"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <ChefHat className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-medium">Culinary Paradise</span>
          </div>
          
          <h2 className="text-4xl custom-heading md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Food Court & Restaurants
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Indulge in a world of flavors at Chennai's largest food destination. From authentic South Indian delicacies 
            to international cuisines, satisfy every craving under one roof.
          </p>
        </div>

        {/* Food Court Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {foodCourtFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/30 overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                
                <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                  {restaurant.cuisine}
                </Badge>

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-full text-sm">
                  {restaurant.level}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{restaurant.rating}</span>
                  </div>
                </div>

                <p className="text-orange-400 text-sm mb-2">{restaurant.specialty}</p>
                
                <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                  <span>{restaurant.priceRange}</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{restaurant.time}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
          >
            Explore All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodCourt;
