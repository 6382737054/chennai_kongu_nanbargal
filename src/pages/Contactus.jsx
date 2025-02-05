import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-green-900">Contact Us</h2>
            <div className="h-1 w-24 bg-green-600/30 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={location.image} 
                      alt={location.title} 
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-medium">
                    {location.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>

                  <div className="space-y-2">
                    {location.phones.map((phone, idx) => (
                      <a 
                        key={idx} 
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{phone}</span>
                      </a>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {location.emails.map((email, idx) => (
                      <a 
                        key={idx} 
                        href={`mailto:${email}`} 
                        className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{email}</span>
                      </a>
                    ))}
                  </div>

                  {location.qrCode && (
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">Scan for directions</p>
                      <img 
                        src={location.qrCode} 
                        alt="Location QR" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <PartnersShowcase />
      </div>
    </>
  );
};

export default ContactPage;