import React from 'react';
import { ArrowRight, BookOpen, Building, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const EnhancedServicesSection = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      sectionTitle: "எங்கள் சேவைகள்",
      sectionSubtitle: "கல்வி, கலாச்சார பாதுகாப்பு மற்றும் தொழில் முன்னேற்றம் நோக்கிய பல்வேறு முயற்சிகள் மூலம் எங்கள் சமூகத்திற்கு சேவை செய்தல்",
      learnMore: "மேலும் அறிய",
      services: [
        {
          title: "வரலாறு & கலாச்சாரம்",
          subtitle: "கொங்கு சமூகம்",
          image: "/Images/history_img.png",
          description: "1960களில் நமது கொங்கு சமூகத்தின் பெரியோர்கள் இதை உணர்ந்து, அனைத்து வழிகளிலும் மற்றவர்களுக்கு உதவும் இந்த சேவை அமைப்பிற்கு அடித்தளம் அமைத்தனர்.",
          link: "/history",
          icon: BookOpen
        },
        {
          title: "சேவைகள்",
          subtitle: "கொங்கு சேவைகள்",
          image: "/Images/farm.png",
          description: "செயல்பாட்டில் உள்ள 'கொங்கு நாடு இல்லம்' சென்னைக்கு திட்டப்பணிகள், CA, IAS பயிற்சிக்காக வரும் சுமார் 30 பெண்களுக்கு தங்குமிடம் வழங்குகிறது.",
          link: "/history",
          icon: Building
        },
        {
          title: "தொழில் வழிகாட்டல்",
          subtitle: "வேலை வாய்ப்புக்கு வழிகாட்டல்",
          image: "/Images/job.png",
          description: "கொங்கு வேளாளர் இளைஞர்களுக்கான வேலை வாய்ப்புக்கு வழிகாட்டல் மற்றும் தொழில் மேம்பாட்டு திட்டங்கள்",
          link: "#career",
          icon: Briefcase
        }
      ]
    },
    english: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Serving our community through various initiatives aimed at education, culture preservation, and career development",
      learnMore: "Learn More",
      services: [
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
          subtitle: "Employment Assistance",
          image: "/Images/job.png",
          description: "Providing career guidance and employment assistance for Kongu Vellalar youth through mentorship and professional development programs.",
          link: "#career",
          icon: Briefcase
        }
      ]
    }
  };

  // Get content based on current language
  const currentContent = content[language];

  return (
    <section className="py-20 relative overflow-hidden">
{/* Enhanced Background with More Visible Gradients */}
<div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-100/60"></div>

{/* Darker Subtle Background Elements */}
<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-200/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-green-200/40 to-transparent"></div>

{/* More Visible Decorative Elements */}
<div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-green-200/30 blur-3xl"></div>
<div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-green-200/30 blur-3xl"></div>

{/* Slightly More Visible Decorative Patterns */}
<div className="absolute top-1/3 left-10 w-32 h-32 rounded-full border border-green-300/30 hidden lg:block"></div>
<div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full border border-green-300/30 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header with Enhanced Design */}
        <div className="relative max-w-3xl mx-auto text-center mb-20">
          <h2 className="relative inline-block text-4xl font-bold mb-8 text-gray-800">
            {currentContent.sectionTitle}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></div>
          </h2>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {currentContent.sectionSubtitle}
          </p>
        </div>

        {/* Enhanced Services Display (without overlays on images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {currentContent.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative transform transition-all duration-300 hover:-translate-y-2">
                {/* Enhanced Card with hover effects but clean design */}
                <div className="h-full bg-white rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Image Container without colored overlay */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Background Image with subtle animation */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Light shadow overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    
                    {/* Clean Icon Design */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    
                    {/* Title Overlay with clean design */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block text-white text-sm font-medium bg-green-600/90 px-3 py-1 rounded-full mb-2">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content Container with white background */}
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    {/* Description with improved typography */}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Action Link */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-green-600 font-medium group/link mt-auto"
                    >
                      <span>{currentContent.learnMore}</span>
                      <span className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center ml-2 transform transition-all duration-300 group-hover/link:translate-x-1">
                        <ArrowRight size={15} className="text-green-600" />
                      </span>
                    </Link>
                  </div>
                </div>
                
                {/* Subtle Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Added Community Connection Element with clean design */}
        <div className="mt-10 pt-8 border-t border-green-100">
          <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-sm border border-green-100/50">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md mr-5">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{language === 'tamil' ? 'சமூகத்துடன் இணையுங்கள்' : 'Connect With The Community'}</h4>
                  <p className="text-gray-600">{language === 'tamil' ? 'எங்கள் சமூகத்தின் நடவடிக்கைகளில் பங்கேற்கவும்' : 'Participate in our community activities and events'}</p>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
              >
                {language === 'tamil' ? 'இப்போது தொடர்பு கொள்ளவும்' : 'Contact Us Now'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;