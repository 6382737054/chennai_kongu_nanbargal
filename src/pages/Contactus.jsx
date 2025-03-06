import React from 'react';
import { MapPin, Phone, Mail, Navigation, Compass, Building, Home } from 'lucide-react';
import PartnersShowcase from '../components/ad';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      title: "எங்களை தொடர்பு கொள்ள",
      subtitle: "எங்கள் எந்த இடத்திலும் எங்களை தொடர்பு கொள்ளவும்",
      scanDirections: "திசைகளுக்கு ஸ்கேன் செய்யவும்",
      openInMaps: "வரைபடங்களில் திறக்கவும்"
    },
    english: {
      title: "Contact Us",
      subtitle: "Get in touch with us at any of our locations",
      scanDirections: "Scan for directions",
      openInMaps: "Open in Maps"
    }
  };

  // Current content based on language
  const currentContent = content[language];

  // Bilingual locations data
  const locations = [
    {
      title: language === 'tamil' ? "நிர்வாக அலுவலகம் - வெள்ளி விழா இல்லம்" : "Administrative Office - Velli Vizha Illam",
      address: language === 'tamil' 
        ? "34 - ஸ்ரீநிவாச பெருமாள் சந்நதி, முதல் தெரு, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "34 - Srinivasa perumal sannadi, 1st Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1244", "2835 2744", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/VVI.jpg",
      qrCode: "/Images/VVI_QR.jpg",
      icon: Building
    },
    {
      title: language === 'tamil' ? "மகளிர் விடுதி - கொங்கு நாடு இல்லம்" : "Ladies Hostel - Kongu Nadu Illam",
      address: language === 'tamil' 
        ? "27, அம்மையப்பன் தெரு, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "27, Ammaiappan Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 3214", "2835 0432", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/KNI.jpg",
      qrCode: "/Images/KNI_QR.jpg",
      icon: Home
    },
    {
      title: language === 'tamil' ? "விருந்தினர் இல்லம் - தீரன் சின்னமலை மாளிகை" : "Guest House - Dheeran Chinnamalai Maligai",
      address: language === 'tamil' 
        ? "72, பீட்டர்ஸ் சாலை, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "72, Peters Road, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1744", "9381545451", "9080461503"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/his2.png",
      qrCode: "/Images/KNI_QR.jpg",
      icon: Compass
    }
  ];

  // Get gradient class based on index
  const getBgGradient = (index) => {
    const gradients = [
      'from-green-600 to-emerald-700',
      'from-teal-600 to-green-700',
      'from-cyan-600 to-teal-700',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 mt-16">
      {/* Top padding that adjusts for different screen sizes */}
      <div className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Page Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {currentContent.title}
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Location Cards - Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Location Image with Improved Styling */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-50">
                  <img 
                    src={location.image} 
                    alt={location.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Title with icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full mr-3">
                        {React.createElement(location.icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <h3 className="text-white text-xl font-semibold line-clamp-2">
                        {location.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Location Details - Enhanced */}
                <div className="p-5 sm:p-6">
                  {/* Address */}
                  <div className="flex space-x-3 mb-5">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  
                  {/* Contact Divider */}
                  <div className="h-px w-full bg-gray-100 mb-5"></div>
                  
                  {/* Phone Numbers */}
                  <div className="space-y-3 mb-5">
                    {location.phones.map((phone, idx) => (
                      <a 
                        key={idx} 
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group"
                      >
                        <div className="bg-gray-50 group-hover:bg-green-50 p-2 rounded-full transition-colors">
                          <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="text-sm font-medium">{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Email Addresses */}
                  <div className="space-y-3">
                    {location.emails.map((email, idx) => (
                      <a 
                        key={idx} 
                        href={`mailto:${email}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group"
                      >
                        <div className="bg-gray-50 group-hover:bg-green-50 p-2 rounded-full transition-colors">
                          <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="text-sm font-medium break-all">{email}</span>
                      </a>
                    ))}
                  </div>

                  {/* QR Code and Map Link - Improved Design */}
                  {location.qrCode && (
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-2">{currentContent.scanDirections}</p>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 text-sm hover:text-green-700 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5 mr-1.5" />
                          {currentContent.openInMaps}
                        </a>
                      </div>
                      <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-100">
                        <img 
                          src={location.qrCode} 
                          alt="Location QR" 
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Partners Showcase */}
      <div className="mt-12">
        <PartnersShowcase />
      </div>
    </div>
  );
};

export default ContactPage;