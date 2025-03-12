import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      tagline: "நட்பு, சகோதரத்துவம் மற்றும் கலாச்சார சிறப்பின் மூலம் சமூக வளர்ச்சியை ஊக்குவிக்கும் 4,200+ உறுப்பினர்களைக் கொண்ட துடிப்பான சமூகம்.",
      quickLinks: "விரைவு இணைப்புகள்",
      externalResources: "வெளி ஆதாரங்கள்",
      matrimony: "திருமண சேவை",
      getInTouch: "தொடர்பு கொள்ளுங்கள்",
      address: "34, ஸ்ரீநிவாச பெருமாள் சந்நதி,\nமுதல் தெரு, ராயப்பேட்டை,\nசென்னை - 600 014",
      officeHours: "அலுவலக நேரம்",
      monToFri: "திங்கள் - வெள்ளி: காலை 9:00 - மாலை 5:00",
      saturday: "சனிக்கிழமை: காலை 9:00 - மதியம் 1:00",
      copyright: "© 2025 கொங்கு நண்பர்கள் சங்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      designedBy: "வடிவமைத்தவர்",
      links: [
        'முகப்பு', 
        'வரலாறு', 
        'இதழ்', 
        'புகைப்படத் தொகுப்பு/நிகழ்வுகள்', 
        'தொடர்பு கொள்ள'
      ]
    },
    english: {
      tagline: "A vibrant community of 4,200+ members united in promoting friendship, brotherhood, and societal development through cultural excellence.",
      quickLinks: "Quick Links",
      externalResources: "External Resources",
      matrimony: "Matrimony",
      getInTouch: "Get in Touch",
      address: "34, Srinivasa Perumal Sannadi,\n1st Street, Royapettah,\nChennai - 600 014",
      officeHours: "Office Hours",
      monToFri: "Monday - Friday: 9:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 1:00 PM",
      copyright: "© 2025 Kongu Nanbargal Sangam. All rights reserved.",
      designedBy: "Designed by",
      links: [
        'Home', 
        'History', 
        'Magazine', 
        'Gallery/Events', 
        'Contact Us'
      ]
    }
  };

  // Get current content based on language
  const currentContent = content[language];
  
  const paths = ['/', '/history', '/magazine', '/gallery', '/contact'];

  return (
    <footer className="bg-white">
      {/* Top border line */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600" />
      
      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
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
                {currentContent.tagline}
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-5 flex items-center">
                <span className="w-1 h-5 bg-green-500 rounded-full mr-2"></span>
                {currentContent.quickLinks}
              </h3>
              <ul className="space-y-3">
                {currentContent.links.map((link, index) => (
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
              
              <h3 className="text-lg font-semibold text-green-800 mt-8 mb-5 flex items-center">
                <span className="w-1 h-5 bg-green-500 rounded-full mr-2"></span>
                {currentContent.externalResources}
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
                    {currentContent.matrimony}
                    <ExternalLink size={12} className="ml-1.5 text-gray-400" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-green-800 mb-5 flex items-center">
                <span className="w-1 h-5 bg-green-500 rounded-full mr-2"></span>
                {currentContent.getInTouch}
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {currentContent.address}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <a 
                    href="tel:+91448351244"
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    +91 44 8351244
                  </a>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <a 
                    href="mailto:chennaikongu@gmail.com"
                    className="text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    chennaikongu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-green-100">
                <h4 className="text-base font-medium text-green-800 mb-3">{currentContent.officeHours}</h4>
                <p className="text-gray-600 text-sm">{currentContent.monToFri}</p>
                <p className="text-gray-600 text-sm">{currentContent.saturday}</p>
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
              {currentContent.copyright}
            </p>
            <p className="text-white/80 text-sm">
              {currentContent.designedBy}{' '}
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