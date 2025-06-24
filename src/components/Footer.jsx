import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  // Define all links with actual shopping/mall related URLs
  const quickLinks = [
    { name: "About Us", url: "https://www.westfield.com/about" },
    { name: "Contact", url: "https://www.mallofamerica.com/contact" },
    { name: "FAQ", url: "https://www.simon.com/help/faq" },
    { name: "Shipping Info", url: "https://www.theshopsatcrystals.com/services/shipping" },
    { name: "Returns", url: "https://www.macys.com/customer-service/return-policy" },
    { name: "Size Guide", url: "https://www.nordstrom.com/size-guide" }
  ];

  const categories = [
    { name: "Fashion", url: "https://www.bloomingdales.com" },
    { name: "Electronics", url: "https://www.bestbuy.com" },
    { name: "Home & Living", url: "https://www.crateandbarrel.com" },
    { name: "Sports", url: "https://www.dickssportinggoods.com" },
    { name: "Beauty", url: "https://www.sephora.com" },
    { name: "Accessories", url: "https://www.charmingcharlie.com" }
  ];

  const customerService = [
    { name: "Track Your Order", url: "https://www.fedex.com/en-us/tracking.html" },
    { name: "Customer Support", url: "https://www.amazon.com/gp/help/customer/display.html" },
    { name: "Privacy Policy", url: "https://www.macys.com/shop/legal/privacy-policy" },
    { name: "Terms of Service", url: "https://www.target.com/terms-conditions" },
    { name: "Gift Cards", url: "https://www.giftcards.com" },
    { name: "Loyalty Program", url: "https://www.ulta.com/ulta/rewards" }
  ];

  // Social media links with mall/shopping related accounts
  const socialLinks = [
    { 
      icon: Facebook, 
      url: "https://www.facebook.com/westfield", 
      label: "Facebook" 
    },
    { 
      icon: Twitter, 
      url: "https://twitter.com/shopatwestfield", 
      label: "Twitter" 
    },
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/mallofamerica", 
      label: "Instagram" 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  OLYMPIA
                </h3>
                <p className="text-gray-400 text-sm">SHOPPING</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your premium destination for quality products, exceptional service, and unmatched shopping experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                    aria-label={`Go to ${link.name} page`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                    aria-label={`Browse ${category.name} category`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                    aria-label={`Go to ${service.name} page`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Visit Our Store</p>
                <a 
                  href="https://maps.google.com/?q=123+Olympia+Street,+City+Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-orange-400 transition-colors"
                  aria-label="View our store location on Google Maps"
                >
                  123 Olympia Street, City Center
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Call Us</p>
                <a 
                  href="tel:+15551234567"
                  className="text-sm hover:text-orange-400 transition-colors"
                  aria-label="Call our customer service"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Email Us</p>
                <a 
                  href="mailto:hello@olympiashop.com"
                  className="text-sm hover:text-orange-400 transition-colors"
                  aria-label="Send us an email"
                >
                  hello@olympiashop.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Olympia Shopping. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <a 
              href="https://www.macys.com/shop/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="View our Privacy Policy"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.target.com/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="View our Terms of Service"
            >
              Terms of Service
            </a>
            <a 
              href="https://www.cookiepolicygenerator.com/sample-cookies-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="View our Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;