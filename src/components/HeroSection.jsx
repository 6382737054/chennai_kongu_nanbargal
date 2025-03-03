import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Images/hero1.png",
      title: "Community & Togetherness",
    },
    {
      image: "/Images/hero2.png",
      title: "Cultural Heritage",
    },
    {
      image: "/Images/hero3.png",
      title: "Enriching Lives",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-50 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Carousel Section */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-[500px]">
            {/* Main Carousel */}
            <div 
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img
                    src={slide.image}
                    alt={`${slide.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-white text-3xl font-semibold mb-2">{slide.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full
                    ${currentSlide === index 
                      ? 'w-10 h-2 bg-green-600' 
                      : 'w-2 h-2 bg-green-300 hover:bg-green-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Welcome Text Section */}
        <div className="py-12 px-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-green-100">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-medium text-green-800 mb-8">
              Welcome to <span className="font-bold bg-gradient-to-r from-green-600 to-green-700 text-transparent bg-clip-text">Kongu Nanbargal Sangam</span>
            </h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Thiru. K.K.Ramesh has been unanimously elected president for this term & the sangam has been connected to the World Wide Web so that people all over the world can take advantage of the information provided through this website.
              </p>
              
              <p>
                The word, <span className="font-medium text-green-700">"KONGU NANBARGAL"</span> implies Kind, Outgoing, Noble, Good-natured, Unbeatable friends and Kongu Nanbargal Sangam takes pride in asserting that it is a society of almost 4200 such members.
              </p>
              
              <p>
                The motive is to promote friendship and brotherhood, offer educational and career guidance to the youth, provide matrimonial assistance, render service to the needy and work for the improvement of the society at large.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
                <span className="font-medium tracking-wider">Read More</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Community Support</h3>
            <p className="text-gray-600">Providing support and guidance to our community members in various aspects of life and career.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Cultural Heritage</h3>
            <p className="text-gray-600">Preserving and promoting our rich cultural heritage and traditions for future generations.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Social Responsibility</h3>
            <p className="text-gray-600">Working towards the betterment of society through various social service initiatives and programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;