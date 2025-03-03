import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import PartnersShowcase from '../components/ad';

const ContactPage = () => {
  const locations = [
    {
      title: "Administrative Office - Velli Vizha Illam",
      address: "34 - Srinivasa perumal sannadi, 1st Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1244", "2835 2744", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/VVI.jpg",
      qrCode: "/Images/VVI_QR.jpg"
    },
    {
      title: "Ladies Hostel - Kongu Nadu Illam",
      address: "27, Ammaiappan Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 3214", "2835 0432", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/KNI.jpg",
      qrCode: "/Images/KNI_QR.jpg"
    },
    {
      title: "Guest House - Dheeran Chinnamalai Maligai",
      address: "72, peters Road, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1744", "9381545451", "9080461503"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/his2.png",
      qrCode: "/Images/KNI_QR.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 mt-16">
      {/* Top padding that adjusts for different screen sizes */}
      <div className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Page Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3">Contact Us</h1>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Get in touch with us at any of our locations
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-green-100 transition-all duration-300"
              >
                {/* Location Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50">
                  <img 
                    src={location.image} 
                    alt={location.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-base sm:text-lg font-medium line-clamp-2">
                      {location.title}
                    </h3>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-4 sm:p-5">
                  {/* Address */}
                  <div className="flex space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{location.address}</p>
                  </div>
                  
                  {/* Contact Divider */}
                  <div className="h-px w-full bg-gray-100 mb-4"></div>
                  
                  {/* Phone Numbers */}
                  <div className="space-y-2 mb-4">
                    {location.phones.map((phone, idx) => (
                      <a 
                        key={idx} 
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Email Addresses */}
                  <div className="space-y-2">
                    {location.emails.map((email, idx) => (
                      <a 
                        key={idx} 
                        href={`mailto:${email}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm break-all">{email}</span>
                      </a>
                    ))}
                  </div>

                  {/* QR Code and Map Link */}
                  {location.qrCode && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Scan for directions</p>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 text-xs hover:text-green-700"
                        >
                          <Navigation className="w-3 h-3 mr-1" />
                          Open in Maps
                        </a>
                      </div>
                      <img 
                        src={location.qrCode} 
                        alt="Location QR" 
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Partners Showcase */}
      <div className="mt-8">
        <PartnersShowcase />
      </div>
    </div>
  );
};

export default ContactPage;