import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

function Footer() {
  const links = ['Home', 'History', 'Magazine', 'Gallery/Events', 'Contact Us'];
  const paths = ['/', '/history', '/magazine', '/gallery', '/contact'];

  return (
    <footer className="bg-white">
      {/* Top border line */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600" />
      
      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center gap-4 mb-5">
                <img src="/Images/logo1.png" alt="Logo" className="h-16 w-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">
                    Chennai Kongu
                  </h3>
                  <h4 className="text-base text-green-700">
                    Nanbargal Sangam
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A vibrant community of 4,200+ members united in promoting friendship, brotherhood, and societal development through cultural excellence.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={link}>
                    <a 
                      href={paths[index]}
                      className="text-gray-600 hover:text-green-700 hover:translate-x-1 flex items-center transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-green-800 mt-8 mb-5">
                External Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://kongunanbargalsangam.org/matrimony/registration/register.aspx"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-700 hover:translate-x-1 flex items-center transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5"></span>
                    Matrimony
                    <ExternalLink size={12} className="ml-1.5 text-gray-400" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-5">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    123 Community Center,<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <a 
                    href="tel:+919876543210"
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <a 
                    href="mailto:info@kongusangam.com"
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    info@kongusangam.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-green-100">
                <h4 className="text-base font-medium text-green-800 mb-3">Office Hours</h4>
                <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/90 text-sm">
              © 2025 Kongu Nanbargal Sangam. All rights reserved.
            </p>
            <p className="text-white/80 text-sm">
              Designed by{' '}
              <a 
                href="https://klabsindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-200 transition-colors"
              >
                Klabs India
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;