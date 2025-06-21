
import { Button } from "@/components/ui/button";

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      description: "Latest trends & styles",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
      itemCount: "2.4K+ Items"
    },
    {
      id: 2,
      name: "Electronics",
      description: "Tech & gadgets",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=400&fit=crop",
      itemCount: "1.8K+ Items"
    },
    {
      id: 3,
      name: "Home & Living",
      description: "Comfort & style",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      itemCount: "3.2K+ Items"
    },
    {
      id: 4,
      name: "Sports",
      description: "Active lifestyle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      itemCount: "1.5K+ Items"
    }
  ];

  return (
    <section id="categories" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated collections designed to match your lifestyle and preferences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-white/10 "
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3">
                  <span className="text-orange-400 text-sm font-medium">{category.itemCount}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 ">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-orange-400 text-orange-400 hover:scale-105 transition-transform duration-300 px-4 py-2 rounded-full font-semibold hover:bg-orange-400 hover:text-white"
                >
                  Explore
                </Button>
              </div>

              {/* Hover Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
