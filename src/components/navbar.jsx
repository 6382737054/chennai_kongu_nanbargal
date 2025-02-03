import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const HeaderLayout = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'Gallery/Events', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenu = menuItems.find(item => item.path === currentPath)?.name || 'Home';
    setActiveItem(currentMenu);
  }, [location]);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2 text-white/90 text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 lg:mb-0">
              <a href="tel:+919876543210" className="flex items-center hover:text-white transition-colors whitespace-nowrap">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@kongunanbargalsangam.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">info@kongunanbargalsangam.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>
            <div className="flex items-center whitespace-nowrap">
              <Clock className="w-4 h-4 mr-2" />
              {currentDateTime.toLocaleString('en-IN', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: true 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          {/* Logo Section */}
          <div className="flex justify-center py-6">
            <div className="text-center">
              <div className="relative">
                <img
                  src="/Images/logo.png"
                  alt="Logo"
                  className="h-24 sm:h-32 w-auto mx-auto transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-green-500"></div>
              </div>
              <h1 className="mt-6 text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                சென்னை கொங்கு நண்பர்கள் சங்கம்
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block border-t border-gray-100">
            <ul className="flex justify-center flex-wrap">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-6 text-sm font-medium transition-all relative group whitespace-nowrap
                      ${activeItem === item.name 
                        ? 'text-green-600' 
                        : 'text-gray-600 hover:text-green-600'
                      }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300
                      ${activeItem === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-100">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full px-4 py-4 flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors"
            >
              <span className="font-medium">Menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="bg-gray-50 rounded-lg my-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-4 text-sm transition-all border-l-4
                        ${activeItem === item.name
                          ? 'bg-green-50 text-green-600 border-green-600'
                          : 'text-gray-600 hover:text-green-600 border-transparent hover:border-green-600 hover:bg-green-50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;