import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Image, Search, ZoomIn, Grid, Menu } from 'lucide-react';

// Image Modal Component - Full screen image viewer
const ImageModal = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // For swipe functionality
  const minSwipeDistance = 50;

  // Handle swipe start
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle swipe move
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle swipe end
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Load the current image
  useEffect(() => {
    if (images && images.length > 0) {
      setLoading(true);
      const img = new window.Image();
      img.src = images[currentIndex].url;
      img.onload = () => {
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, [currentIndex, images]);

  // Navigate to next image
  const nextImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Navigate to previous image
  const prevImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute right-3 top-3 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Main content area with touch support */}
      <div 
        className="w-full h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation buttons - Hidden on small mobile devices */}
        <button 
          onClick={prevImage}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button 
          onClick={nextImage}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Image container */}
        <div className="w-full h-full px-4 py-10 sm:py-16 flex items-center justify-center">
          <div className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center">
            {/* Loading spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Image */}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className={`max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
        </div>
      </div>

      {/* Bottom caption and controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent pt-16 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Caption */}
          <p className="text-white text-sm sm:text-base font-medium mb-2 line-clamp-2">
            {images[currentIndex].caption}
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Image counter */}
            <div className="flex items-center space-x-2 text-white/70 text-xs sm:text-sm">
              <span className="font-semibold text-white">{currentIndex + 1}</span>
              <span className="text-white/50">/</span>
              <span>{images.length}</span>
            </div>
            
            {/* Pagination indicators - Only on mobile */}
            <div className="flex space-x-1 sm:hidden">
              {images.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery section component
const GallerySection = ({ section, images, onImageClick, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'

  // Filter images based on search term
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header with back button and search */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <button 
              onClick={onBack}
              className="mr-3 text-green-600 hover:text-green-700 flex items-center text-sm font-medium"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span>Back</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{section}</h2>
          </div>
          
          <div className="flex items-center">
            {/* Layout toggle */}
            <div className="hidden sm:flex items-center mr-4 bg-gray-50 rounded-lg p-1">
              <button 
                onClick={() => setLayout('grid')}
                className={`p-1.5 rounded-md ${layout === 'grid' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setLayout('list')}
                className={`p-1.5 rounded-md ${layout === 'list' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500'}`}
              >
                <Menu size={18} />
              </button>
            </div>
            
           
          </div>
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-4 text-sm text-gray-500">
        {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} {searchTerm && `for "${searchTerm}"`}
      </div>
      
      {/* Image grid */}
      {filteredImages.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center my-10">
          <Image className="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-1">No images found</h4>
          <p className="text-gray-500 text-sm">Try adjusting your search term or explore other categories.</p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-lg transition-colors"
            >
              Clear search
            </button>
          )}
        </div>
      ) : layout === 'grid' ? (
        /* Grid layout */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="aspect-square overflow-hidden rounded-lg bg-gray-50 cursor-pointer group relative shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                  <p className="text-white text-xs sm:text-sm line-clamp-2">{image.caption}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List layout */
        <div className="space-y-3">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="flex items-center bg-white rounded-lg overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex-grow">
                <p className="text-gray-800 text-sm font-medium line-clamp-1">{image.caption}</p>
              </div>
              <div className="p-3 text-gray-400 group-hover:text-green-600 transition-colors">
                <ZoomIn size={18} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Gallery Page Component
const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);
// Gallery data with categories and images
const galleryData = {
  "2024 AGM": {
    "coverImage": "/Images/Gallery/agm/1.jpg",
    "images": [
      { "url": "/Images/Gallery/agm/1.jpg" },
      { "url": "/Images/Gallery/agm/2.jpg" },
      { "url": "/Images/Gallery/agm/3.jpg" },
      { "url": "/Images/Gallery/agm/4.jpg" },
      { "url": "/Images/Gallery/agm/5.jpg" },
      { "url": "/Images/Gallery/agm/6.jpg" },
   
    ]
  },
  "Sports Meet 2015": {
    "coverImage": "/Images/Gallery/sports2015/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/sports2015/1.jpg" },
      { "url": "/Images/Gallery/sports2015/2.jpg" },
      { "url": "/Images/Gallery/sports2015/3.jpg" },
      { "url": "/Images/Gallery/sports2015/4.jpg" },
      { "url": "/Images/Gallery/sports2015/5.jpg" },
      { "url": "/Images/Gallery/sports2015/6.jpg" },

    ]
  },
  "Kudumba Vizha 2018": {
    "coverImage": "/Images/Gallery/kudumba2018/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/kudumba2018/1.jpg" },
      { "url": "/Images/Gallery/kudumba2018/2.jpg" },
      { "url": "/Images/Gallery/kudumba2018/3.jpg" },
      { "url": "/Images/Gallery/kudumba2018/4.jpg" },
      { "url": "/Images/Gallery/kudumba2018/5.jpg" },
      { "url": "/Images/Gallery/kudumba2018/6.jpg" },
      { "url": "/Images/Gallery/kudumba2018/7.jpg" },
      { "url": "/Images/Gallery/kudumba2018/8.jpg" },
      { "url": "/Images/Gallery/kudumba2018/9.jpg" },
      { "url": "/Images/Gallery/kudumba2018/10.jpg" }
    ]
  },
  "Republic Day 2025": {
    "coverImage": "/Images/Gallery/republic2025/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/republic2025/1.jpg" },
      { "url": "/Images/Gallery/republic2025/2.jpg" },
      { "url": "/Images/Gallery/republic2025/3.jpg" },
      { "url": "/Images/Gallery/republic2025/4.jpg" },
      { "url": "/Images/Gallery/republic2025/5.jpg" },
      { "url": "/Images/Gallery/republic2025/6.jpg" },
      { "url": "/Images/Gallery/republic2025/7.jpg" },
      { "url": "/Images/Gallery/republic2025/8.jpg" },
      { "url": "/Images/Gallery/republic2025/9.jpg" },
      { "url": "/Images/Gallery/republic2025/10.jpg" }
    ]
  },
  "Dheeran Chinnamalai Birthday": {
    "coverImage": "/Images/Gallery/birthday/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/birthday/1.jpg" },
      { "url": "/Images/Gallery/birthday/2.jpg" },
      { "url": "/Images/Gallery/birthday/3.jpg" },
      { "url": "/Images/Gallery/birthday/4.jpg" },
      { "url": "/Images/Gallery/birthday/5.jpg" },
      { "url": "/Images/Gallery/birthday/6.jpg" },
      { "url": "/Images/Gallery/birthday/7.jpg" },
      { "url": "/Images/Gallery/birthday/8.jpg" },
      { "url": "/Images/Gallery/birthday/9.jpg" },
      { "url": "/Images/Gallery/birthday/10.jpg" }
    ]
  },
  "Special Meeting 26/11/2017": {
    "coverImage": "/Images/Gallery/meeting2017/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/meeting2017/1.jpg" },
      { "url": "/Images/Gallery/meeting2017/2.jpg" },
      { "url": "/Images/Gallery/meeting2017/3.jpg" },
      { "url": "/Images/Gallery/meeting2017/4.jpg" },
      { "url": "/Images/Gallery/meeting2017/5.jpg" },
      { "url": "/Images/Gallery/meeting2017/6.jpg" },
      { "url": "/Images/Gallery/meeting2017/7.jpg" },
      { "url": "/Images/Gallery/meeting2017/8.jpg" },
      { "url": "/Images/Gallery/meeting2017/9.jpg" },
      { "url": "/Images/Gallery/meeting2017/10.jpg" }
    ]
  },
  "Dheeran Chinnamalai Memorial 2017": {
    "coverImage": "/Images/Gallery/memorial2017/cover.jpg",
    "images": [
      { "url": "/Images/Gallery/memorial2017/1.jpg" },
      { "url": "/Images/Gallery/memorial2017/2.jpg" },
      { "url": "/Images/Gallery/memorial2017/3.jpg" },
      { "url": "/Images/Gallery/memorial2017/4.jpg" },
      { "url": "/Images/Gallery/memorial2017/5.jpg" },
      { "url": "/Images/Gallery/memorial2017/6.jpg" },
      { "url": "/Images/Gallery/memorial2017/7.jpg" },
      { "url": "/Images/Gallery/memorial2017/8.jpg" },
      { "url": "/Images/Gallery/memorial2017/9.jpg" },
      { "url": "/Images/Gallery/memorial2017/10.jpg" }
    ]
  }
};
  const openSection = (section) => {
    setSelectedSection(section);
  };

  const openImage = (sectionId, index) => {
    const section = selectedSection || sectionId;
    setModalImages(galleryData[section].images);
    setInitialIndex(index);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30 pt-20 md:pt-28 pb-12 mt-28">
      {!selectedSection ? (
        // Gallery categories view
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3">Gallery</h1>
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our collection of memories, events, and achievements
            </p>
          </div>

          {/* Categories grid - more columns on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Object.entries(galleryData).map(([section, data]) => (
              <div
                key={section}
                onClick={() => openSection(section)}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-green-100 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                tabIndex="0"
              >
                {/* Card image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={data.coverImage}
                    alt={section}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                
                {/* Card content */}
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-medium text-gray-800 mb-1">{section}</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">{data.images.length} photos</span>
                    <span className="inline-flex items-center text-green-600 text-xs sm:text-sm font-medium">
                      View
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Individual gallery section view
        <GallerySection 
          section={selectedSection}
          images={galleryData[selectedSection].images}
          onImageClick={(index) => openImage(selectedSection, index)}
          onBack={() => setSelectedSection(null)}
        />
      )}

      {/* Image modal */}
      {showModal && (
        <ImageModal
          images={modalImages}
          onClose={() => setShowModal(false)}
          initialIndex={initialIndex}
        />
      )}
    </div>
  );
};

export default GalleryPage;