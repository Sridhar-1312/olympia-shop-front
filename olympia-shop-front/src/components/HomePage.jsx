import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Olympia Mall</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your ultimate shopping, dining, and entertainment destination.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <p className="text-gray-500 mb-4">Explore our latest arrivals and best-selling items.</p>
            <Link to="/products" className="text-blue-500 hover:underline">Shop Now</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Promotions</h2>
            <p className="text-gray-500 mb-4">Check out our ongoing sales and special offers.</p>
            <Link to="/promotions" className="text-blue-500 hover:underline">View Promotions</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="text-gray-500 mb-4">Find out more about our location and hours.</p>
            <Link to="/about" className="text-blue-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;