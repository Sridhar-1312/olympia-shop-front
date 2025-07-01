
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
    { type: 'product', title: 'iPhone 15 Pro', description: 'Latest Apple smartphone', price: '$999', url: '/products' },
    { type: 'product', title: 'MacBook Air', description: 'Lightweight laptop for everyday use', price: '$1199', url: '/products' },
    { type: 'product', title: 'Nike Air Max', description: 'Comfortable running sneakers', price: '$129', url: '/products' },
    { type: 'product', title: 'Samsung TV', description: '55-inch 4K Smart TV', price: '$699', url: '/products' },
    { type: 'product', title: 'PlayStation 5', description: 'Next-gen gaming console', price: '$499', url: '/products' },
    
    // Pages
    { type: 'page', title: 'About Us', description: 'Learn about Olympia Shopping', url: '/about' },
    { type: 'page', title: 'Contact', description: 'Get in touch with us', url: '/contact' },
    { type: 'page', title: 'Shopping Cart', description: 'View your cart items', url: '/cart' },
    { type: 'page', title: 'Products', description: 'Browse all products', url: '/products' },
    { type: 'page', title: 'Categories', description: 'Shop by category', url: '/categories' },
    
    // Services
    { type: 'service', title: 'Valet Parking', description: 'Premium valet service available 24/7', url: '/about' },
    { type: 'service', title: 'Personal Shopper', description: 'Expert shopping assistance by appointment', url: '/about' },
    { type: 'service', title: 'Free Wi-Fi', description: 'High-speed internet throughout the mall', url: '/about' },
    { type: 'service', title: 'Food Court', description: 'Diverse dining options', url: '/' },
    { type: 'service', title: 'Customer Support', description: '24/7 customer assistance', url: '/contact' },
  ];

  const performSearch = async (query) => {
    console.log('Performing search for:', query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
    );
    
    console.log('Search results:', results);
    setSearchResults(results);
    setIsSearching(false);
  };

  const openSearch = () => {
    console.log('Opening search modal');
    setIsSearchOpen(true);
  };
  
  const closeSearch = () => {
    console.log('Closing search modal');
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
