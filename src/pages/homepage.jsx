import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "/Images/hero1.png",
    "/Images/hero2.png",
    "/Images/hero3.png",
  ];

  // Advertisement data
  const advertisements = [
    {
      id: 1,
      image: "/Images/annualissues_1.gif",
      link: "/magazine",
      alt: "Advertisement Banner 1"
    },
    {
      id: 2,
      image: "/Images/add_3.png",
      link: "https://kongunanbargalsangam.org/pdf/Part%201.pdf",
      alt: "Advertisement Banner 2"
    },
    {
      id: 3,
      image: "/Images/monthlyissue_1.gif",
      link: "/magazine",
      alt: "Advertisement Banner 3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-14">
      {/* Welcome Section */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-6">Welcome to Kongu Nanbargal Sangam...</h1>
          <p className="mb-4">
            Thiru. K.K.Ramesh has been unanimously elected president for this term & the sangam has been connected to the World Wide Web so that people all over the world can take advantage of the information provided through this website.
          </p>
          <p className="mb-4">
            The word, <strong>"KONGU NANBARGAL"</strong> implies Kind, Outgoing, Noble, Good-natured, Unbeatable friends and Kongu Nanbargal Sangam takes pride in asserting that it is a society of almost 4200 such members.
          </p>
          <p className="mb-6">
            The motive is to promote friendship and brotherhood, offer educational and career guidance to the youth, provide matrimonial assistance, render service to the needy and work for the improvement of the society at large.
          </p>
          <Link to="/history">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden w-[70%] h-[400px] mx-auto mb-8">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide(prev => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 overflow-hidden">

                <img 
                  src="/Images/history_img.png" 
                  alt="History & Culture" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">History & Culture</h3>
                <p className="text-gray-600 text-sm leading-relaxed h-24">
                  Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization.
                </p>
                <Link to="/history">
                <button className="mt-4 w-full bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium text-sm">
                  Read More →
                </button>
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="/Images/farm.png" 
                  alt="History & Culture" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Kongu Services</h3>
                <p className="text-gray-600 text-sm leading-relaxed h-24">
                  Running "Kongu Nadu Illam" accommodating girls for short stay who comes to Chennai for Projects, Special Coaching.
                </p>
                <Link to="/activities">
                <button className="mt-4 w-full bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium text-sm">
                  Read More →
                
                </button>
                </Link>
                
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="/Images/job.png" 
                  alt="History & Culture" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Career Guidance</h3>
                <p className="text-gray-600 text-sm leading-relaxed h-24">
                  Providing guidance and coaching for various competitive exams and career opportunities, helping youth achieve goals.
                </p>
                <button className="mt-4 w-full bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Quick Visits</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advertisements.map((ad) => (
              <a
                key={ad.id}
                href={ad.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48">
                    <img 
                      src={ad.image}
                      alt={ad.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;