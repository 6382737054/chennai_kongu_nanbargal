import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'Gallery/Events', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-green-50/80">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <img
                    src="/Images/logo.png"
                    alt="Kongu Nanbargal Sangam Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-600">
                    Kongu Nanbargal Sangam
                  </h3>
                  <div className="h-1 w-12 bg-green-600 mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A vibrant community of 4,200+ members united in promoting friendship, 
                brotherhood, and societal development through cultural excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:mx-auto">
              <h4 className="text-xl font-bold text-green-600 mb-6">
                Quick Links
                <div className="h-1 w-12 bg-green-600 mt-2"></div>
              </h4>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-green-600 transition-colors flex items-center group"
                    >
                      <span className="h-1 w-0 bg-green-600 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold text-green-600 mb-6">
                Get in Touch
                <div className="h-1 w-12 bg-green-600 mt-2"></div>
              </h4>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  123 Community Center,<br />
                  Chennai, Tamil Nadu 600001
                </p>
                <p>info@kongusangam.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Kongu Nanbargal Sangam. All rights reserved.
            </p>
            <a
              href="https://klabsindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-white/90 transition-colors group"
            >
              Designed by 
              <span className="font-semibold ml-1 group-hover:underline">
                Klabs India
              </span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;