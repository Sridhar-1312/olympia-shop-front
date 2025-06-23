
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      badge: "Best Seller",
      category: "Electronics"
        },
        {
      id: 7,
      name: "Eco-Friendly Water Bottle",
      price: 29,
      originalPrice: 39,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1676854121021-66b6a8ddb08d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVjbyUyMGZyaWVuZGx5JTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fDB8fHww",
      badge: "Eco",
      category: "Accessories"
        },
        {
      id: 8,
      name: "Bluetooth Speaker",
      price: 79,
      originalPrice: 99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1608488458196-61cd3a720de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
      badge: "Hot",
      category: "Electronics"
        },
        {
      id: 9,
      name: "Classic Aviator Sunglasses",
      price: 59,
      originalPrice: 79,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1612479121907-15bca39a5388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2aWF0b3IlMjBzdW5nbGFzc2VzfGVufDB8fDB8fHww",
      badge: "Trending",
      category: "Fashion"
        },
        {
      id: 10,
      name: "Wireless Charging Pad",
      price: 49,
      originalPrice: 69,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1603674554159-b62f6febbce5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwY2hhcmdpbmclMjBwYWR8ZW58MHx8MHx8fDA%3D",
      badge: "New",
      category: "Electronics"
        },
        {
      id: 11,
      name: "Ceramic Coffee Mug Set",
      price: 39,
      originalPrice: 59,
      rating: 4.7,
      image:"https://images.unsplash.com/photo-1651936020103-1156d5390b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlcmFtaWMlMjBjb2ZmZWUlMjBtdWclMjBzZXR8ZW58MHx8MHx8fDA%3D",
      badge: "Best Seller",
      category: "Home"
        },
        {
      id:1,
      name: "Featured Smart TV",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1678483789481-d3ceb0641629?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8RHR2RkV6cXFZUUl8fGVufDB8fHx8fA%3D%3D",
      badge: "Best Seller",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Designer Leather Jacket",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      badge: "New",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 249,
      originalPrice: 329,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      badge: "Featured",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Minimalist Backpack",
      price: 89,
      originalPrice: 119,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      badge: "Sale",
      category: "Accessories"
    },
    {
      id: 5,
      name: "Luxury Perfume Set",
      price: 159,
      originalPrice: 199,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      badge: "Limited",
      category: "Beauty"
    },
    {
      id: 6,
      name: "Modern Table Lamp",
      price: 129,
      originalPrice: 169,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1607983977515-7b8bc5d91e3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vZGVybiUyMHRhYmJsZSUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
      badge: "New",
      category: "Home"
    }
  ];

  return (
    <section id="products" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="  custom-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Handpicked premium products that combine quality, style, and innovation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <Badge 
                  className={`absolute top-4 left-4 ${
                    product.badge === 'Sale' ? 'bg-red-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Limited' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } text-white`}
                >
                  {product.badge}
                </Badge>

                {/* Quick Add to Cart */}
                <Button
                  size="icon"
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400 text-sm font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold mb-3 group-hover:text-orange-300 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400 text-xl font-bold">${product.price}</span>
                    <span className="text-gray-500 text-sm line-through">${product.originalPrice}</span>
                  </div>
                  <div className="text-green-400 text-sm font-medium">
                    Save ${product.originalPrice - product.price}
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Add to Cart
                </Button>
              </div>
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
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
