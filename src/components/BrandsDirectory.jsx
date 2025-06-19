
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Crown } from "lucide-react";

const BrandsDirectory = () => {
  const brandCategories = [
    {
      category: "Fashion & Lifestyle",
      brands: [
        { name: "Zara", level: "Level 2", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
        { name: "H&M", level: "Level 1", type: "International", rating: 4.7, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop" },
        { name: "Fabindia", level: "Level 3", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=200&fit=crop" },
        { name: "Allen Solly", level: "Level 2", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" }
      ]
    },
    {
      category: "Electronics & Technology",
      brands: [
        { name: "Apple Store", level: "Level 1", type: "International", rating: 4.9, image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=300&h=200&fit=crop" },
        { name: "Samsung", level: "Level 1", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop" },
        { name: "Croma", level: "Level 2", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop" },
        { name: "Reliance Digital", level: "Level 3", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Premium Brands Directory
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover world-class brands and local favorites all under one roof. From fashion to technology, 
            find everything you need in Chennai's most prestigious shopping destination.
          </p>
        </div>

        {brandCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <Crown className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">{category.category}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.brands.map((brand, brandIndex) => (
                <div 
                  key={brandIndex}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/30 overflow-hidden transition-all duration-500 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        brand.type === 'International' 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {brand.type}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                        {brand.name}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-300 text-sm">{brand.rating}</span>
                      </div>
                    </div>

                    <p className="text-orange-400 text-sm mb-4">{brand.level}</p>

                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Store
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
          >
            View Complete Directory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandsDirectory;
