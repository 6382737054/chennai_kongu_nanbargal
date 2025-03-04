import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PartnersShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { language } = useLanguage();

  // Bilingual content for the section headers
  const content = {
    tamil: {
      title: "மதிப்பிற்குரிய உறுப்பினர்கள் & பங்காளிகள்",
      titleHighlight: "உறுப்பினர்கள்",
      subtitle: "சமுதாய சேவை மற்றும் கலாச்சார பாதுகாப்பில் எங்கள் அர்ப்பணிப்பைப் பகிர்ந்து கொள்ளும் நிறுவனங்களுடன் இணைந்து பணியாற்றுவதில் நாங்கள் பெருமை கொள்கிறோம்"
    },
    english: {
      title: "Valued Members & Partners",
      titleHighlight: "Members",
      subtitle: "We're proud to collaborate with organizations that share our commitment to community service and cultural preservation"
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Logos only without text
  const partners = [
    {
      image: "/Images/sakthi.png",
      alt: "Sakthi Group Logo"
    },
    {
      image: "/Images/pon.png",
      alt: "Pon Pure Chemicals Logo"
    },
    {
      image: "/Images/klabs.png",
      alt: "K Labs Logo"
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
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced Background with More Visible Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-green-50 to-white"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-200/40 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-green-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Bilingual Title Section */}
        <div className="text-center mb-12">
          <div className="relative flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shadow-md">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-400"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            {language === 'tamil' ? (
              <>
                மதிப்பிற்குரிய <span className="text-green-600">உறுப்பினர்கள்</span> & பங்காளிகள்
              </>
            ) : (
              <>
                Valued <span className="text-green-600">Members</span> & Partners
              </>
            )}
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-green-400/40 via-green-500/60 to-green-400/40 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Logos-Only Carousel Section */}
        <div 
          className="relative max-w-4xl mx-auto group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Carousel with Shadow and Border - Logos Only */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl mx-auto bg-white border border-green-100 h-64 md:h-72">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <div className="flex items-center justify-center h-full p-6 md:p-12">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className="w-auto h-auto max-h-[160px] md:max-h-[200px] max-w-[80%] object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-50 border border-green-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-green-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-50 border border-green-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-green-800" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-12 h-2 bg-green-600 shadow-sm' 
                    : 'w-2 h-2 bg-green-300 hover:bg-green-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;