import React, { useEffect, useRef } from "react";
import { companies } from "../../data/mockData";

const CompaniesSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationId;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += 2; // Increased speed for smoother movement
        
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;
        
        // Reset when we've scrolled through one complete set of companies
        if (scrollPosition >= scrollWidth / 3) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="companies" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            To be Trusted by <span className="text-red-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600">
            We're proud to work with some of the world's most innovative companies
          </p>
        </div>

        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Continuously Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden py-8 cursor-pointer"
            style={{ 
              scrollBehavior: "auto", // Changed from smooth to auto for better control
              WebkitOverflowScrolling: "touch"
            }}
          >
            {/* Triple the companies array for seamless infinite loop */}
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center group border border-gray-100"
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-36 max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="hidden text-center p-4"
                  style={{ display: 'none' }}
                >
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Continuous scroll indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 italic">
              ← Continuously scrolling • Hover to pause
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;