
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Crown } from "lucide-react";

const BrandsDirectory = () => {
  const brandCategories = [
    {
      category: "Fashion & Lifestyle",
      brands: [
        { name: "Zara", level: "Level 2", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "H&M", level: "Level 1", type: "International", rating: 4.7, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "Fabindia", level: "Level 3", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "Allen Solly", level: "Level 2", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1613852348851-df1739db8201?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8TWxEdnFMbkNOU1V8fGVufDB8fHx8fA%3D%3D" }
      ]
    },
    {
      category: "Electronics & Technology",
      brands: [
        { name: "Apple Store", level: "Level 1", type: "International", rating: 4.9, image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "Samsung", level: "Level 1", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "Croma", level: "Level 2", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTM2NTgzfHxlbnwwfHx8fHw%3D" },
        { name: "Reliance Digital", level: "Level 3", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" }
      ]
    },
    {
      category: "Food & Beverages",
      brands: [
        { name: "Starbucks", level: "Level 1", type: "International", rating: 4.7, image: "https://images.unsplash.com/photo-1720692739658-ee952b1aebb1?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjI5MDIzOXx8ZW58MHx8fHx8" },
        { name: "KFC", level: "Level 2", type: "International", rating: 4.6, image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww" },
        { name: "Saravana Bhavan", level: "Level 3", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhcmF2YW4lMjBiYWhhdmFuJTIwaG90ZWwlMjBkaXNofGVufDB8fDB8fHww" },
        { name: "Barbeque Nation", level: "Level 2", type: "Indian", rating: 4.4, image: "https://images.unsplash.com/photo-1736605647729-725e51ca08b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxiYXJiZXF1ZSUyMG5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" }
      ]
    },
    {
      category: "Health & Beauty",
      brands: [
        { name: "Sephora", level: "Level 1", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VwaG9yYXxlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Forest Essentials", level: "Level 2", type: "Indian", rating: 4.7, image: "https://images.unsplash.com/photo-1696872691665-0619997cd5e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0JTIwZXNzc25ldGlhbHMlMjBjYXBzdWxlc3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Nykaa", level: "Level 3", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "The Body Shop", level: "Level 2", type: "International", rating: 4.5, image: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlbGxuZXNzfGVufDB8fDB8fHww" }
      ]
    },
    {
      category: "Home & Living",
      brands: [
        { name: "Home Centre", level: "Level 2", type: "Indian", rating: 4.6, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "IKEA", level: "Level 1", type: "International", rating: 4.8, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "Urban Ladder", level: "Level 3", type: "Indian", rating: 4.5, image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=300&h=200&fit=crop&auto=format&ixlib=rb-4.0.3" },
        { name: "HomeTown", level: "Level 2", type: "Indian", rating: 4.4, image: "https://images.unsplash.com/photo-1645393941314-13598b38d1a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aXR6ZXJsYW5kJTIwaG9tZSUyMGJldHdlZW4lMjAlMjBtb251bnRhaW5uc3xlbnwwfHwwfHx8MA%3D%3D" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl custom-heading md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
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
