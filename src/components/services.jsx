import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "History & Culture",
      subtitle: "Kongu Community",
      image: "/Images/history_img.png", // Replace with horse rider image
      description: "Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways.",
      link: "#history"
    },
    {
      title: "Services",
      subtitle: "Kongu Services",
      image: "/Images/farm.png", // Replace with workers image
      description: "Running \"Kongu Nadu Illam\" which is accommodating about 30 girls for a short stay who comes to Chennai for Projects, Special Coaching for C.A., I.A.S, Training...",
      link: "#services"
    },
    {
      title: "Career Guidance",
      subtitle: "வேலை வாய்ப்புக்கு வழிகாட்டல்",
      image: "/Images/job.png", // Replace with career guidance image
      description: "கொங்கு வேளாளர் இளைஞர்களுக்கான வேலை வாய்ப்புக்கு வழிகாட்டல்",
      link: "#career"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(59,130,246,0.1)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.2)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 group-hover:to-blue-900/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title with decorative line */}
                <div className="relative">
                  <h3 className="text-2xl font-light text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-blue-600/30 rounded-full mb-4" />
                </div>

                {/* Subtitle */}
                <h4 className="text-lg font-medium text-blue-800 mb-3">
                  {service.subtitle}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Read More Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  <span className="font-light">More...</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative side border */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/20 via-blue-600/20 to-blue-500/20 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;