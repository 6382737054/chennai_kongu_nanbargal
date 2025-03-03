import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Award } from 'lucide-react';
import OurHistory from '../components/ourhistory';
import KonguMamanigal from '../components/KonguMamanigal';
import Sadhanayalargal from '../components/Sadhanayalargal';
import PartnersShowcase from '../components/ad';

const HistoryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('section1');

  const bannerImages = [
    {
      image: "/Images/history1.jpg",
      title: "Our Rich Heritage"
    },
    {
      image: "/Images/history2.jpg",
      title: "Celebrating Our Legacy"
    }
  ];

  const navigationSections = [
    { id: 'section1', title: 'History', icon: Clock },
    { id: 'section2', title: 'Kongu Mamanigal', icon: BookOpen },
    { id: 'section3', title: 'Sadhanayalargal', icon: Award }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  // Function to render the appropriate section content
  const renderSectionContent = () => {
    switch(activeSection) {
      case 'section1':
        return <OurHistory />;
      case 'section2':
        return <KonguMamanigal />;
      case 'section3':
        return <Sadhanayalargal />;
      default:
        return <OurHistory />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/80 to-white pt-20 md:pt-56">
      {/* Banner Carousel */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 mb-4 sm:mb-6">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] mx-auto overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerImages.map((banner, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={banner.image}
                  alt={`History Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {banner.title}
                  </h1>
                  <div className="h-1 w-12 sm:w-16 md:w-20 bg-green-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 flex space-x-1.5 sm:space-x-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-green-500' 
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-white shadow-md mb-6 sm:mb-8 md:mb-10 sticky top-16 md:top-[76px] z-10">
        <div className="w-full px-3 sm:px-4 md:px-6 mx-auto overflow-x-auto">
          <nav className="flex justify-start md:justify-center py-3 md:py-4 min-w-full whitespace-nowrap">
            {navigationSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`relative flex-shrink-0 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 mx-1.5 sm:mx-2 md:mx-3 text-xs sm:text-sm font-medium transition-all rounded-full ${
                    activeSection === section.id 
                      ? 'text-white bg-green-600 shadow-md' 
                      : 'text-green-800 bg-green-50 hover:bg-green-100'
                  }`}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{section.title}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-green-100 p-4 sm:p-5 md:p-6">
          {renderSectionContent()}
        </div>
      </div>
      
      <div className="mb-6 sm:mb-8 md:mb-10">
        <PartnersShowcase />
      </div>
    </div>
  );
};

export default HistoryPage;