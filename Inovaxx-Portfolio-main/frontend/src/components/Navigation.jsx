import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-red-100/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative group cursor-pointer flex items-center gap-3" onClick={() => scrollToSection('hero')}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              {/* Logo Image */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <img
                  src="https://customer-assets.emergentagent.com/job_inovaxx-immersive/artifacts/yuerbm8u_Inovaxx_logo__1_-removebg-preview%20%281%29.png"
                  alt="Inovaxx Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 2px 8px rgba(239, 68, 68, 0.3))'
                  }}
                />
              </div>
              
              {/* Logo Text */}
              <div className="relative">
                <h1 className="text-3xl font-black bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">
                  Inovaxx
                  <span className="block text-xs font-medium text-gray-500 group-hover:text-red-500 transition-colors duration-300 tracking-widest">
                    SOLUTIONS
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {[
                { name: "Home", id: "hero" },
                { name: "Companies", id: "companies" },
                { name: "Work", id: "work" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-6 py-3 text-gray-700 hover:text-red-600 font-medium text-sm transition-all duration-300 group rounded-xl hover:bg-red-50/50"
                >
                  {item.name}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="ml-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl w-12 h-12 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-red-100/50 rounded-b-2xl shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "Companies", id: "companies" },
                { name: "Work", id: "work" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 font-medium transition-all duration-300 rounded-xl hover:bg-red-50/70 group"
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    <ChevronDown className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;