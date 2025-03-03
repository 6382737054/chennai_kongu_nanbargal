import React, { useState } from 'react';
import { ChevronDown, Award, Trophy, Medal, Calendar } from 'lucide-react';

const Sadhanayalargal = () => {
  const [selectedYear, setSelectedYear] = useState('2009');

  const years = ['2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999'];

  const achievementData = {
    "2009": [
      {
        name: "Kavigar Sakthikanal (K.P. Palanisamy)",
        field: "Outstanding Performance in Literature"
      },
      {
        name: "Mr. R. Nallathambi Gounder",
        field: "Remarkable Village Business"
      },
      {
        name: "Mr. P.M. Karupannan",
        field: "Outstanding Educationalist"
      },
      {
        name: "Mr. R. Perumaalsamy",
        field: "Outstanding Educationalist and Agriculturist"
      },
      {
        name: "Dr. R. Rukhmani",
        field: "Best Professor"
      },
      {
        name: "Dr. P. Selvaraj",
        field: "Service in Medical Field"
      },
      {
        name: "Mr. S. Rajendran",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Mr. P.M. Naachimuthu Gounder",
        field: "Remarkable Social Service"
      },
      {
        name: "Dr. C. Chinnasamy",
        field: "Outstanding Agricultural Scientist"
      },
      {
        name: "Mr. C. Ponnusamy",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. S. Jagathesan",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. Asokan Muthusamy",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. P.V. Kalyana Sundaram",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. Paaya Gounder (a) R. Krishnan",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. V.M. Sivanesan",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. Kuppanoor P. Sivanandham",
        field: "Best Engineer and Remarkable Social Service"
      }
    ],
    "2008": [
      {
        name: "Mr. V.K. Ramasamy",
        field: "Outstanding Agriculturist and Remarkable Social Service"
      },
      {
        name: "Mr. Atlas M. Nachimuthu",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Dr. A. Muruganathan",
        field: "Outstanding Doctor and Remarkable Social Service"
      },
      {
        name: "Mr. N.K.M. Nallasamy",
        field: "Remarkable Social Service"
      },
      {
        name: "Dr. G. Sengottuvelu",
        field: "Outstanding Doctor"
      },
      {
        name: "Dr. V. Murugan",
        field: "Outstanding Professor"
      },
      {
        name: "Mr. N.S. Periasamy",
        field: "Best Government Employee"
      },
      {
        name: "Dr. C. Swaminathan",
        field: "Outstanding Educationalist"
      },
      {
        name: "Dr. C. Kandasamy",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Mr. Kongu Govindasamy",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. R.K. Balakrishnan",
        field: "Remarkable Social Service"
      },
      {
        name: "Mrs. D.M. Thangamani",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. P. Govindasamy",
        field: "Remarkable Social Service"
      },
      {
        name: "Dr. A. Selvi",
        field: "Outstanding Scientist"
      },
      {
        name: "Mr. Er. B. Mohan",
        field: "Young Industrialist"
      },
      {
        name: "Selvi B. Aprajita",
        field: "Sports Champion"
      }
    ],
    "2007": [
      {
        name: "Mr. K. Balasubramanian",
        field: "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: "Mr. R. Tamilmani",
        field: "Outstanding Educationalist"
      },
      {
        name: "Dr. Vimala Ramalingam",
        field: "Outstanding Doctor and Remarkable Social Service"
      },
      {
        name: "Mr. K.K. Velusamy",
        field: "Outstanding Industrialist and Remarkable Oldage Social Service"
      },
      {
        name: "Mr. S.D. Chandrasekar",
        field: "Outstanding Educationalist"
      },
      {
        name: "Mr. P. Muthusamy",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Mr. S. Perumal",
        field: "Outstanding Professor"
      },
      {
        name: "Dr. K.S.K. Velumani",
        field: "Remarkable Social Service"
      },
      {
        name: "Dr. R. Nayanam",
        field: "Outstanding Agricultural Educationalist"
      },
      {
        name: "Mr. M. Sivashanmugam",
        field: "Remarkable City Uplifting Services"
      },
      {
        name: "Mr. E.T. Rajamanikam",
        field: "Remarkable Social Service"
      },
      {
        name: "Mrs. Rukmani Marappan",
        field: "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: "Mr. M. Kumara Gounder",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Dr. Chitra Devi Jagadeesan",
        field: "Outstanding Doctor"
      },
      {
        name: "Mr. A.K.P. Chinraj",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Mr. Visa M. Shanmugam",
        field: "Remarkable Social Service"
      }
    ],
    "2006": [
      {
        name: "Munaivar K. Arangasamy",
        field: "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: "Mr. C. Arumugam",
        field: "Best Engineer and Remarkable Social Service"
      },
      {
        name: "K.K.K. Sugumaran",
        field: "Spiritual and Cultural Services"
      },
      {
        name: "P. Krishnasamy",
        field: "Best Kogu Writer (Sagatya Academy Award)"
      },
      {
        name: "Mr. P. Kandhasamy",
        field: "Environmental and Awareness Services"
      },
      {
        name: "Mr. R. Ramasamy",
        field: "Freedom Fighter"
      },
      {
        name: "Mr. S. Rajesh",
        field: "Software Engineer"
      },
      {
        name: "Professor Mr. S. Gunasekaran",
        field: "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: "Dr. V. Aanadh",
        field: "Outstanding Doctor (ENT)"
      },
      {
        name: "Dr. A.K. Ramasamy",
        field: "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: "Mr. R. Rajkumar",
        field: "Guinness Record"
      },
      {
        name: "Mr. S. Susidheran",
        field: "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: "Mr. N.P. Velu",
        field: "Remarkable Social Service"
      }
    ],
    "2005": [
      {
        name: "Mr. K. Ammaiappan",
        field: "Remarkable Social Service, Karur"
      },
      {
        name: "Thiru. Devatthur N. Nachimuthu",
        field: "Former M.L.A., Outstanding Social Service"
      },
      {
        name: "Mr. N.K. Chinnasamy",
        field: "Outstanding Educationalist, Namakkal"
      },
      {
        name: "Mr. Aranga Duraisamy",
        field: "Remarkable Social Service, Karnataka"
      },
      {
        name: "Chairman R. Natesan",
        field: "Remarkable Social Service, Thiruchengodu"
      },
      {
        name: "Mr. T.P. Chinnasamy",
        field: "Remarkable Social Service, Salem"
      },
      {
        name: "Dr. K.S. Palanisamy",
        field: "Outstanding Educationalist, Erode"
      },
      {
        name: "Professor P. Chinnasamy",
        field: "Remarkable Social Service, Erode"
      },
      {
        name: "Sinthanai Kavigar Kavithasan",
        field: "Best Writer, Coimbatore"
      },
      {
        name: "Dr. P. Yeganathan",
        field: "Scientist, Erode"
      },
      {
        name: "Post P. Muthu",
        field: "Remarkable Social Service, Karur"
      },
      {
        name: "Dr. R. Rajavelu",
        field: "Outstanding Doctor, Thiruchengodu"
      },
      {
        name: "Mr. Ponnusamy Gounder",
        field: "Remarkable Social Service"
      },
      {
        name: "Mr. E. Thangadurai",
        field: "Outstanding Educationalist, Karur"
      },
      {
        name: "Mr. S.K. Subramanium",
        field: "Outstanding Educationalist, Coimbatore"
      },
      {
        name: "Selvi Y. Prabha",
        field: "Chess Champion, Erode"
      }
    ],
    "2004": [
      {
        name: "Dr. M.A. Velusamy",
        field: "Outstanding Engineer and a Great Contributor to Kongu Society Welfare"
      },
      {
        name: "Thiru. Devatthur N. Nachimuthu",
        field: "Former M.L.A., Outstanding Social Service"
      },
      {
        name: "Thiru. V. Eswaramurthy",
        field: "Educationalist, A Tamil Scholar and Authored Many Books on Various Topics"
      },
      {
        name: "Thiru. U.R. Chinnusamy Gounder",
        field: "Outstanding Industrialist and Service to Kongu Society"
      },
      {
        name: "Thiru. M. Kumarasamy",
        field: "Fleet Owner, Educationalist"
      },
      {
        name: "Thiru. Dr. V. Chellappan",
        field: "A Great Contributor to the Welfare of Kongu Society"
      },
      {
        name: "Thiru. T.S. Palanivelu",
        field: "An Outstanding Teacher and A Great Contributor to the Welfare of Kongu Society"
      },
      {
        name: "Thiru. T.K. Subramanian",
        field: "Selfless and Dedicated Service to the Welfare of Kongu Society"
      },
      {
        name: "Thiru. S.P. Gopalakrishnan",
        field: "Selfless Service to Mankind"
      },
      {
        name: "Thiru. A. Ramasamy",
        field: "Outstanding Educationalist, SRV School"
      },
      {
        name: "Thiru. K.G. Pragatheeskumar",
        field: "An Outstanding Agriculturist"
      },
      {
        name: "Dr. S. Dhanabakkiyam",
        field: "Recipient of Many Awards in the Field of Maternity"
      },
      {
        name: "Dr. M.N. Ponnusamy",
        field: "An Outstanding Professor"
      },
      {
        name: "Thiru. A.P. Kandasamy",
        field: "A Tamil Scholar, An Outstanding Agriculturist and Service to Kongu Society"
      },
      {
        name: "Dr. C. Rayappa",
        field: "An Outstanding ENT Specialist and Service to Mankind"
      }
    ],
    "2003": [
      {
        name: "Thiru. Nalla Govindasamy",
        field: "Outstanding Service to Society"
      },
      {
        name: "Thiru. K. Nalliyappan",
        field: "Outstanding Industrialist"
      },
      {
        name: "Thiru. J.P. Leo Ganesh",
        field: "Outstanding Service to Society"
      },
      {
        name: "Thiru. \"Thangamani\" P.M. Palanisamy Gounder",
        field: "Outstanding Social Service"
      },
      {
        name: "Dr. K.V. Kaliyappan",
        field: "Outstanding Professor/Research Scholar"
      },
      {
        name: "Dr. R. Balasubramanian",
        field: "Outstanding Professor"
      },
      {
        name: "Dr. K.R. Palanisamy",
        field: "Outstanding Doctor"
      },
      {
        name: "Thiru. S. Nallasamy",
        field: "Outstanding Agriculturist"
      },
      {
        name: "Thiru. M. Sivapragasam",
        field: "Recipient of National Award for Outstanding Teacher"
      },
      {
        name: "Thiru. R. Sainathan",
        field: "Outstanding Social Service"
      },
      {
        name: "Thiru. S. Jayavelan",
        field: "Outstanding Service for Society Welfare"
      },
      {
        name: "Thiru. K. Sivalingam",
        field: "Outstanding Educational Service"
      },
      {
        name: "Thiru. K. Sakthivel",
        field: "Outstanding Educational Service"
      },
      {
        name: "Thiru. K. Natarajan",
        field: "Outstanding Educational Service"
      },
      {
        name: "Thiru. V. Anbazhagan",
        field: "Outstanding Industrialist"
      },
      {
        name: "Thiru. V. Sundaresan",
        field: "Outstanding Industrialist"
      },
      {
        name: "Tmt. Dr. Uma Selvaraj",
        field: "Outstanding Social Service"
      },
      {
        name: "Tmt. Dr. R. Shanthi",
        field: "Outstanding Geologist and Agricultural Scientist"
      }
    ],
    "2002": [
      {
        name: "Tmt. Bharathi Sengottuvel",
        field: "Outstanding Architect"
      },
      {
        name: "Thiru. K. Chellamuthu",
        field: "Remarkable Service in Agriculturists Welfare"
      },
      {
        name: "Arima. Thiru. K. Dhanabalan",
        field: "Outstanding Social Service"
      },
      {
        name: "Thiru. R. Ganesan",
        field: "Outstanding Young Industrialist"
      },
      {
        name: "Thiru. K. Krishnamurthy",
        field: "Outstanding Teacher"
      },
      {
        name: "Dr. S. Muthu",
        field: "Service in the Field of Technical Education"
      },
      {
        name: "Thiru. K.P. Natarajan",
        field: "Outstanding Service in Transport Business"
      },
      {
        name: "Thiru. P.C. Palanisamy",
        field: "Outstanding Advocate"
      },
      {
        name: "Thiru. S. Premdurai",
        field: "Outstanding Exporter and Industrialist"
      },
      {
        name: "Thiru. M. Ramasamy",
        field: "Service in Agricultural Field"
      },
      {
        name: "Dr. K. Shanmuga Sundaram",
        field: "Service in Medical Field"
      },
      {
        name: "Dr. R. Vadivelan",
        field: "Service to Tamil Literature Development"
      },
      {
        name: "Thiru. S. Varadarajan",
        field: "Outstanding Scientist"
      },
      {
        name: "Tmt. C. Vijayalakshmi",
        field: "Outstanding Service in Educational Field"
      }
    ],
    "2001": [
      {
        name: "Thiru. S.K. Sengoda Gounder",
        field: "Outstanding Industrialist"
      },
      {
        name: "Thiru. K. Ponnusamy",
        field: "Outstanding Industrialist"
      },
      {
        name: "Thiru. K. Arangasamy",
        field: "Outstanding Research Scholar"
      },
      {
        name: "Thiru. K.R. Appavoo",
        field: "Outstanding Industrialist"
      },
      {
        name: "Dr. S. Ashokan",
        field: "Outstanding Doctor"
      },
      {
        name: "Dr. M. Kandasamy",
        field: "Outstanding Educationalist"
      },
      {
        name: "Thiru. R. Selvaraj",
        field: "Outstanding Young Industrialist"
      },
      {
        name: "Thiru. R. Rajendran",
        field: "Remarkable Social Service"
      },
      {
        name: "Selvi. Kanchi Kailasam",
        field: "Young Swimming Champion"
      }
    ],
    "2000": [
      {
        name: "Thiru. Sampath Kumar",
        field: "Cricket Player"
      },
      {
        name: "Thiru. S. Nagalsamy",
        field: "I.A.S. Officer"
      },
      {
        name: "Selvi. Jayanthi",
        field: "Agricultural University"
      },
      {
        name: "Thiru. Kannaiyan",
        field: "H.H.E."
      },
      {
        name: "Dr. Mani",
        field: "Outstanding Doctor"
      },
      {
        name: "Thiru. K. Palanisamy",
        field: "Outstanding Industrial Management, Kavincare"
      },
      {
        name: "Thiru. Karuppan",
        field: "Outstanding Teacher"
      },
      {
        name: "Thiru. K.K. Somasundaram",
        field: "I.F.S. Officer"
      },
      {
        name: "Thiru. Kaliappan",
        field: "Achievement in Transport Business - Thenpandian Transport"
      },
      {
        name: "Thiru. Gnanasekaran",
        field: "M.L.A."
      },
      {
        name: "Thiru. Shanmugam",
        field: "Shanthi Electricals"
      },
      {
        name: "Thiru. Kasi",
        field: "Young Industrialist"
      },
      {
        name: "Dr. Balasubramaniyam",
        field: "Uma Clinic"
      },
      {
        name: "Thiru. Muthuraja",
        field: "G.T.P. Marbles"
      },
      {
        name: "Thiru. Gopal",
        field: "Achievement in His Field"
      }
    ],
    "1999": [
      {
        name: "Thiru. K. Kandasamy",
        field: "Exemplary Service in Educational Field"
      },
      {
        name: "Dr. C. Namachivayam",
        field: "Exemplary Service in Educational Field"
      },
      {
        name: "Dr. A.M. Sachithanandam",
        field: "Exemplary Service in Educational Field"
      },
      {
        name: "Dr. G. Kumaravelu",
        field: "Outstanding I.F.S. Officer of Tamil Nadu Government"
      },
      {
        name: "Thiru. K.R. Mani",
        field: "Outstanding Exporter"
      },
      {
        name: "Thiru. S.V. Kumaraguruparasamy",
        field: "Outstanding Exporter"
      },
      {
        name: "Dr. Raj Gounder",
        field: "Expert in Computer Research"
      },
      {
        name: "Thiru. Ponvannan",
        field: "Contribution to Film World"
      },
      {
        name: "Thiru. C. Muthusamy",
        field: "Outstanding Service to Society"
      },
      {
        name: "Thiru. A. Eswaran",
        field: "Exemplary Service in Educational Field"
      },
      {
        name: "Dr. V. Ramasamy",
        field: "Outstanding Service as a Doctor in Medical Field"
      },
      {
        name: "Thiru. V. Paramasivam",
        field: "Outstanding Exporter"
      },
      {
        name: "Thiru. A.K. Venkitasamy",
        field: "Outstanding Industrialist"
      },
      {
        name: "Selvi. Vinodhini Vasudevan",
        field: "Achievement in Education"
      }
    ],
  };

  return (
    <div className="w-full px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center mb-4">
          <Trophy className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Sadhanayalargal
          </h2>
        </div>
        <div className="h-1 w-16 sm:w-24 bg-green-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Honoring excellence and outstanding contributions by members of our community in various fields
        </p>
      </div>

      {/* Year Selection Tabs - Desktop */}
      <div className="hidden md:block mb-8 overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-200'
              }`}
            >
              <div className="flex items-center">
                <Calendar className={`w-3.5 h-3.5 mr-1.5 ${selectedYear === year ? 'text-white' : 'text-green-600'}`} />
                {year}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Year Selection - Mobile */}
      <div className="md:hidden mb-8">
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none w-full p-3 pl-10 pr-10 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Calendar className="w-4 h-4 text-green-600" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {achievementData[selectedYear]?.map((achievement, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-200 overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-green-50 to-white p-4 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-medium text-gray-800 line-clamp-2">
                    {achievement.name}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <div className="w-8 h-8 rounded-full bg-green-100/70 flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card Body */}
            <div className="p-4">
              <div className="flex items-start">
                <Medal className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  {achievement.field}
                </p>
              </div>
            </div>
            
            {/* Card Footer */}
            <div className="px-4 py-2 bg-gradient-to-r from-white to-green-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-600 font-medium">Award Recipient</span>
                <span className="text-xs text-gray-500">{selectedYear}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Year Navigation Buttons - Mobile */}
      <div className="flex justify-center mt-8 md:hidden">
        <div className="flex space-x-4">
          <button
            onClick={() => {
              const currentIndex = years.indexOf(selectedYear);
              if (currentIndex > 0) {
                setSelectedYear(years[currentIndex - 1]);
              }
            }}
            disabled={years.indexOf(selectedYear) === 0}
            className={`px-4 py-2 rounded-md flex items-center ${
              years.indexOf(selectedYear) === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-green-50'
            }`}
          >
            <ChevronDown className="w-4 h-4 mr-1 transform rotate-90" />
            Previous
          </button>
          <button
            onClick={() => {
              const currentIndex = years.indexOf(selectedYear);
              if (currentIndex < years.length - 1) {
                setSelectedYear(years[currentIndex + 1]);
              }
            }}
            disabled={years.indexOf(selectedYear) === years.length - 1}
            className={`px-4 py-2 rounded-md flex items-center ${
              years.indexOf(selectedYear) === years.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-green-50'
            }`}
          >
            Next
            <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sadhanayalargal;