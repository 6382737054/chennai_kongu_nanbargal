import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Award, ChevronDown, History } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import OurHistory from '../components/ourhistory';
import KonguMamanigal from '../components/KonguMamanigal';
import Sadhanayalargal from '../components/Sadhanayalargal';
import PartnersShowcase from '../components/ad';

const HistoryPage = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const slidesRef = useRef([]);

  // Bilingual content
  const content = {
    tamil: {
      pageTitle: "எங்கள் பாரம்பரியம்",
      pageBanners: [
        {
          image: "/Images/history1.jpg",
          title: "எங்களது பாரம்பரியம் மற்றும் வரலாறு",
          subtitle: "பாரம்பரியத்தை பாதுகாத்தல் | கலாச்சாரத்தை போற்றுதல்"
        },
        {
          image: "/Images/history2.jpg",
          title: "எங்கள் மரபைக் கொண்டாடுகிறோம்",
          subtitle: "கொங்கு சமூகத்தின் பெருமைமிகு கதை"
        }
      ],
      sections: [
        { id: 'section1', title: 'வரலாறு', icon: Clock },
        { id: 'section2', title: 'கொங்கு மாமணிகள்', icon: BookOpen },
        { id: 'section3', title: 'சாதனையாளர்கள்', icon: Award }
      ],
      mobileMenuLabel: "பிரிவைத் தேர்ந்தெடுக்கவும்"
    },
    english: {
      pageTitle: "Our Heritage",
      pageBanners: [
        {
          image: "/Images/history1.jpg",
          title: "Our Heritage and History",
          subtitle: "Preserving Traditions | Honoring Culture"
        },
        {
          image: "/Images/history2.jpg",
          title: "Celebrating Our Legacy",
          subtitle: "The Proud Story of Kongu Community"
        }
      ],
      sections: [
        { id: 'section1', title: 'History', icon: Clock },
        { id: 'section2', title: 'Kongu Mamanigal', icon: BookOpen },
        { id: 'section3', title: 'Sadhanayalargal', icon: Award }
      ],
      mobileMenuLabel: "Select Section"
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Transition slide with proper animation
  const transitionSlide = (index) => {
    if (isAnimating) return;
    
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
    setIsAnimating(true);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Handle slider auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentSlide + 1) % currentContent.pageBanners.length;
      transitionSlide(nextIndex);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, currentContent.pageBanners.length, isAnimating]);

  // Handle click outside for dropdown menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll effects for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 400;
      setIsScrolled(window.scrollY > headerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % currentContent.pageBanners.length;
    transitionSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? currentContent.pageBanners.length - 1 : currentSlide - 1;
    transitionSlide(prevIndex);
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

  // Calculate top position for section navigation based on main navbar height
  const navbarHeight = "72px"; // This should match your main navbar height

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Banner Section with Improved Carousel */}
      <div ref={headerRef} className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] w-full overflow-hidden bg-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-green-900/10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.07) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Slides with improved transition */}
        <div className="absolute inset-0">
          {currentContent.pageBanners.map((banner, index) => (
            <div 
              key={index}
              ref={el => slidesRef.current[index] = el}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
            >
              {/* Image container with improved aspect ratio handling */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={banner.image}
                  alt={`History Banner ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: currentSlide === index ? 'scale(1.05)' : 'scale(1.15)',
                    transition: 'transform 7s ease-out, opacity 0.5s ease-in-out',
                    opacity: currentSlide === index ? 1 : 0.8,
                  }}
                />
                {/* Enhanced Gradient Overlay - softer transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
              </div>
              
              {/* Content with staggered animation */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-20">
                <div className="max-w-4xl mx-auto">
                  <div className={`mb-6 transition-all duration-700 ${
                    currentSlide === index 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-10'
                  }`}>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide leading-tight">
                      {banner.title}
                    </h1>
                    <div className="h-1 w-20 md:w-32 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto font-light">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation UI Elements - Enhanced for better visibility */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto transform hover:scale-105"
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto transform hover:scale-105"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Improved Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {currentContent.pageBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && transitionSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-green-500' 
                  : 'w-3 h-3 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>

      {/* Section Navigation - Enhanced Sticky Header */}
      <div 
        className={`sticky z-20 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-black/40 backdrop-blur-sm'
        }`}
        style={{ top: navbarHeight }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Section Title */}
            <div className={`flex items-center gap-2 transition-opacity duration-500 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <History className="w-5 h-5" />
              <h2 className="text-lg font-medium">{currentContent.pageTitle}</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <nav className="flex">
                {currentContent.sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`relative px-5 py-2 mx-1 text-sm font-medium transition-all rounded-lg ${
                        activeSection === section.id 
                          ? 'text-white bg-green-600 shadow-md' 
                          : isScrolled
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{section.title}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Dropdown Navigation */}
            <div className="md:hidden relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-white/20 text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  {(() => {
                    const currentSection = currentContent.sections.find(s => s.id === activeSection);
                    const Icon = currentSection.icon;
                    return (
                      <>
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{currentSection.title}</span>
                      </>
                    );
                  })()}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {menuOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden z-40">
                  {currentContent.sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-4 py-3 text-left ${
                          activeSection === section.id 
                            ? 'bg-green-50 text-green-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Section */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-16">
            {/* Tab Content */}
            <div className="p-6 md:p-8 lg:p-10">
              {renderSectionContent()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Partners Showcase */}
      <PartnersShowcase />
    </div>
  );
};

export default HistoryPage;