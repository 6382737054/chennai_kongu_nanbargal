import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services';
import PartnersShowcase from '../components/ad';

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] h-[80vh] sm:h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
        
        {/* Content Container */}
        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="h-[60%] sm:h-[70%] bg-gray-50 relative flex items-center justify-center p-4">
            <img
              src="Images/modal.png"
              alt="Magazine Cover"
              className="h-full w-auto max-w-full object-contain"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
          </div>
          
          {/* Bottom Section */}
          <div className="h-[40%] sm:h-[30%] flex flex-col items-center justify-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-xl sm:text-2xl font-light text-green-900 text-center px-2">
              Download Our Latest Magazine
            </h2>
            <button 
              onClick={() => window.open('https://kongunanbargalsangam.org/pdf/Magazine_2025.pdf', '_blank')}
              className="flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-light tracking-wide text-sm sm:text-base">Download Magazine</span>
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
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-white pt-28">
      {/* Adjust the spacing by wrapping components in divs with custom spacing */}
      <div className="mb-8 sm:mb-10">
        <HeroSection />
      </div>
      
      <div className="mb-8 sm:mb-10">
        <ServicesSection />
      </div>
      
      <div>
        <PartnersShowcase />
      </div>
      
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;