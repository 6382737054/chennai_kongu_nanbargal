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
  const [activeSection, setActiveSection] = useState('section1');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

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

  // Handle slider auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentContent.pageBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentContent.pageBanners.length]);

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
    setCurrentSlide((prev) => (prev + 1) % currentContent.pageBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? currentContent.pageBanners.length - 1 : prev - 1));
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
      {/* Hero Banner Section with Immersive Design */}
      <div ref={headerRef} className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-green-900/10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.07) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Slides */}
        <div 
          className="absolute inset-0 flex transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {currentContent.pageBanners.map((banner, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Image with parallax effect */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt={`History Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
                    transition: 'transform 7s ease-out'
                  }}
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-10"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-20">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-6 transform transition-all duration-700 delay-300" 
                       style={{ 
                         opacity: currentSlide === index ? 1 : 0,
                         transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)'
                       }}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
                      {banner.title}
                    </h1>
                    <div className="h-1 w-20 md:w-24 bg-green-500 mx-auto mb-4"></div>
                    <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation UI Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {currentContent.pageBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-10 h-2 bg-green-500' 
                  : 'w-2 h-2 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

    
      </div>

      {/* Section Navigation - Enhanced Sticky Header */}
      <div 
        className={`sticky z-20 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-black/30 backdrop-blur-sm'
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