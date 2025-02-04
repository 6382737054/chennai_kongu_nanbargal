import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services';
import PartnersShowcase from '../components/ad';

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-[50%] h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
        </button>

        {/* Content Container with fixed heights */}
        <div className="flex flex-col h-full">
          {/* Image Container - 70% height */}
          <div className="h-[70%] bg-gray-50 relative flex items-center justify-center mt-05">
            <img 
              src="Images/modal.png"
              alt="Magazine Cover"
              className="max-h-full w-auto object-contain"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
          </div>

          {/* Bottom Section - 30% height */}
          <div className="h-[30%] flex flex-col items-center justify-center space-y-4 p-6 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-2xl font-light text-green-900 text-center">
              Download Our Latest Magazine
            </h2>
            <button 
              onClick={() => window.open('#download-link', '_blank')}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Download className="w-5 h-5 mr-2 transform group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-light tracking-wide">Download Magazine</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <WelcomeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
          <PartnersShowcase/>
    </div>

  );
};

export default HomePage;