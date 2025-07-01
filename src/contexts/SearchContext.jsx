
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample data for searching (you can expand this with real data)
  const searchableContent = [
    // Categories
    { type: 'category', title: 'Fashion & Apparel', description: 'Clothing, shoes, accessories', url: '/categories', image: '/assets/cat-fashion.avif' },
    { type: 'category', title: 'Electronics', description: 'Smartphones, laptops, gadgets', url: '/categories', image: '/assets/cat-electtronics.jpeg' },
    { type: 'category', title: 'Home & Living', description: 'Furniture, decor, appliances', url: '/categories', image: '/assets/cat-home&living.jpeg' },
    { type: 'category', title: 'Health & Wellness', description: 'Fitness, nutrition, healthcare', url: '/categories', image: '/assets/cat-health and wellness.jpeg' },
    { type: 'category', title: 'Beauty & Personal Care', description: 'Cosmetics, skincare, grooming', url: '/categories', image: '/assets/beauty and perssonal care.avif' },
    { type: 'category', title: 'Sports & Outdoors', description: 'Athletic gear, outdoor equipment', url: '/categories', image: '/assets/cat-sports.jpeg' },
    { type: 'category', title: 'Automotive', description: 'Car accessories, parts, tools', url: '/categories', image: '/assets/cat-automotive.avif' },
    { type: 'category', title: 'Toys & Games', description: 'Children toys, board games', url: '/categories', image: '/assets/cat-toys and games.avif' },
    
    // Products
    { type: 'product', title: 'Wireless Headphones', description: 'Premium noise-canceling headphones', price: '$299', url: '/products' },
    { type: 'product', title: 'Smart Watch', description: 'Fitness tracking smartwatch', price: '$199', url: '/products' },
    { type: 'product', title: 'Gaming Laptop', description: 'High-performance gaming laptop', price: '$1299', url: '/products' },
    { type: 'product', title: 'Running Shoes', description: 'Comfortable athletic footwear', price: '$89', url: '/products' },
    { type: 'product', title: 'Skincare Set', description: 'Complete skincare routine', price: '$49', url: '/products' },
    
    // Pages
    { type: 'page', title: 'About Us', description: 'Learn about Olympia Shopping', url: '/about' },
    { type: 'page', title: 'Contact', description: 'Get in touch with us', url: '/contact' },
    { type: 'page', title: 'Shopping Cart', description: 'View your cart items', url: '/cart' },
    
    // Services
    { type: 'service', title: 'Valet Parking', description: 'Premium valet service available 24/7', url: '/about' },
    { type: 'service', title: 'Personal Shopper', description: 'Expert shopping assistance by appointment', url: '/about' },
    { type: 'service', title: 'Free Wi-Fi', description: 'High-speed internet throughout the mall', url: '/about' },
    { type: 'service', title: 'Food Court', description: 'Diverse dining options', url: '/' },
  ];

  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
    setIsSearching(false);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{
      isSearchOpen,
      searchQuery,
      searchResults,
      isSearching,
      setSearchQuery,
      performSearch,
      openSearch,
      closeSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};
