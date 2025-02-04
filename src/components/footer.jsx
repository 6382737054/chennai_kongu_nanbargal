import React from 'react';
import { MapPin, Mail } from 'lucide-react';

function Footer() {
  const links = ['Home', 'History', 'Magazine', 'Gallery/Events', 'Contact Us'];
  const paths = ['/', '/history', '/magazine', '/gallery', '/contact'];

  return (
    <footer>
      {/* Top border line */}
      <div className="h-1 bg-gradient-to-r from-green-300 via-emerald-500 to-green-600" />
      
      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo Section */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src="/Images/logo1.png" alt="Logo" className="h-16 w-auto" />
                <h3 className="text-xl font-light text-green-900">
                  Kongu Nanbargal Sangam
                </h3>
              </div>
              <p className="text-gray-600">
                A vibrant community of 4,200+ members united in promoting friendship, brotherhood, and societal development through cultural excellence.
              </p>
            </div>

            {/* Links Section */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-green-900 mb-6 border-b-2 border-green-200 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={link}>
                    <a 
                      href={paths[index]}
                      className="text-gray-600 hover:text-green-700 hover:pl-2 transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-6 border-b-2 border-green-200 pb-2">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-1" />
                  <p className="text-gray-600">
                    123 Community Center,<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-green-700" />
                  <a 
                    href="mailto:info@kongusangam.com"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    info@kongusangam.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-emerald-800">
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