import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-b from-green-50 to-green-100">
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <img src="/Images/logo1.png" alt="Kongu Nanbargal Sangam" className="h-16 w-auto" />
            <h3 className="text-xl font-light text-green-900">Kongu Nanbargal Sangam</h3>
          </div>
          <p className="text-gray-600 leading-relaxed pr-4">
            A vibrant community of 4,200+ members united in promoting friendship, brotherhood, and societal development through cultural excellence.
          </p>
        </section>

        {/* Quick Links */}
        <section>
          <h3 className="text-lg font-medium text-green-900 mb-6 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-600/30 rounded-full" />
          </h3>
          <nav className="space-y-3">
            <a href="/" className="block text-gray-600 hover:text-green-700 transition-colors duration-300">Home</a>
            <a href="/history" className="block text-gray-600 hover:text-green-700 transition-colors duration-300">History</a>
            <a href="/magazine" className="block text-gray-600 hover:text-green-700 transition-colors duration-300">Magazine</a>
            <a href="/gallery" className="block text-gray-600 hover:text-green-700 transition-colors duration-300">Gallery/Events</a>
            <a href="/contact" className="block text-gray-600 hover:text-green-700 transition-colors duration-300">Contact Us</a>
          </nav>
        </section>

        {/* Contact Info */}
        <section>
          <h3 className="text-lg font-medium text-green-900 mb-6 relative">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-green-600/30 rounded-full" />
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-700 mt-1" />
              <p className="text-gray-600">123 Community Center,<br />Chennai, Tamil Nadu 600001</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-700" />
              <a href="mailto:info@kongusangam.com" className="text-gray-600 hover:text-green-700 transition-colors duration-300">
                info@kongusangam.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>

    {/* Bottom Bar */}
    <section className="bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-white/90 text-sm">© 2025 Kongu Nanbargal Sangam. All rights reserved.</p>
          <p className="text-white/80 text-sm">
            Designed by{' '}
            <a href="https://klabsindia.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-100 transition-colors duration-300">
              Klabs India
            </a>
          </p>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;