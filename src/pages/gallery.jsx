import React, { useState } from 'react';
import { X, ChevronLeft } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 h-screen" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90" />
      <div className="absolute right-4 top-4">
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="h-screen flex items-center justify-center p-4">
        <img 
          src={imageSrc} 
          alt="Gallery" 
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const CategoryView = ({ category, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-center mb-12 relative px-4 sm:px-0">
        <button 
          onClick={onBack}
          className="absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 flex items-center text-gray-600 hover:text-green-600 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 mr-2" />
          <span className="text-lg">Back</span>
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{category.title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-0">
        {category.images.map((image, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedImage(image)}
            className="group cursor-pointer"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={image} 
                alt={category.title}
                className="w-full h-full object-cover transform transition-transform duration-500 
                  group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage}
      />
    </div>
  );
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Annual Day Celebration",
      thumbnail: "/Images/gallery/annual-day/thumb.jpg",
      images: [
        "/Images/gallery/annual-day/1.jpg",
        "/Images/gallery/annual-day/2.jpg",
        "/Images/gallery/annual-day/3.jpg",
        "/Images/gallery/annual-day/4.jpg",
        "/Images/gallery/annual-day/5.jpg",
        "/Images/gallery/annual-day/6.jpg"
      ]
    },
    {
        id: 2,
        title: "Annual  Celebration",
        thumbnail: "/Images/gallery/annual-day/thumb.jpg",
        images: [
          "/Images/gallery/annual-day/1.jpg",
          "/Images/gallery/annual-day/2.jpg",
          "/Images/gallery/annual-day/3.jpg",
          "/Images/gallery/annual-day/4.jpg",
          "/Images/gallery/annual-day/5.jpg",
          "/Images/gallery/annual-day/6.jpg"
        ]
      },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {!selectedCategory ? (
          <>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Our Gallery</h1>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-lg 
                    group-hover:shadow-xl transition-all duration-300">
                    <div className="relative h-full">
                      <img 
                        src={category.thumbnail} 
                        alt={category.title}
                        className="w-full h-full object-cover transform transition-transform 
                          duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                        transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider px-4 text-center">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <CategoryView 
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;