import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, ChevronDown, X, ExternalLink, Home, Book, BookOpen, Image, MessageSquare, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'History', path: '/history', icon: Book },
    { name: 'Magazine', path: '/magazine', icon: BookOpen },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact Us', path: '/contact', icon: MessageSquare },
    { 
      name: 'Matrimony', 
      path: 'http://test.kammavarsangam.com',
      isExternal: true,
      icon: Heart
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top contact bar */}
      <div className="hidden md:flex justify-end items-center px-6 py-2 bg-green-800 text-white">
        <div className="flex items-center space-x-6">
          <a href="tel:+919876543210" className="flex items-center hover:text-green-200 transition-colors text-sm font-medium">
            <Phone size={16} className="mr-2" />
            +91 98765 43210
          </a>
          <a href="mailto:info@chennaikongu.org" className="flex items-center hover:text-green-200 transition-colors text-sm font-medium">
            <Mail size={16} className="mr-2" />
            info@chennaikongu.org
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-green-50 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-opacity-95' : 'bg-opacity-90'}`}>
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex justify-center items-center py-4">
              <div className="flex items-center justify-center gap-10">
                <Link to="/" className="shrink-0">
                  <img
                    src="/Images/logo1.png"
                    alt="Left Logo"
                    className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-green-800 mb-1">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
                  <p className="text-green-700 font-medium">Chennai Kongu Friends Association</p>
                </div>

                <Link to="/" className="shrink-0">
                  <img
                    src="/Images/logo1.png"
                    alt="Right Logo"
                    className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className={`flex justify-center py-3 border-t border-green-200 ${scrolled ? 'bg-green-100' : 'bg-green-100/80'}`}>
              <ul className="flex items-center justify-center space-x-10">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name} className="relative group">
                      {item.isExternal ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-1 py-2 text-green-700 font-medium transition-all hover:text-green-800"
                        >
                          <Icon size={18} className="mr-2" />
                          {item.name}
                          <ExternalLink size={14} className="ml-1 opacity-70" />
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center px-1 py-2 font-medium transition-all ${
                            location.pathname === item.path 
                              ? 'text-green-800 font-semibold' 
                              : 'text-green-700 hover:text-green-800'
                          }`}
                        >
                          <Icon size={18} className="mr-2" />
                          {item.name}
                        </Link>
                      )}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Mobile View Header */}
          <div className="md:hidden flex items-center justify-between py-3">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/Images/logo1.png"
                alt="Logo"
                className="h-14 w-auto"
              />
              <div className="text-left">
                <h1 className="text-lg font-bold text-green-800">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
                <p className="text-xs text-green-700">Chennai Kongu Friends Association</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-green-800 hover:bg-green-50 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden absolute left-0 right-0 bg-green-50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="container mx-auto px-4 py-3 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="border-b border-green-100 last:border-0">
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 w-full text-green-700 hover:text-green-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center">
                          <Icon size={18} className="mr-3" />
                          <span>{item.name}</span>
                        </div>
                        <ExternalLink size={16} className="opacity-70" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center py-3 w-full ${
                          location.pathname === item.path
                            ? 'text-green-800 font-medium' 
                            : 'text-green-700 hover:text-green-800'
                        }`}
                      >
                        <Icon size={18} className="mr-3" />
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              
              {/* Mobile contact information */}
              <div className="pt-2 space-y-2 border-t border-green-100">
                <a href="tel:+919876543210" className="flex items-center text-green-700 py-2 hover:text-green-800">
                  <Phone size={16} className="mr-3" />
                  +91 98765 43210
                </a>
                <a href="mailto:info@chennaikongu.org" className="flex items-center text-green-700 py-2 hover:text-green-800">
                  <Mail size={16} className="mr-3" />
                  info@chennaikongu.org
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;