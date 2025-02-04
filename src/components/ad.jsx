import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    {
      image: "/Images/sakthi.png",
      name: "Partner 1"
    },
    {
      image: "/Images/pon.png",
      name: "Partner 2"
    },
    {
      image: "/Images/klabs.png",
      name: "Partner 3"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? partners.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-50/50 to-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-green-900 mb-3">
            Our Members
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-8 sm:w-12 bg-green-200"></div>
            <span className="text-green-400">●</span>
            <div className="h-px w-8 sm:w-12 bg-green-200"></div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative px-4 sm:px-0">
          {/* Main Carousel */}
          <div className="relative w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] h-[150px] sm:h-[200px] mx-auto overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
            <div
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 bg-white">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-green-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-green-900" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-4 sm:w-6 bg-white' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-green-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnersShowcase;