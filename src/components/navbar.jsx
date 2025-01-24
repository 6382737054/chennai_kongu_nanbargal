import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const HeaderLayout = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [marqueePosition, setMarqueePosition] = useState(100);
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

    const marqueeTimer = setInterval(() => {
      setMarqueePosition(prev => (prev <= -300 ? 100 : prev - 0.325));
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(marqueeTimer);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenu = menuItems.find(item => item.path === currentPath)?.name || 'Home';
    setActiveItem(currentMenu);
  }, [location]);

  return (
    <header>
      <div className="bg-green-500">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col items-center">
            <img
              src="/Images/logo.png"
              alt="Logo"
              className="w-36 h-16 sm:w-56 sm:h-24 mb-4"
            />
            <div className="w-full overflow-hidden">
              <h1
                className="text-white text-lg sm:text-xl font-bold whitespace-nowrap inline-block"
                style={{ transform: `translateX(${marqueePosition}%)` }}
              >
                சென்னை கொங்கு நண்பர்கள் சங்கம்
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-600 text-black text-center py-2">
        {currentDateTime.toLocaleString('en-IN')}
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="hidden md:block">
            <ul className="flex justify-center space-x-8 py-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-black hover:text-green-600 transition-colors px-2 py-1 ${
                      activeItem === item.name ? 'border-b-2 border-green-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden w-full">
            <button
              className="p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {isMenuOpen && (
              <ul className="w-full">
                {menuItems.map((item) => (
                  <li key={item.name} className="w-full">
                    <Link
                      to={item.path}
                      className={`block w-full px-4 py-2 text-black hover:bg-green-50 ${
                        activeItem === item.name ? 'border-l-4 border-green-600' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;