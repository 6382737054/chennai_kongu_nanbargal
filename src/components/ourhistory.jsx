import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote, CalendarDays, Users, Building } from 'lucide-react';

const OurHistory = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      title: "கொங்கு நண்பர்கள் சங்கத்தின் வரலாறு - ஓர் எட்டுப்பார்வை",
      quote: "பிறருக்கு ஏதோ ஒரு வகையில் கொடுப்பதற்காக செலவிடப்படாவிட்டால், வாழ்க்கை வாழத்தகுதியானதல்ல",
      section1: "நமது கொங்கு சமூகத்தின் பெரியோர்கள் இதை 1960களில் உணர்ந்து, அனைத்து வழிகளிலும் மற்றவர்களுக்கு உதவும் இந்த சேவை அமைப்பிற்கு அடித்தளம் அமைத்தனர். தொடக்கத்திலிருந்தே, இது பெரும் முன்னேற்றங்களை அடைந்து சேவையின் பல்வேறு வழிகளில் ஈடுபடும் ஒரு புகழ்பெற்ற சமூகமாக வளர்ந்துள்ளது.",
      section2: "1961 ஆம் ஆண்டில், எங்கள் சங்கத்தின் தந்தை திரு. K.M. செண்ணியப்பன் B.A., மகிழ்ச்சியான சந்தர்ப்பங்களிலும் கஷ்ட காலங்களிலும் ஒருவருக்கொருவர் உதவியாக இருக்கும் ஒரு சமூகத்தின் தேவையை உணர்ந்தார். திரு.K.A.சுப்ரமணியம், திரு. C.K. ராமசாமி, திரு. T.P. சடசிவம், திரு. K.A. தேவியப்பன், திரு.C.ஈஸ்வரமூர்த்தி, செயலகத்தில் பணிபுரிந்த திரு. பழனிசாமி ஆகியோருடன் இணைந்து, ஹோட்டல் தர்பார் மற்றும் மெரினா கடற்கரையில் வழக்கமான கூட்டங்களை ஏற்பாடு செய்தார்.",
      section3: "1968 ஆம் ஆண்டில் அருட்செல்வர் N.மகாலிங்கம் பொறுப்பேற்றபோது, உறுப்பினர்களின் எண்ணிக்கை கணிசமாக அதிகரித்திருந்தது மற்றும் உறுப்பினர்கள் குடும்பத்துடன் திரு.K.R.மாரப்பன் நடத்திய நர்சரி பள்ளி மற்றும் ஹோட்டல் வுட்லேண்ட்ஸில் சந்தித்தனர். ஏறக்குறைய ஒரு தசாப்தத்திற்குப் பிறகு, திரு K.பழனியப்பன் & திரு.R.காந்தி சங்கத்தை தலைமை தாங்கிய போது, ஒரு ஸ்டார் நைட் மூலம் நிதி திரட்டப்பட்டது, அப்போதைய செயலாளர் T.K.சுப்ரமணியன் முயற்சியால் கொங்கு நாடு இல்லத்திற்கான இடம் வாங்கப்பட்டது. மாணவர்கள் தலைநகரில் தங்கள் பட்டப்படிப்புகளைத் தொடர தங்குமிடம் வழங்கப்பட்டது. \"செய்திமடல்\" என்ற பெயரில் வெறும் நான்கு பக்கங்களைக் கொண்ட ஒரு செய்திமடல் சுற்றுக்கு வெளியிடப்பட்டது.",
      section4: "1993 – 1996 காலகட்டம் கொங்கு நண்பர்கள் சங்கத்தின் வரலாற்றில் ஒரு திருப்புமுனையாக இருந்தது, திரு.அருணாசலம் மற்றும் திரு. P. தேவராஜன் தலைவர்களாகவும் திரு. K. பாலசுப்ரமணியன் செயலாளராகவும் இருந்தபோது. கொங்கு நாடு இல்லம் ஒரு வருடத்திற்குள் கட்டப்பட்டது, இந்தியாவின் முதல் சுதந்திரப் போராட்ட வீரர் தீரன் சின்னமலையின் சிலை திறக்கப்பட்டது, பல்வேறு துறைகளில் சாதனை புரிந்தவர்களை அங்கீகரிக்க பதினைந்து \"சாதனையாளர் விருது\" நிறுவப்பட்டது மற்றும் 10 மற்றும் 12 ஆம் வகுப்பில் முதல் மூன்று தரவரிசையில் உள்ளவர்களை கௌரவிக்க ஒரு அறக்கட்டளை அமைக்கப்பட்டது.",
      section5: "திரு.K.R.அப்பாவு தலைவராகவும் திரு. K.C.கலியண்ணன் செயலாளராகவும் இருந்த 1997-2000 காலகட்டத்தில் கொங்கு நண்பர்கள் சங்கம் மிகப்பெரிய முன்னேற்றத்தைக் காட்டியது. மாதாந்திர செய்திமடல் திரு.S.K.கருப்பன் உதவியுடன் ஒரு இதழாக மாற்றப்பட்டது. இது கொங்கு சமூகத்தில் பெரும் தாக்கத்தை ஏற்படுத்தி, பல மூத்தவர்களை சங்கத்தின் செயல்பாடுகளில் ஈடுபடுத்தியது. குடும்ப சந்திப்புகள் \"ஆவலுடன் காத்திருந்த\" நிகழ்வுகளாக இருந்தன. வெள்ளி விழா இல்லத்திற்கான இடம் வாங்கப்பட்டு கட்டுமானத்திற்கான திட்டங்கள் வகுக்கப்பட்டன.",
      section6: "திரு. கோவிந்தசாமி மற்றும் திரு. K.C. கலியண்ணன் தலைவர்களாகவும் திரு. E.R. ஈஸ்வரன் செயலாளராகவும் இருந்த 2001 முதல் பெரும் நடவடிக்கைகள் இருந்து வருகின்றன. தங்களுக்கும் நாட்டிற்கும் பெயர் பெற்ற நமது சமூகத்தின் மூத்தவர்களை கௌரவிக்க \"கொங்கு மாமணி\" விருது நிறுவப்பட்டது, \"ஆனந்தமாலை\" மற்றும் \"சந்தோஷமாலை\" கலாச்சார நிகழ்ச்சிகள் மூலம் நிதி திரட்டப்பட்டது மற்றும் வெள்ளி விழா இல்லத்தின் கட்டுமானம் நிறைவடைந்தது. பல மாணவர்கள், தனிநபர்கள் மற்றும் குடும்பங்கள் இரண்டு இல்லங்களிலும் தங்குமிட வசதிகளை அனுபவித்துள்ளனர் மற்றும் இன்றும் அனுபவித்து வருகின்றனர்."
    },
    english: {
      title: "HISTORY OF KONGU NANBARGAL SANGAM - A GLIMPSE",
      quote: "Life is not worth living unless it is spent giving to others in some way",
      section1: "Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways. Right from the start, it has taken huge strides and grown into a reputed society delving into various avenues of service.",
      section2: "In 1961, Thiru. K.M. Chenniappan B.A., Father of our Sangam felt the need for a society wherein, the members would be of help to one another both in joyous occasions and in times of adversity. Along with Thiru.K.A.Subramaniam, Thiru. C.K. Ramaswami, Thiru. T.P. Sadasivam, Thiru. K.A. Deviappan, Thiru.C.Eswarmurthi, Thiru. Palaniswami who worked at the secretariat, he arranged for regular meetings at Hotel Durbar and Marina beach.",
      section3: "When Arutchelvar .N.Mahalingam took over in the year 1968, the membership had increased considerably and the members along with families met at the nursery school run by Thiru.K.R.Marappan and at Hotel Woodlands. After almost a decade, when Thiru K.Palaniappan & Thiru.R.Gandhi headed the sangam, funds were raised through a Star Nite and of course with generous contributions from our families in Chennai & in our native places, the site for Kongu Nadu Illam was purchased by the efforts made by then Secretary T.K.Subramanian. Accommodation was provided for the students to pursue their degree courses in the capital. A newsletter, by the name, \"Seithimadal\" with just four pages was brought out for circulation.",
      section4: "The period from 1993 – 1996 was a turning point in the history of Kongu Nanbargal Sangam, when Thiru.Arunachalam and Thiru. P. Devarajan were presidents and Thiru. K. Balasubramanian was the secretary. Kongu Nadu Illam was constructed within a year's time, the statue of Theeran Chinnamalai, the first freedom fighter of India was unveiled, fifteen \"Sadhanaiyalar Award\" to recognize our people who have achieved honors in various avenues was instituted and an Arakkattalai to honor the first three toppers in the 10th and 12th classes was formed.",
      section5: "Kongu Nanabargal Sangam showed tremendous progress during the period 1997 -2000 when Thiru.K.R.Appavoo was President and Thiru. K.C.Kaliannan was Secretary. The monthly newsletter was converted to a magazine with the help of Thiru.S.K.Karuppan. It had a great impact on the Kongu society bringing about the involvement of many more elders in the activities of the sangam. Family get-togethers were \"anxiously awaited for\" occasions. The site for the Silver Jubilee Illam was purchased & plans were laid for the construction.",
      section6: "There has been a great flurry of activity since 2001, when Thiru. Govindasamy and Thiru. K.C. Kaliannan were presidents & Thiru. E.R. Eswaran was the secretary. The \"Kongu Mamani\" award to honor those elders of our society ho have earned a name for themselves as well the nation was instituted, funds were raised through \"Anandhamaalai\" and \"Sandhoshamaalai\" cultural extravaganzas and the construction of the Silver Jubilee Illam was completed. Many students, individuals and families have enjoyed and even today enjoy the accommodation facilities at both the Illams."
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Timeline data
  const timeline = [
    {
      year: "1961",
      icon: Users,
      title: language === 'tamil' ? "சங்கத்தின் தொடக்கம்" : "Foundation of the Sangam",
      color: "green"
    },
    {
      year: "1968",
      icon: Users,
      title: language === 'tamil' ? "அருட்செல்வர் N.மகாலிங்கம் தலைமை" : "Leadership of N.Mahalingam",
      color: "emerald"
    },
    {
      year: "1980s",
      icon: Building,
      title: language === 'tamil' ? "கொங்கு நாடு இல்லம் தொடக்கம்" : "Kongu Nadu Illam Initiative",
      color: "teal"
    },
    {
      year: "1993-1996",
      icon: CalendarDays,
      title: language === 'tamil' ? "திருப்புமுனை காலம்" : "Turning Point Period",
      color: "cyan"
    },
    {
      year: "1997-2000",
      icon: Building,
      title: language === 'tamil' ? "வளர்ச்சி மற்றும் விரிவாக்கம்" : "Growth and Expansion",
      color: "blue"
    },
    {
      year: "2001-Present",
      icon: Users,
      title: language === 'tamil' ? "தொடர் வளர்ச்சி" : "Continued Development",
      color: "indigo"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Elegant Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          {currentContent.title}
        </h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-0.5 bg-green-300"></div>
          <div className="mx-4 p-2 bg-green-50 rounded-full">
            <Quote className="w-6 h-6 text-green-600" />
          </div>
          <div className="w-16 h-0.5 bg-green-300"></div>
        </div>
        
        <p className="text-lg md:text-xl text-green-800 italic font-light max-w-2xl mx-auto">
          "{currentContent.quote}"
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8 text-gray-700">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {currentContent.section1}
          </p>

          {/* Early Years */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">
              {language === 'tamil' ? "ஆரம்ப ஆண்டுகள் (1961-1968)" : "Early Years (1961-1968)"}
            </h3>
            <p className="leading-relaxed">
              {currentContent.section2}
            </p>
          </div>

          {/* Growth Period */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">
              {language === 'tamil' ? "வளர்ச்சிக் காலம் (1968-1993)" : "Growth Period (1968-1993)"}
            </h3>
            <p className="leading-relaxed">
              {currentContent.section3}
            </p>
          </div>

          {/* Transformation */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">
              {language === 'tamil' ? "மாற்றத்தின் காலம் (1993-1996)" : "Transformation (1993-1996)"}
            </h3>
            <p className="leading-relaxed">
              {currentContent.section4}
            </p>
          </div>

          {/* Modern Era */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium text-green-800 mb-4">
              {language === 'tamil' ? "நவீன காலம் (1997-இன்று)" : "Modern Era (1997-Present)"}
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed">
                {currentContent.section5}
              </p>
              <p className="leading-relaxed">
                {currentContent.section6}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline and Images Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Timeline */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-green-800 mb-6 flex items-center">
              <CalendarDays className="w-5 h-5 mr-2" />
              {language === 'tamil' ? "முக்கிய காலவரிசை" : "Key Timeline"}
            </h3>
            
            <div className="space-y-4">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-8 h-8 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 z-10`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {index !== timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 -mt-2"></div>
                      )}
                    </div>
                    <div className="pt-1 pb-6">
                      <span className="block text-sm font-medium text-gray-500">{item.year}</span>
                      <span className="block text-gray-700">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="space-y-6">
            {/* First Image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="relative aspect-[4/3] group">
                <img
                  src="/Images/VVI.jpg"
                  alt="Historical Gathering"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-medium">
                    {language === 'tamil' ? "வரலாற்று கூட்டம்" : "Historical Gathering"}
                  </h4>
                </div>
              </div>
            </div>

            {/* Second Image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="relative aspect-[4/3] group">
                <img
                  src="/Images/KNI.jpg"
                  alt="Kongu Nadu Illam"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-medium">
                    {language === 'tamil' ? "கொங்கு நாடு இல்லம்" : "Kongu Nadu Illam"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;