import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, ChevronDown, X, ExternalLink, Home, Book, BookOpen, Image, MessageSquare, Heart, Globe, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close menu if click is outside the mobile menu
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

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

  // Close menu on navigation or external click
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-30 transition-all duration-300 overflow-x-hidden">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-1.5 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center text-white text-sm">
            <AlertCircle size={14} className="mr-2 flex-shrink-0" />
            <span className="text-center truncate">
              {language === 'tamil' 
                ? 'கொங்கு நண்பர்கள் சங்கத்திற்கு வருக ...'
                : 'Welcome to Kongu Nanbargal Sangam...'}
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar with combined contact info, logo and navigation */}
      <div className={`bg-white transition-all duration-300 shadow-md ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo and title section */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex-shrink-0 group relative">
                <img
                  src="/Images/logo1.png"
                  alt="Logo"
                  className="h-12 w-auto md:h-16 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="hidden sm:block overflow-hidden">
                <h1 className="text-base md:text-lg font-bold text-green-800 truncate">
                  {orgTitle[language].main}
                </h1>
                <p className="text-xs md:text-sm text-green-700 truncate">{orgTitle[language].sub}</p>
              </div>
            </div>

            {/* Desktop contact info */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center text-green-700 hover:text-green-800 transition-colors text-sm">
                <Phone size={14} className="mr-2 flex-shrink-0" />
                <span className="truncate">{contactInfo[language].phone}: <span className="font-medium">+91 98765 43210</span></span>
              </a>
              <a href="mailto:info@chennaikongu.org" className="flex items-center text-green-700 hover:text-green-800 transition-colors text-sm">
                <Mail size={14} className="mr-2 flex-shrink-0" />
                <span className="truncate">{contactInfo[language].email}: <span className="font-medium">info@chennaikongu.org</span></span>
              </a>
              
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-full text-sm text-green-800 transition-all duration-300"
              >
                <Globe size={14} className="flex-shrink-0" />
                <span>{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
              </button>
            </div>

            {/* Mobile language toggle and menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-green-100 hover:bg-green-200 px-2 py-1.5 rounded-full text-sm text-green-800"
              >
                <Globe size={14} className="flex-shrink-0" />
                <span>{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center p-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Menu - Now part of the main navbar */}
          <nav className="hidden md:block py-2 border-t border-green-100">
            <ul className="flex items-center justify-center flex-wrap">
              {currentMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="relative group px-1">
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-green-700 font-medium transition-all hover:text-green-800 rounded-lg hover:bg-green-50"
                      >
                        <Icon size={18} strokeWidth={2} className="mr-2 flex-shrink-0" />
                        <span className="truncate">{item.name}</span>
                        <ExternalLink size={14} className="ml-1 opacity-70 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center px-3 py-2 font-medium transition-all rounded-lg ${
                          location.pathname === item.path 
                            ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-md' 
                            : 'text-green-700 hover:text-green-800 hover:bg-green-50'
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} className="mr-2 flex-shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* MOBILE Menu - Full Page Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-30 overflow-y-auto overflow-x-hidden mobile-menu">
          {/* Mobile Menu Header */}
          <div className="bg-green-800 px-4 py-6 text-white relative">
            {/* Close button added to mobile menu header */}
            <button 
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex items-center mb-4">
              <img src="/Images/logo1.png" alt="Logo" className="h-12 w-auto mr-3 flex-shrink-0" />
              <div className="overflow-hidden">
                <h2 className="text-lg font-bold truncate max-w-[200px]">{orgTitle[language].main}</h2>
                <p className="text-sm text-green-100 truncate max-w-[200px]">{orgTitle[language].sub}</p>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Items */}
          <nav className="py-4 px-4">
            <ul className="space-y-1">
              {currentMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 px-4 w-full text-gray-800 border-b border-gray-100"
                        onClick={closeMenu}
                      >
                        <div className="flex items-center overflow-hidden">
                          <Icon size={20} className="mr-4 text-green-600 flex-shrink-0" />
                          <span className="font-medium truncate">{item.name}</span>
                        </div>
                        <ExternalLink size={16} className="opacity-70 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`flex items-center py-3 px-4 w-full border-b border-gray-100 ${
                          location.pathname === item.path
                            ? 'text-green-700 font-medium' 
                            : 'text-gray-800'
                        }`}
                      >
                        <Icon size={20} className="mr-4 text-green-600 flex-shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        
          {/* Mobile contact information */}
          <div className="px-6 py-6 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500 mb-4">{contactInfo[language].announcement}</h3>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center text-gray-700">
                <Phone size={18} className="mr-3 text-green-600 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@chennaikongu.org" className="flex items-center text-gray-700">
                <Mail size={18} className="mr-3 text-green-600 flex-shrink-0" />
                <span>info@chennaikongu.org</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;