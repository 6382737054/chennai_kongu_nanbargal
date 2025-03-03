import React from 'react';
import { ArrowRight, BookOpen, Building, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "History & Culture",
      subtitle: "Kongu Community",
      image: "/Images/history_img.png",
      description: "Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways.",
      link: "/history",
      icon: BookOpen
    },
    {
      title: "Services",
      subtitle: "Kongu Services",
      image: "/Images/farm.png",
      description: "Running \"Kongu Nadu Illam\" which is accommodating about 30 girls for a short stay who comes to Chennai for Projects, Special Coaching for C.A., I.A.S, Training...",
      link: "/history",
      icon: Building
    },
    {
      title: "Career Guidance",
      subtitle: "வேலை வாய்ப்புக்கு வழிகாட்டல்",
      image: "/Images/job.png",
      description: "கொங்கு வேளாளர் இளைஞர்களுக்கான வேலை வாய்ப்புக்கு வழிகாட்டல்",
      link: "#career",
      icon: Briefcase
    }
  ];

  return (
<section className="bg-gradient-to-b from-white to-green-50 py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Services</span>
            </h2>
            <div className="h-1 w-24 bg-green-500/30 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving our community through various initiatives aimed at education, 
              culture preservation, and career development
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-green-100 flex flex-col h-full transform hover:-translate-y-1"
                >
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full shadow-md flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hidden title that appears on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block text-white font-medium bg-green-600/90 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={service.link}
                      className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mt-auto group/link"
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Decorative accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;