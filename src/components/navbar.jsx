import React, { useState } from 'react';
import { Menu, Phone, Mail, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = ['Home', 'History', 'Magazine', 'Gallery', 'Contact Us'];

  return (
    <nav className="w-full bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 shadow-lg">
      {/* Top contact bar */}
      <div className="hidden md:flex justify-end items-center px-6 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Phone size={16} className="mr-2" />
            <a href="tel:+919876543210" className="hover:text-blue-200 transition-colors">+91 98765 43210</a>
          </span>
          <span className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:info@chennaikongu.org" className="hover:text-blue-200 transition-colors">info@chennaikongu.org</a>
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        {/* Desktop View - Main Content Section */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center py-2">
            <div className="flex items-center justify-center gap-8">
              <img
                src="/Images/logo1.png"
                alt="Left Logo"
                className="h-28 w-auto"
              />
              
              <div className="text-center px-4">
                <h1 className="text-2xl font-bold text-blue-900">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
                <p className="text-blue-700">Chennai Kongu Friends Association</p>
              </div>

              <img
                src="/Images/logo1.png"
                alt="Right Logo"
                className="h-28 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="flex justify-center py-3">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <div key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setActiveItem(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeItem === item ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
                    }`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View Header */}
        <div className="md:hidden flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img
              src="/Images/logo1.png"
              alt="Left Logo"
              className="h-16 w-auto"
            />
            <div className="text-center">
              <h1 className="text-lg font-bold text-blue-900">சென்னை கொங்கு நண்பர்கள் சங்கம்</h1>
              <p className="text-sm text-blue-700">Chennai Kongu Friends Association</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-blue-900 hover:bg-blue-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActiveItem(item);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeItem === item
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-blue-900 hover:bg-blue-50'
                }`}
              >
                {item}
              </a>
            ))}
            {/* Mobile contact information */}
            <div className="mt-4 space-y-2 border-t border-gray-200 pt-2">
              <a href="tel:+919876543210" className="flex items-center text-blue-900 px-3 py-2 hover:bg-blue-50 rounded-md transition-colors">
                <Phone size={16} className="mr-2" />
                +91 98765 43210
              </a>
              <a href="mailto:info@chennaikongu.org" className="flex items-center text-blue-900 px-3 py-2 hover:bg-blue-50 rounded-md transition-colors">
                <Mail size={16} className="mr-2" />
                info@chennaikongu.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;