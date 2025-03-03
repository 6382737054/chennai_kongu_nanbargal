import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Image, Search, ZoomIn, Download } from 'lucide-react';

const GalleryModal = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Pre-load the current image
  useEffect(() => {
    if (images && images.length > 0) {
      setLoading(true);
      const img = new window.Image();
      img.src = images[currentIndex].url;
      img.onload = () => {
        setLoading(false);
      };
    }
  }, [currentIndex, images]);

  const nextImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute right-3 sm:right-4 top-3 sm:top-4 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300"
        aria-label="Close gallery"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Navigation buttons */}
      <button 
        onClick={prevImage}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 z-30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 z-30"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Image container */}
      <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20">
              <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>

      {/* Image caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between max-w-5xl mx-auto">
          <p className="text-white text-base sm:text-lg font-medium mb-3 sm:mb-0">
            {images[currentIndex].caption}
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
            <button className="text-white/80 hover:text-white flex items-center text-sm">
              <ZoomIn className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Zoom</span>
            </button>
            <button className="text-white/80 hover:text-white flex items-center text-sm">
              <Download className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GallerySection = ({ section, images, onImageClick, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredImages(images);
    } else {
      setFilteredImages(
        images.filter(image => 
          image.caption.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, images]);

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <button 
          onClick={onBack}
          className="text-green-700 hover:text-green-800 flex items-center text-sm sm:text-base"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Gallery
        </button>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6">{section}</h3>
      
      {filteredImages.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
          <Image className="w-12 h-12 text-green-200 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-2">No images found</h4>
          <p className="text-gray-500 text-sm">Try adjusting your search term or explore other categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg shadow-sm border border-gray-50 hover:shadow-md hover:border-green-100 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-white text-sm sm:text-base line-clamp-2">{image.caption}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  // Gallery data with categories and images
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
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 pt-28 pb-16 mt-32">
      {!selectedSection ? (
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Our Gallery</h2>
            <div className="h-1 w-16 sm:w-24 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of memories, events, and achievements throughout the years
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {Object.entries(galleryData).map(([section, data]) => (
              <div
                key={section}
                onClick={() => openSection(section)}
                className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-green-100 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={data.coverImage}
                    alt={section}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">{section}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{data.images.length} photos</span>
                    <span className="inline-flex items-center text-green-600 group-hover:text-green-700 transition-colors text-sm font-medium">
                      View Gallery
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
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