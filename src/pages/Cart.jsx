import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Minus, Plus } from 'lucide-react';

function Cart() {
  // Show top view
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (item, increment) => {
    const updatedCartItems = cartItems.map((product) => {
      if (product.id === item.id) {
        const newQuantity = increment
          ? product.quantity + 1
          : (product.quantity === 1) ? 1 : product.quantity - 1;
        return {
          ...product,
          quantity: newQuantity > 0 ? newQuantity : 1
        };
      }
      return product;
    });
    
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  // Calculate total amount
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleBuyNow = () => {
    // Here you would typically implement your checkout logic
    alert(`Proceeding to checkout. Total amount: $${calculateTotal()}`);
    // You might want to clear the cart after purchase
    // localStorage.removeItem("cartItems");
    // setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-red-900/20 to-blue-900/20 animate-pulse"></div>
        <div className="relative z-10">
          <Navbar />
          <div className="pt-48"></div>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl custom-heading md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Your Cart
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Review the items in your cart before proceeding to checkout. You
                can remove items or continue shopping.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {cartItems.length > 0 ? (
                <>
                  <div className="flex flex-col gap-4 mx-auto mb-8">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-36 h-36 object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-1 justify-between">
                          <h3 className="text-2xl font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-gray-300 text-lg">{item.category}</p>
                          <span className="text-orange-400 text-xl font-bold">
                            ${item.price}
                          </span>

                          <div className="flex gap-4 items-center justify-center mt-3">
                            <div className="flex items-center gap-2 justify-start bg-white rounded-full px-2.5 py-1 w-fit self-start">
                              <span 
                                className="text-black cursor-pointer" 
                                onClick={() => handleQuantityChange(item, false)}
                              >
                                <Minus size={14} />
                              </span>
                              <div className="text-black text-md cursor-default">{item.quantity}</div>
                              <span 
                                className="text-black cursor-pointer" 
                                onClick={() => handleQuantityChange(item, true)}
                              >
                                <Plus size={14}/>
                              </span>
                            </div>

                            <Button
                              onClick={() => handleRemoveCart(item.id)}
                              size="sm"
                              variant="destructive"
                              className="transition-all duration-300 flex self-start px-8"
                            >
                              Remove from Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total and Buy Now section */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
                    <div className="flex justify-between items-center">
                      <div className="text-white text-2xl font-bold">
                        Total: ${calculateTotal()}
                      </div>
                      <Button
                        onClick={handleBuyNow}
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 px-8 py-6 text-lg"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-300 text-center text-xl py-12">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Cart;