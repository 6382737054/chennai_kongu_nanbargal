import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, ChevronDown, X, ExternalLink, Home, Book, BookOpen, Image, MessageSquare, Heart, Globe, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // Using language context
  const location = useLocation();

  // Handle scroll effect with enhanced sensitivity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menu items with translations
  const menuItems = [
    {
      tamil: { name: 'முகப்பு', path: '/', icon: Home },
      english: { name: 'Home', path: '/', icon: Home }
    },
    {
      tamil: { name: 'வரலாறு', path: '/history', icon: Book },
      english: { name: 'History', path: '/history', icon: Book }
    },
    {
      tamil: { name: 'பத்திரிகை', path: '/magazine', icon: BookOpen },
      english: { name: 'Magazine', path: '/magazine', icon: BookOpen }
    },
    {
      tamil: { name: 'படத்தொகுப்பு', path: '/gallery', icon: Image },
      english: { name: 'Gallery', path: '/gallery', icon: Image }
    },
    {
      tamil: { name: 'தொடர்புக்கு', path: '/contact', icon: MessageSquare },
      english: { name: 'Contact Us', path: '/contact', icon: MessageSquare }
    },
    {
      tamil: { 
        name: 'திருமண சேவை', 
        path: 'https://kongunanbargalsangam.org/matrimony/registration/register.aspx',
        isExternal: true,
        icon: Heart
      },
      english: { 
        name: 'Matrimony', 
        path: 'https://kongunanbargalsangam.org/matrimony/registration/register.aspx',
        isExternal: true,
        icon: Heart
      }
    }
  ];

  // Get current language menu items
  const currentMenuItems = menuItems.map(item => item[language]);

  // Organization title translations
  const orgTitle = {
    tamil: {
      main: 'சென்னை கொங்கு நண்பர்கள் சங்கம்',
      sub: 'Chennai Kongu Friends Association'
    },
    english: {
      main: 'Chennai Kongu Friends Association',
      sub: 'Founded 1960 • Serving Community'
    }
  };

  // Contact information translations
  const contactInfo = {
    tamil: {
      phone: 'தொலைபேசி',
      email: 'மின்னஞ்சல்',
      announcement: 'அறிவிப்பு'
    },
    english: {
      phone: 'Phone',
      email: 'Email',
      announcement: 'Announcement'
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top announcement bar - Special premium touch */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-1.5 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center text-white text-sm">
            <AlertCircle size={14} className="mr-2" />
            <span className="text-center">
              {language === 'tamil' 
                ? 'கொங்கு நண்பர்கள் சங்கத்திற்கு வருக ...'
                : 'Welcome to Kongu Nanbargal Sangam...'}
            </span>
          </div>
        </div>
      </div>

      {/* Contact bar */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact info */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+919876543210" className="flex items-center hover:text-green-200 transition-colors text-sm">
              <Phone size={14} className="mr-2" />
              <span>{contactInfo[language].phone}: <span className="font-medium">+91 98765 43210</span></span>
            </a>
            <a href="mailto:info@chennaikongu.org" className="flex items-center hover:text-green-200 transition-colors text-sm">
              <Mail size={14} className="mr-2" />
              <span>{contactInfo[language].email}: <span className="font-medium">info@chennaikongu.org</span></span>
            </a>
          </div>
          
          {/* Language Toggle - Desktop */}
          <div className="mx-auto md:mx-0">
            <button 
              onClick={toggleLanguage}
              className="relative flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full text-sm transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></div>
              <Globe size={14} className="relative z-10" />
              <span className="relative z-10">{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-white backdrop-filter backdrop-blur-lg transition-all duration-300 ${
        scrolled ? 'bg-opacity-95' : 'bg-opacity-85'
      }`}>
        <div className="container mx-auto px-4">
          {/* Logo and branding section */}
          <div className="flex justify-between md:justify-center items-center py-3 md:py-4">
            {/* Mobile logo and title */}
            <div className="flex md:hidden items-center space-x-3">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/Images/logo1.png"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <div>
                <h1 className="text-base font-bold text-green-800 line-clamp-1">
                  {orgTitle[language].main}
                </h1>
                <p className="text-xs text-green-700">{orgTitle[language].sub}</p>
              </div>
            </div>

            {/* Desktop logo and title */}
            <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
              <Link to="/" className="flex-shrink-0 group relative">
                <div className="absolute -inset-2 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>
                <img
                  src="/Images/logo1.png"
                  alt="Left Logo"
                  className="h-20 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              
              <div className="text-center relative">
                <div className="absolute -inset-x-6 -inset-y-3 bg-gradient-to-r from-green-50/0 via-green-50/80 to-green-50/0 rounded-lg opacity-0 transform translate-y-4 transition-all duration-500"></div>
                <h1 className="text-2xl font-bold text-green-800 mb-0.5 relative z-10">
                  {orgTitle[language].main}
                </h1>
                <div className="h-px w-32 bg-gradient-to-r from-green-200 via-green-500 to-green-200 mx-auto mb-1.5"></div>
                <p className="text-green-700 font-medium relative z-10">{orgTitle[language].sub}</p>
              </div>

              <Link to="/" className="flex-shrink-0 group relative">
                <div className="absolute -inset-2 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>
                <img
                  src="/Images/logo1.png"
                  alt="Right Logo"
                  className="h-20 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-green-800 hover:bg-green-50 transition-colors z-20"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className={`hidden md:block py-3 border-t border-green-100 ${
            scrolled ? 'bg-gradient-to-r from-green-50/90 via-white/80 to-green-50/90' : 'bg-transparent'
          }`}>
            <ul className="flex items-center justify-center">
              {currentMenuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="relative group px-1">
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-green-700 font-medium transition-all hover:text-green-800 rounded-lg hover:bg-green-50/70"
                      >
                        <Icon size={18} strokeWidth={2} className="mr-2" />
                        {item.name}
                        <ExternalLink size={14} className="ml-1 opacity-70" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center px-3 py-2 font-medium transition-all rounded-lg ${
                          location.pathname === item.path 
                            ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-md' 
                            : 'text-green-700 hover:text-green-800 hover:bg-green-50/70'
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} className="mr-2" />
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Navigation Overlay */}
          <div 
            className={`md:hidden fixed inset-0 bg-green-900/90 backdrop-blur-lg z-10 transition-all duration-500 ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div 
              className="h-full max-w-md mx-auto bg-white shadow-2xl transform transition-transform duration-500 overflow-auto"
              style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="bg-gradient-to-r from-green-800 to-green-700 px-6 py-8 text-white">
                <h2 className="text-xl font-bold mb-1">{orgTitle[language].main}</h2>
                <p className="text-sm text-green-100">{orgTitle[language].sub}</p>
                
                <button 
                  onClick={toggleLanguage}
                  className="mt-4 flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm"
                >
                  <Globe size={16} />
                  <span>{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
                </button>
              </div>
              
              {/* Navigation Items */}
              <nav className="py-4 px-2">
                {currentMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="mb-1 px-2">
                      {item.isExternal ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-3 px-4 w-full text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center">
                            <Icon size={20} className="mr-4" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ExternalLink size={16} className="opacity-70" />
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center py-3 px-4 w-full rounded-lg ${
                            location.pathname === item.path
                              ? 'bg-green-50 text-green-700 font-medium' 
                              : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                          }`}
                        >
                          <Icon size={20} className="mr-4" />
                          {item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
              
              {/* Mobile contact information */}
              <div className="mt-4 px-6 py-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-4">{contactInfo[language].announcement}</h3>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center text-gray-700 hover:text-green-700 transition-colors">
                    <Phone size={18} className="mr-3 text-green-600" />
                    <span>+91 98765 43210</span>
                  </a>
                  <a href="mailto:info@chennaikongu.org" className="flex items-center text-gray-700 hover:text-green-700 transition-colors">
                    <Mail size={18} className="mr-3 text-green-600" />
                    <span>info@chennaikongu.org</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;