
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryModal = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="w-[70%] h-[70vh] flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <p className="text-white text-center text-lg">
          {images[currentIndex].caption}
        </p>
      </div>
    </div>
  );
};

const GallerySection = ({ section, images, onImageClick, onBack }) => (
  <div className="container mx-auto px-6">
    <button 
      onClick={onBack}
      className="mb-6 text-green-700 hover:text-green-800 flex items-center"
    >
      <ChevronLeft className="w-5 h-5 mr-1" /> Back to Sections
    </button>
    <h3 className="text-2xl font-light text-green-900 mb-8">{section}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div 
          key={index}
          onClick={() => onImageClick(index)}
          className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="absolute bottom-2 left-2 right-2 text-white text-sm">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const galleryData = {
    "Cultural Events": {
      "coverImage": "/Images/Gallery/cultural/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/cultural/1.jpg", "caption": "Traditional Dance Performance" },
        { "url": "/Images/Gallery/cultural/2.jpg", "caption": "Music Concert" },
        { "url": "/Images/Gallery/cultural/3.jpg", "caption": "Folk Dance Show" },
        { "url": "/Images/Gallery/cultural/4.jpg", "caption": "Cultural Program" },
        { "url": "/Images/Gallery/cultural/5.jpg", "caption": "Annual Day Celebration" },
        { "url": "/Images/Gallery/cultural/6.jpg", "caption": "Art Exhibition" },
        { "url": "/Images/Gallery/cultural/7.jpg", "caption": "Drama Performance" },
        { "url": "/Images/Gallery/cultural/8.jpg", "caption": "Poetry Reading" },
        { "url": "/Images/Gallery/cultural/9.jpg", "caption": "Traditional Music" },
        { "url": "/Images/Gallery/cultural/10.jpg", "caption": "Cultural Exchange" }
      ]
    },
    "Awards Ceremony": {
      "coverImage": "/Images/Gallery/awards/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/awards/1.jpg", "caption": "Annual Awards 2023" },
        { "url": "/Images/Gallery/awards/2.jpg", "caption": "Achievement Recognition" },
        { "url": "/Images/Gallery/awards/3.jpg", "caption": "Excellence Awards" },
        { "url": "/Images/Gallery/awards/4.jpg", "caption": "Young Achievers" },
        { "url": "/Images/Gallery/awards/5.jpg", "caption": "Special Recognition" },
        { "url": "/Images/Gallery/awards/6.jpg", "caption": "Leadership Awards" },
        { "url": "/Images/Gallery/awards/7.jpg", "caption": "Community Service Awards" },
        { "url": "/Images/Gallery/awards/8.jpg", "caption": "Academic Excellence" },
        { "url": "/Images/Gallery/awards/9.jpg", "caption": "Sports Champions" },
        { "url": "/Images/Gallery/awards/10.jpg", "caption": "Lifetime Achievement" }
      ]
    },
    "Community Service": {
      "coverImage": "/Images/Gallery/community/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/community/1.jpg", "caption": "Food Distribution Drive" },
        { "url": "/Images/Gallery/community/2.jpg", "caption": "Education Support" },
        { "url": "/Images/Gallery/community/3.jpg", "caption": "Health Camp" },
        { "url": "/Images/Gallery/community/4.jpg", "caption": "Tree Plantation" },
        { "url": "/Images/Gallery/community/5.jpg", "caption": "Clean City Drive" },
        { "url": "/Images/Gallery/community/6.jpg", "caption": "Elder Care Program" },
        { "url": "/Images/Gallery/community/7.jpg", "caption": "Youth Empowerment" },
        { "url": "/Images/Gallery/community/8.jpg", "caption": "Rural Development" },
        { "url": "/Images/Gallery/community/9.jpg", "caption": "Women Empowerment" },
        { "url": "/Images/Gallery/community/10.jpg", "caption": "Skill Development" }
      ]
    },
    "Sports Events": {
      "coverImage": "/Images/Gallery/sports/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/sports/1.jpg", "caption": "Annual Sports Meet" },
        { "url": "/Images/Gallery/sports/2.jpg", "caption": "Cricket Tournament" },
        { "url": "/Images/Gallery/sports/3.jpg", "caption": "Athletics Meet" },
        { "url": "/Images/Gallery/sports/4.jpg", "caption": "Football Match" },
        { "url": "/Images/Gallery/sports/5.jpg", "caption": "Basketball Tournament" },
        { "url": "/Images/Gallery/sports/6.jpg", "caption": "Volleyball Championship" },
        { "url": "/Images/Gallery/sports/7.jpg", "caption": "Sports Awards" },
        { "url": "/Images/Gallery/sports/8.jpg", "caption": "Youth Sports" },
        { "url": "/Images/Gallery/sports/9.jpg", "caption": "Indoor Games" },
        { "url": "/Images/Gallery/sports/10.jpg", "caption": "Sports Training" }
      ]
    },
    "Educational Programs": {
      "coverImage": "/Images/Gallery/education/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/education/1.jpg", "caption": "Career Guidance Session" },
        { "url": "/Images/Gallery/education/2.jpg", "caption": "Workshop" },
        { "url": "/Images/Gallery/education/3.jpg", "caption": "Training Program" },
        { "url": "/Images/Gallery/education/4.jpg", "caption": "Seminar" },
        { "url": "/Images/Gallery/education/5.jpg", "caption": "Guest Lecture" },
        { "url": "/Images/Gallery/education/6.jpg", "caption": "Skill Development" },
        { "url": "/Images/Gallery/education/7.jpg", "caption": "Educational Tour" },
        { "url": "/Images/Gallery/education/8.jpg", "caption": "Science Exhibition" },
        { "url": "/Images/Gallery/education/9.jpg", "caption": "Library Event" },
        { "url": "/Images/Gallery/education/10.jpg", "caption": "Students Meet" }
      ]
    },
    "Special Celebrations": {
      "coverImage": "/Images/Gallery/celebrations/cover.jpg",
      "images": [
        { "url": "/Images/Gallery/celebrations/1.jpg", "caption": "New Year Celebration" },
        { "url": "/Images/Gallery/celebrations/2.jpg", "caption": "Foundation Day" },
        { "url": "/Images/Gallery/celebrations/3.jpg", "caption": "Annual Day" },
        { "url": "/Images/Gallery/celebrations/4.jpg", "caption": "Festival Celebration" },
        { "url": "/Images/Gallery/celebrations/5.jpg", "caption": "Community Gathering" },
        { "url": "/Images/Gallery/celebrations/6.jpg", "caption": "Special Event" },
        { "url": "/Images/Gallery/celebrations/7.jpg", "caption": "Anniversary" },
        { "url": "/Images/Gallery/celebrations/8.jpg", "caption": "Cultural Night" },
        { "url": "/Images/Gallery/celebrations/9.jpg", "caption": "Award Ceremony" },
        { "url": "/Images/Gallery/celebrations/10.jpg", "caption": "Closing Ceremony" }
      ]
    }
  };

  const openSection = (section) => {
    setSelectedSection(section);
  };

  const openImage = (section, index) => {
    setModalImages(galleryData[section].images);
    setInitialIndex(index);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 py-16">
      {!selectedSection ? (
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-green-900">Our Gallery</h2>
            <div className="h-1 w-24 bg-green-600/30 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(galleryData).map(([section, data]) => (
              <div
                key={section}
                onClick={() => openSection(section)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64">
                  <img
                    src={data.coverImage}
                    alt={section}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{section}</h3>
                    <span className="inline-flex items-center text-white/80 group-hover:text-white transition-colors">
                      View Gallery
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <GallerySection 
          section={selectedSection}
          images={galleryData[selectedSection].images}
          onImageClick={(index) => openImage(selectedSection, index)}
          onBack={() => setSelectedSection(null)}
        />
      )}

      {showModal && (
        <GalleryModal
          images={modalImages}
          onClose={() => setShowModal(false)}
          initialIndex={initialIndex}
        />
      )}
    </div>
  );
};

export default GalleryPage;
