import React from 'react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Images/hero1.png",
    },
    {
      image: "/Images/hero2.png",
    },
    {
      image: "/Images/hero3.png",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Welcome Text Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center">
          <h1 className="text-4xl font-light text-blue-950 mb-10 tracking-wide">
            Welcome to <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Kongu Nanbargal Sangam</span>...
          </h1>
          
          <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
            <p className="tracking-wide">
              Thiru. K.K.Ramesh has been unanimously elected president for this term & the sangam has been connected to the World Wide Web so that people all over the world can take advantage of the information provided through this website.
            </p>
            
            <p className="tracking-wide">
              The word, <span className="font-medium text-blue-800">"KONGU NANBARGAL"</span> implies Kind, Outgoing, Noble, Good-natured, Unbeatable friends and Kongu Nanbargal Sangam takes pride in asserting that it is a society of almost 4200 such members.
            </p>
            
            <p className="tracking-wide">
              The motive is to promote friendship and brotherhood, offer educational and career guidance to the youth, provide matrimonial assistance, render service to the needy and work for the improvement of the society at large.
            </p>
          </div>
          
          <button className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group relative overflow-hidden shadow-lg shadow-blue-100">
            <span className="relative z-10 font-light tracking-wider text-lg">Read More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Premium Carousel */}
      <div className="pb-16 px-4">
        <div className="relative w-[70%] h-[400px] mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden h-full rounded-xl shadow-[0_8px_35px_rgb(59,130,246,0.1)] ring-1 ring-blue-100">
            <div 
              className="flex transition-transform duration-700 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full
                    ${currentSlide === index 
                      ? 'w-8 h-2 bg-blue-600' 
                      : 'w-2 h-2 bg-blue-200 hover:bg-blue-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Side Decorative Elements */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-40 bg-gradient-to-r from-blue-50/80 to-transparent"></div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-40 bg-gradient-to-l from-blue-50/80 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;