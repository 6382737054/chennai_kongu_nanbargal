import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <X className="w-8 h-8" />
        </button>
        <img 
          src={imageSrc} 
          alt="Enlarged view" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

const LocationCard = ({ title, address, phone, mobile, email, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="w-full h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full object-contain"
        />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-green-600 pl-4">
          {title}
        </h3>
        <div className="space-y-4 text-gray-600">
          <p className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="leading-relaxed">{address}</span>
          </p>
          {phone && (
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>{phone}</span>
            </p>
          )}
          {mobile && (
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>{mobile}</span>
            </p>
          )}
          <p className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div className="space-y-1">
              {email.split(' ').map((mail, idx) => (
                <a 
                  key={idx}
                  href={`mailto:${mail.trim()}`}
                  className="block hover:text-green-600 transition-colors"
                >
                  {mail.trim()}
                </a>
              ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [showRouteMapModal, setShowRouteMapModal] = useState(false);

  const locations = [
    {
      title: "Administrative Office - Velli Vizha Illam",
      address: "34 - Srinivasa perumal sannadi, 1st Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phone: "91 - 44 - 2835 1244 / 2835 2744",
      mobile: "6383985919",
      email: "chennaikongu@gmail.com konguchennai@yahoo.com",
   image: "/Images/img_3.png"
    },
    {
      title: "Ladies Hostel - Kongu Nadu Illam",
      address: "27, Ammaiappan Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phone: "91 - 44 - 2835 3214 / 2835 0432",
      mobile: "6383985919",
      email: "chennaikongu@gmail.com konguchennai@yahoo.com",
   
     image: "/Images/img_4.png"
    },
    {
      title: "Guest House - Dheeran Chinnamalai Maligai",
      address: "72, peters Road, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phone: "91 - 44 - 2835 1744",
      mobile: "9381545451, 9080461503",
      email: "chennaikongu@gmail.com konguchennai@yahoo.com",
 
           image: "/Images/kongu_building.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Location Cards */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>

        {/* Route Map */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Route Map</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div 
            className="bg-white rounded-xl shadow-lg p-4 cursor-pointer"
            onClick={() => setShowRouteMapModal(true)}
          >
            <img 
              src="/Images/route-map.png"
              alt="Route Map to our locations"
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Route Map Modal */}
      <ImageModal 
        isOpen={showRouteMapModal}
        onClose={() => setShowRouteMapModal(false)}
        imageSrc="/Images/route-map.png"
      />
    </div>
  );
};

export default ContactPage;