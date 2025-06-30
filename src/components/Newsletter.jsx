
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to our newsletter. Check your email for confirmation.",
      });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-12 md:p-16 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl custom-heading font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              Stay in the Loop
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and special discounts
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
              <div className="flex items-center space-x-2 text-orange-300">
                <Gift className="w-5 h-5" />
                <span>Exclusive Offers</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-300">
                <Gift className="w-5 h-5" />
                <span>Early Access</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-300">
                <Gift className="w-5 h-5" />
                <span>Special Discounts</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    {...form.register("email")}
                    type="email" 
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 rounded-full px-6 py-3"
                    disabled={form.formState.isSubmitting}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-2 text-left">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit"
                  disabled={form.formState.isSubmitting || isSubmitted}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {form.formState.isSubmitting ? (
                    "Subscribing..."
                  ) : isSubmitted ? (
                    <><CheckCircle className="w-4 h-4 mr-2" />Subscribed!</>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. Your privacy is protected.
              </p>
            </form>

            {/* Discount Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full px-6 py-2 mt-8">
              <Gift className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium">Get 20% off your first order!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
