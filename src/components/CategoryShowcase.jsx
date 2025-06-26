
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      description: "Latest trends & styles",
      image: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      name: "Beauty & Personal Care",
      description: "Skincare, makeup & more",
      image: "https://images.unsplash.com/photo-1567722071783-1f7df9d5a31e?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTgyMTc5Nnx8ZW58MHx8fHx8",
      itemCount: "1.2K+ Items"
    },
    {
      id: 5,
      name: "Books",
      description: "Bestsellers & classics",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=400&fit=crop",
      itemCount: "900+ Items"
    },
    {
      id: 6,
      name: "Toys & Games",
      description: "Fun for all ages",
      image: "https://images.unsplash.com/photo-1453053507108-9f5456eb481f?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTExNDMxN3x8ZW58MHx8fHx8",
      itemCount: "1.1K+ Items"
    },
    {
      id: 7,
      name: "Groceries",
      description: "Daily essentials & gourmet",
      image: "https://images.unsplash.com/photo-1611059264934-dfc78da7dc26?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8dS00YUMtaGJMU1F8fGVufDB8fHx8fA%3D%3D",
      itemCount: "2K+ Items"
    },
    {
      id: 8,
      name: "Automotive",
      description: "Car accessories & parts",
      image: "https://images.unsplash.com/photo-1676288176672-0ed5d526a6c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      itemCount: "800+ Items"
    },
    {
      id: 9,
      name: "Pet Supplies",
      description: "Everything for your pets",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=400&fit=crop",
      itemCount: "1.3K+ Items"
    },
    {
      id: 10,
      name: "Garden & Outdoors",
      description: "Tools, plants & decor",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&h=400&fit=crop",
      itemCount: "950+ Items"
    },
    {
      id: 11,
      name: "Music & Instruments",
      description: "Instruments & accessories",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=400&fit=crop",
      itemCount: "600+ Items"
    },
    {
      id: 12,
      name: "Health & Wellness",
      description: "Supplements & fitness",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=400&fit=crop",
      itemCount: "1.4K+ Items"
    },
    {
      id: 13,
      name: "Office Supplies",
      description: "Stationery & equipment",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop",
      itemCount: "700+ Items"
    },
    {
      id: 14,
      name: "Sports",
      description: "Active lifestyle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      itemCount: "1.5K+ Items"
    },
    
    {
      id: 15,
      name: "Art & Crafts",
      description: "Creative supplies & kits",
      image: "https://images.unsplash.com/photo-1518709517357-c124f2f640a9?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTI1Nzc3OHx8ZW58MHx8fHx8",
      itemCount: "500+ Items"
    },
    {
      id: 16,
      name: "Travel & Luggage",
      description: "Bags, suitcases & accessories",
      image: "https://images.unsplash.com/photo-1523384709476-df63a9564991?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTY0MDEyOHx8ZW58MHx8fHx8",
      itemCount: "350+ Items"
    }
  ];

 const ref = useRef(null);

  const [categoriesCountLLimit, setCategoriesCountLimit] = useState(8);
  const [allCateBtnName, setAllCateBtnName] = useState("View All Categories");
  const categoriesToShow = categories.slice(0, categoriesCountLLimit);
  const handleShowMore = () => {
   
    if(categoriesCountLLimit === 8) {
      setCategoriesCountLimit(prevLimit => prevLimit + categories.length);
      setAllCateBtnName("Show Less Categories");
    } else {
      setCategoriesCountLimit(8);
      setAllCateBtnName("View All Categories");
           ref.current?.scrollIntoView({behavior: 'smooth'})
    }
  };

  return (
    <section ref={ref} id="categories" className="py-20 px-6 pt-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div  className="text-center mb-16 pt-2">
          <h2 className="text-4xl custom-heading md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto  pb-6 pt-2 ">
            Discover our carefully curated collections designed to match your lifestyle and preferences
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesToShow.map((category) => (
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
                {/* <Button 
                  variant="outline"
                  size="sm"
                  className="border-orange-400 text-orange-400 hover:scale-105 transition-transform duration-300 px-4 py-2 rounded-full font-semibold hover:bg-orange-400 hover:text-white"
                >
                  Explore
                </Button> */}
              </div>

              {/* Hover Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleShowMore}
            size="lg"
            variant="outline"
            className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300"
          >
            {allCateBtnName}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
