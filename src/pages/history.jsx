import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    },
    {
      image: "/Images/history2.jpg",
    }
  ];

  const navigationSections = [
    { id: 'section1', title: 'History' },
    { id: 'section2', title: 'Kongu Mamanigal' },
    { id: 'section3', title: 'Sadhanayalargal' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        return <KonguMamanigal/>
      case 'section3':
        return <Sadhanayalargal/>
      default:
        return <OurHistory />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Banner Carousel */}
      <div className="relative h-96 w-full overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((banner, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={banner.image}
                alt="History Banner"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-green-100/80 hover:bg-green-100 shadow-lg transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-green-900 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-green-100/80 hover:bg-green-100 shadow-lg transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-green-900 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-6 bg-white' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-gradient-to-r from-green-50 via-green-100/50 to-green-50 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-green-700' 
                    : 'text-green-900 hover:text-green-700'
                }`}
              >
                {section.title}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-green-50">
        {renderSectionContent()}
      </div>
      <PartnersShowcase/>

    </div>
  );
};

export default HistoryPage;