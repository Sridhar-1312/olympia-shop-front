
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Gift, Tag } from "lucide-react";

const EventsOffers = () => {
  const events = [
    {
      id: 1,
      title: "Chennai Shopping Festival",
      description: "Mega discounts up to 70% off on all brands",
      date: "Jan 15 - Jan 31, 2025",
      time: "10:00 AM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
      type: "Festival",
      discount: "Up to 70% OFF"
    },
    {
      id: 2,
      title: "Weekend Family Fun",
      description: "Special activities and entertainment for families",
      date: "Every Weekend",
      time: "11:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      type: "Event",
      discount: "Free Entry"
    },
    {
      id: 3,
      title: "Fashion Week Chennai",
      description: "Latest trends and runway shows by top designers",
      date: "Feb 10 - Feb 15, 2025",
      time: "6:00 PM - 9:00 PM",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      type: "Fashion",
      discount: "VIP Access"
    }
  ];

  const offers = [
    {
      title: "Student Discount",
      description: "15% off on all purchases",
      validTill: "Valid all year",
      icon: Gift,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Senior Citizen Special",
      description: "20% off every Tuesday",
      validTill: "Every Tuesday",
      icon: Tag,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Early Bird Offers",
      description: "Extra 10% off before 12 PM",
      validTill: "10 AM - 12 PM daily",
      icon: Clock,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Events & Special Offers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on exciting events, exclusive offers, and special promotions happening at Olympia Mall Chennai
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/30 overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      event.type === 'Festival' ? 'bg-red-500' :
                      event.type === 'Event' ? 'bg-blue-500' :
                      'bg-purple-500'
                    } text-white`}
                  >
                    {event.type}
                  </Badge>

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.discount}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {event.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-orange-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Special Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/30 p-8 text-center transition-all duration-500 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${offer.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <offer.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {offer.title}
                </h4>
                
                <p className="text-gray-300 mb-4">
                  {offer.description}
                </p>

                <p className="text-orange-400 text-sm font-medium">
                  {offer.validTill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsOffers;
