import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const HeaderLayout = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
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

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenu = menuItems.find(item => item.path === currentPath)?.name || 'Home';
    setActiveItem(currentMenu);
  }, [location]);

  return (
    <div className="bg-white">
      {/* Top DateTime Bar */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-right py-1 text-sm">
            {currentDateTime.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
            <div className="text-center">
              <img
                src="/Images/logo.png"
                alt="Logo"
                className="h-28 w-auto mx-auto"
              />
              <h1 className="mt-2 text-xl font-bold text-green-700">
                சென்னை கொங்கு நண்பர்கள் சங்கம்
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex justify-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-4 text-sm font-medium transition-colors relative
                      ${activeItem === item.name 
                        ? 'text-green-600' 
                        : 'text-gray-700 hover:text-green-600'
                      }`}
                  >
                    {item.name}
                    {activeItem === item.name && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-gray-700"
            >
              <span className="font-medium">Menu</span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {isMenuOpen && (
              <ul className="border-t">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-sm transition-colors
                        ${activeItem === item.name
                          ? 'bg-green-50 text-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;