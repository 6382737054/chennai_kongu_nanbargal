import React from 'react';

const KonguMamanigal = () => {
  const awardees = [
    {
      year: "2010",
      recipients: [
        {
          name: "Mr. Atlas M. Naachimuthu",
          description: "A man of rare qualities – hardwork, love, exemplary service to the society and country. In 1975, he started a textile Industry. This is one of the leading export industry. Selfless and remarkable service to mankind."
        },
        {
          name: "Mr. K.A. Sengottuvel",
          description: "A great Politician. Meritorious and dedicated service for the farmers. Dedicated and selfless service to the welfare of the people."
        }
      ]
    },
    {
      year: "2009",
      recipients: [
        {
          name: "Dr. V.S. Natarajan",
          description: "A man with a Helping hand for Senior Citizens. Author of many books in his field. Receipient of many awards for his achievements. Known for his spiritual and Social services to the Society."
        },
        {
          name: "Sollar uzhavan Mr. K.sellamuthu",
          description: "Dedicated and selfless service to the welfare, upliftment of farmers. contributed a lot to the welfare of Farmers."
        },
        {
          name: "Badmasree A. Sakthivel",
          description: "Founder of many institutes like NIFT TEA and School. He achieved a many things through his sincerity and hardwork. contributed a lot to NIFT."
        }
      ]
    },
    {
        year: "2008",
        recipients: [
          {
            name: "Auditor Balasubramaniam",
            description: "A great orator, Tamil Scholar and Auditor.Dedicated and selfless service to the welfare, upliftment and unity of kongu society."
          },
          {
            name: "Dr. N.M Veerayan",
            description: "Raised to top positions by his dedicated efforts and hard work. contributed a lot to the welfare ofSociety. Receipient of many titles and awards for his exemplary service to the society and country."
          },
          {
            name: "Mr.P.Sengodan",
            description: "Dedicated and selfless service to the welfare, upliftment and unity of kongu society. He is known for his hardwork, Sincerity and humanity. Selfless and remarkable service to mankind."
          }
        ]
      },
      {
        year: "2007",
        recipients: [
          {
            name: "Pulavar. S. Raasu",
            description: "He is a great Scholar.Founded Dheeran chinnalamai's birth date and memorial date through his research.Receipient of many titles and awards for his research."
          },
          {
            name: "Mr.Best S.Ramasamy",
            description: "Leading exporter of textile in the country.Receipient of many awards for his achievements in textile business and other fields and for his meritorious service to the country."
          },
          {
            name: "Badmasree Dr. K.R. Palanisamy",
            description: "Receipient of many titles and awards for his exemplary service to the society and country. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries."
          }
        ]
      },
      {
        year: "2006",
        recipients: [
          {
            name: "Mr. Nalla Govindasamy",
            description: "Receipient of many awards for his best service and hardwork and other fields and for his meritorious service to the country."
          },
          {
            name: "Sakthimasala Mr. P.C.Duraisamy",
            description: "His products Sakthi masala and sakthi Pickles are famous world wide.Leading exporter of masala in the country.Receipient of many awards for his achievements in business and other fields and for his meritorious service to the country."
          },
          {
            name: "Mr. V.K. Thangavel",
            description: "He is known for his sincerity and hardwork.He played key role in upliftment of textile buisness in Karur.He contributed a lot to the social and spritual services.He is a best example to everone."
          }
        ]
      },
      {
        year: "2005",
        recipients: [
          {
            name: "NSIT Mr. M.Murugesan",
            description: "A man always with helping hand; Receipient of many titles and awards for his exemplary service to the society and country. Selfless and remarkable service to mankind."
          },
          {
            name: "Mr. K.Palaniappan",
            description: "Dedicated and selfless service to the welfare, upliftment and unity of kongu society."
          },
          {
            name: "MR.C.K.Ramasamy",
            description: "Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society."
          }
        ]
      },
      {
        year: "2004",
        recipients: [
          {
            name: "Thiru. B.K. Krishnaraj Vanavarayar.",
            description: "A man of rare qualities – simplicity, hardwork, exemplary service to the society and country; An ambassador of the country in the field of culture; President of various organizations including Bharath Vidhya Bhavan, The country in general and the Kongusociety in particular is very proud of hisachievement and contributions to the mankind."
          },
          {
            name: "Thiru. Silambolin S. Sellappanar",
            description: "A great Tamil Scholar, one of the best orators, a man always with helping hand; worked very hard for the upliftment of hundreds of Kongu persons; Meritorious and dedicated service for Tamil language; contributed a lot for the welfare of Kongu society; Recipient of many awards and titles for his various achievement in the field of Tamil."
          },
          {
            name: "Dr. C. Palanivelu",
            description: "Leading laproscopic surgeon in the country. Receipient of many prestigious awards in the medical field. Author of many books in his field. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries; Has become an expect and authority in the field at a very young age itself."
          }
        ]
      },
      {
        year: "2003",
        recipients: [
          {
            name: "Thiru. D.R. Karthikeyan I.P.S.(Retd.,)",
            description: "Exemplary and Meritorious Service in PoliceDepartment, Dedicated service to the cause of agriculturists in his retired life. Selfless and remarkable service to mankind."
          },
          {
            name: "Thiru. R. Devarajan",
            description: "Dedicated and selfless service to the welfare, upliftment and unity of kongu society"
          },
          {
            name: "Thiru. G.R. Sundaravadivel",
            description: "Meritorious service and an outstandin officer in the Banking Sector: Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society."
          }
        ]
      },
      {
        year: "2002",
        recipients: [
          {
            name: "Thiru.S.V. Balasubramaniam",
            description: "Brought laurels to the society and the country by his outstanding achievements in various fields, Most Prominent and Popular Personality in Kongu Society because of his great contributions to the country and success in various fields."
          },
          {
            name: "Thiru. R. Gandhi",
            description: "A great orator, Tamil Scholar famous senior Advocate, President of various social, Tamil and cultural forums,great fighter for justice, Above all mainly responsible for the growth of Kongu Sangam in Chennai."
          }
          
        ]
      },
      {
        year: "2001",
        recipients: [
          {
            name: "Thiru. K.M. Chenniyappan",
            description: "Former Secretary of Kongu Nanbargal Sangam: Held the post for a long period and was instrumental for the growth of the Association."
          },
          {
            name: "Dr.Palani. G.Periasamy",
            description: "Receipient of many titles and awards for his exemplary service to the society and country."
          },
          {
            name: "Thiru.Gem. R. Veeramani",
            description: "Leading exporter of granites in the country.Receipient of many awards for his achievements in granite business and other fields and for his meritorious service to the country."
          }
        ]
      },
      
      
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light text-green-900 mb-4">
          KONGU MAMANIGAL
        </h2>
        <div className="h-0.5 w-24 bg-green-600/30 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Awards Table */}
      <div className="space-y-12">
        {awardees.map((yearGroup, index) => (
          <div key={index} className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] overflow-hidden">
            {/* Year Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-3">
              <h3 className="text-2xl font-light text-white">{yearGroup.year}</h3>
            </div>

            {/* Recipients */}
            <div className="divide-y divide-gray-100">
              {yearGroup.recipients.map((recipient, rIndex) => (
                <div key={rIndex} className="p-6 hover:bg-green-50/50 transition-colors duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-medium text-green-900">{recipient.name}</h4>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 leading-relaxed">{recipient.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KonguMamanigal;