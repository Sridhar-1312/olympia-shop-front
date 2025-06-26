
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Clear cart on successful payment
    localStorage.removeItem("cartItems");
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-red-900/20 to-blue-900/20 animate-pulse"></div>
        <div className="relative z-10">
          <Navbar />
          <div className="pt-48 pb-24">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
                  <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-8" />
                  <h1 className="text-4xl font-bold text-white mb-6">
                    Payment Successful!
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Thank you for your purchase. Your order has been confirmed and you will receive an email confirmation shortly.
                  </p>
                  {sessionId && (
                    <p className="text-sm text-gray-400 mb-8">
                      Order ID: {sessionId}
                    </p>
                  )}
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => navigate("/")}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                    >
                      Continue Shopping
                    </Button>
                    <Button
                      onClick={() => navigate("/products")}
                      variant="outline"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                    >
                      View Products
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
