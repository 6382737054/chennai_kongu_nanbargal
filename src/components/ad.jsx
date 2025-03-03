import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const PartnersShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const partners = [
    {
      image: "/Images/sakthi.png",
      name: "Sakthi Group",
      description: "Industrial manufacturing partner"
    },
    {
      image: "/Images/pon.png",
      name: "Pon Pure Chemicals",
      description: "Chemical solutions provider"
    },
    {
      image: "/Images/klabs.png",
      name: "K Labs",
      description: "Research and innovation partner"
    },
  ];

  useEffect(() => {
    // Only auto-advance if not hovering
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovering, partners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? partners.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-10 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-green-300"></div>
            <Users className="w-6 h-6 text-green-600" />
            <div className="h-px w-12 bg-green-300"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Valued <span className="text-green-600">Members</span> & Partners
          </h2>
          <div className="h-1 w-24 bg-green-500/30 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with organizations that share our commitment 
            to community service and cultural preservation
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-xl shadow-lg mx-auto bg-white border border-green-100">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex items-center justify-center">
                    {/* Logo */}
                    <div className="p-8 md:p-12 flex items-center justify-center bg-white">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-auto h-auto max-h-[200px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 hover:bg-white border border-green-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-green-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 hover:bg-white border border-green-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-green-800" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-10 h-2 bg-green-600' 
                    : 'w-2 h-2 bg-green-300 hover:bg-green-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-400/10 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-400/10 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;