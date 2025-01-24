import React, { useState,useEffect } from 'react';

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState('History');
  const [currentAd, setCurrentAd] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentAd(prev => (prev === 3 ? 0 : prev + 1)); // Changed from 4 to 3 since array length is 4
  }, 3000);
  return () => clearInterval(timer);
}, []);
  const renderHistory = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12 space-y-8">
      <p className="text-gray-700 leading-relaxed">
        Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways. Right from the start, it has taken huge strides and grown into a reputed society delving into various avenues of service.
      </p>

      <div className="w-full h-96 my-12">
        <img 
          src="/Images/his1.png" 
          alt="Early Days of Kongu Nanbargal Sangam" 
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        In 1961, Thiru. K.M. Chenniappan B.A., Father of our Sangam felt the need for a society wherein, the members would be of help to one another both in joyous occasions and in times of adversity. Along with Thiru.K.A.Subramaniam, Thiru. C.K. Ramaswami, Thiru. T.P. Sadasivam, Thiru. K.A. Deviappan, Thiru.C.Eswarmurthi, Thiru. Palaniswami who worked at the secretariat, he arranged for regular meetings at Hotel Durbar and Marina beach.
      </p>

      <p className="text-gray-700 leading-relaxed">
        When Arutchelvar .N.Mahalingam took over in the year 1968, the membership had increased considerably and the members along with families met at the nursery school run by Thiru.K.R.Marappan and at Hotel Woodlands. After almost a decade, when Thiru K.Palaniappan & Thiru.R.Gandhi headed the sangam, funds were raised through a Star Nite and of course with generous contributions from our families in Chennai & in our native places, the site for Kongu Nadu Illam was purchased by the efforts made by then Secretary T.K.Subramanian. Accommodation was provided for the students to pursue their degree courses in the capital. A newsletter, by the name, "Seithimadal" with just four pages was brought out for circulation.
      </p>

      <div className="w-full h-96 my-12">
        <img 
          src="/Images/his2.png" 
          alt="Growth Years of Sangam" 
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        The period from 1993 – 1996 was a turning point in the history of Kongu Nanbargal Sangam, when Thiru.Arunachalam and Thiru. P. Devarajan were presidents and Thiru. K. Balasubramanian was the secretary. Kongu Nadu Illam was constructed within a year's time, the statue of Theeran Chinnamalai, the first freedom fighter of India was unveiled, fifteen "Sadhanaiyalar Award" to recognize our people who have achieved honors in various avenues was instituted and an Arakkattalai to honor the first three toppers in the 10th and 12th classes was formed.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Kongu Nanabargal Sangam showed tremendous progress during the period 1997 -2000 when Thiru.K.R.Appavoo was President and Thiru. K.C.Kaliannan was Secretary. The monthly newsletter was converted to a magazine with the help of Thiru.S.K.Karuppan. It had a great impact on the Kongu society bringing about the involvement of many more elders in the activities of the sangam. Family get-togethers were "anxiously awaited for" occasions. The site for the Silver Jubilee Illam was purchased & plans were laid for the construction.
      </p>

      <div className="w-full h-96 my-12">
        <img 
          src="/Images/his3.png" 
          alt="Modern Era of Sangam" 
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        There has been a great flurry of activity since 2001, when Thiru. Govindasamy and Thiru. K.C. Kaliannan were presidents & Thiru. E.R. Eswaran was the secretary. The "Kongu Mamani" award to honor those elders of our society ho have earned a name for themselves as well the nation was instituted, funds were raised through "Anandhamaalai" and "Sandhoshamaalai" cultural extravaganzas and the construction of the Silver Jubilee Illam was completed. Many students, individuals and families have enjoyed and even today enjoy the accommodation facilities at both the Illams.
      </p>
    </div>
  );

  const renderKonguMamanigal = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12 space-y-12">
      {/* 2010 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2010</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. Atlas. M. Naachimuthu</h4>
            <p className="text-gray-700">A man of rare qualities – hardwork, love, exemplary service to the society and country. In 1975, he started a textile Industry. This is one of the leading export industry. Selfless and remarkable service to mankind.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. K.A. sengottuvel</h4>
            <p className="text-gray-700">A great Politician. Meritorious and dedicated service for the farmers. Dedicated and selfless service to the welfare of the people.</p>
          </div>
        </div>
      </div>
  
      {/* 2009 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2009</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Dr. V.S. Natarajan</h4>
            <p className="text-gray-700">A man with a Helping hand for Senior Citizens. Author of many books in his field. Receipient of many awards for his achievements. Known for his spiritual and Social services to the Society.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Sollar uzhavan Mr. K.sellamuthu</h4>
            <p className="text-gray-700">Dedicated and selfless service to the welfare, upliftment of farmers. contributed a lot to the welfare of Farmers.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Badmasree A. Sakthivel</h4>
            <p className="text-gray-700">Founder of many institutes like NIFT TEA and School. He achieved a many things through his sincerity and hardwork. contributed a lot to NIFT.</p>
          </div>
        </div>
      </div>
  
      {/* Continue pattern for remaining years */}
      {/* 2008 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2008</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Aditor M.Balasubramanium</h4>
            <p className="text-gray-700">A great orator, Tamil Scholar and Auditor. Dedicated and selfless service to the welfare, upliftment and unity of kongu society.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Dr. N.M Veerayan</h4>
            <p className="text-gray-700">Raised to top positions by his dedicated efforts and hard work. contributed a lot to the welfare ofSociety. Receipient of many titles and awards for his exemplary service to the society and country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. P.Sengodan</h4>
            <p className="text-gray-700">Dedicated and selfless service to the welfare, upliftment and unity of kongu society. He is known for his hardwork, Sincerity and humanity. Selfless and remarkable service to mankind.</p>
          </div>
        </div>
      </div>
  
      {/* Add all remaining years following same pattern... */}
      {/* 2007 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2007</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Pulavar. S. Raasu</h4>
            <p className="text-gray-700">He is a great Scholar. Founded Dheeran chinnalamai's birth date and memorial date through his research. Receipient of many titles and awards for his research.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. Best S.Ramasamy</h4>
            <p className="text-gray-700">Leading exporter of textile in the country. Receipient of many awards for his achievements in textile business and other fields and for his meritorious service to the country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Badmasree Dr. K.R. Palanisamy</h4>
            <p className="text-gray-700">Receipient of many titles and awards for his exemplary service to the society and country. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries.</p>
          </div>
        </div>
      </div>
  
      {/* 2006 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2006</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. Nalla Govindasamy</h4>
            <p className="text-gray-700">Receipient of many awards for his best service and hardwork and other fields and for his meritorious service to the country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Sakthimasala Mr. P.C.Duraisamy</h4>
            <p className="text-gray-700">His products Sakthi masala and sakthi Pickles are famous world wide. Leading exporter of masala in the country. Receipient of many awards for his achievements in business and other fields and for his meritorious service to the country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. V.K. Thangavel</h4>
            <p className="text-gray-700">He is known for his sincerity and hardwork. He played key role in upliftment of textile buisness in Karur. He contributed a lot to the social and spritual services. He is a best example to everone.</p>
          </div>
        </div>
      </div>
  
      {/* Continue pattern for all remaining years... */}
      {/* 2005, 2004, 2003, 2002, 2001 */}
      {/* 2005 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2005</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">NSIT Mr. M.Murugesan</h4>
            <p className="text-gray-700">A man always with helping hand; Receipient of many titles and awards for his exemplary service to the society and country. Selfless and remarkable service to mankind.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Mr. K.Palaniappan</h4>
            <p className="text-gray-700">Dedicated and selfless service to the welfare, upliftment and unity of kongu society.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">MR.C.K.Ramasamy</h4>
            <p className="text-gray-700">Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society.</p>
          </div>
        </div>
      </div>
  
      {/* 2004 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2004</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. B.K. Krishnaraj Vanavarayar</h4>
            <p className="text-gray-700">A man of rare qualities – simplicity, hardwork, exemplary service to the society and country; An ambassador of the country in the field of culture; President of various organizations including Bharath Vidhya Bhavan, The country in general and the Kongusociety in particular is very proud of hisachievement and contributions to the mankind.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. Silamboli S. Sellappanar</h4>
            <p className="text-gray-700">A great Tamil Scholar, one of the best orators, a man always with helping hand; worked very hard for the upliftment of hundreds of Kongu persons; Meritorious and dedicated service for Tamil language; contributed a lot for the welfare of Kongu society; Recipient of many awards and titles for his various achievement in the field of Tamil.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Dr. C. Palanivelu</h4>
            <p className="text-gray-700">Leading laproscopic surgeon in the country. Receipient of many prestigious awards in the medical field. Author of many books in his field. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries; Has become an expect and authority in the field at a very young age itself.</p>
          </div>
        </div>
      </div>
  
      {/* 2003 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2003</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. D.R. Karthikeyan I.P.S.(Retd.,)</h4>
            <p className="text-gray-700">Exemplary and Meritorious Service in PoliceDepartment, Dedicated service to the cause of agriculturists in his retired life. Selfless and remarkable service to mankind.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. R. Devarajan</h4>
            <p className="text-gray-700">Dedicated and selfless service to the welfare, upliftment and unity of kongu society</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. G.R. Sundaravadivel</h4>
            <p className="text-gray-700">Meritorious service and an outstandin officer in the Banking Sector: Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society.</p>
          </div>
        </div>
      </div>
  
      {/* 2002 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2002</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. S.V. Balasubramaniam</h4>
            <p className="text-gray-700">Brought laurels to the society and the country by his outstanding achievements in various fields, Most Prominent and Popular Personality in Kongu Society because of his great contributions to the country and success in various fields.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. R. Gandhi</h4>
            <p className="text-gray-700">A great orator, Tamil Scholar famous senior Advocate, President of various social, Tamil and cultural forums, great fighter for justice, Above all mainly responsible for the growth of Kongu Sangam in Chennai.</p>
          </div>
        </div>
      </div>
  
      {/* 2001 */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">2001</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru. K.M. Chenniyappan</h4>
            <p className="text-gray-700">Former Secretary of Kongu Nanbargal Sangam: Held the post for a long period and was instrumental for the growth of the Association.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Dr.Palani. G.Periasamy</h4>
            <p className="text-gray-700">Receipient of many titles and awards for his exemplary service to the society and country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Thiru.Gem. R. Veeramani</h4>
            <p className="text-gray-700">Leading exporter of granites in the country. Receipient of many awards for his achievements in granite business and other fields and for his meritorious service to the country.</p>
          </div>
        </div>
      </div>
    </div>
  );
  const renderSadhanayalargal = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12 overflow-x-auto">
      {[2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999].map(year => (
        <div key={year} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{year}</h3>
          <div className="min-w-full">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 border-b">Achievement</th>
                </tr>
              </thead>
              <tbody>
                {getRecordsForYear(year).map((record, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b text-green-600 font-medium">{record.name}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{record.achievement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
  
  // Helper function to get records for a specific year
  const getRecordsForYear = (year) => {
    const data = {
      2009: [
        { name: "Kavigar Sakthikanal (K.P. Palanisamy)", achievement: "Outstanding Performance in Literature" },
        { name: "Mr. R. Nallathambi Gounder", achievement: "Remarkable Village Buisness" },
        { name: "Mr. P.M.Karupannan", achievement: "Outstanding Educationalist" },
        { name: "Mr. R.Perumaalsamy", achievement: "Outstanding Educationalist and Agriculturist" },
        { name: "Dr. R. Rukhmani", achievement: "Best Professor" },
        { name: "Dr. P. Selvaraj", achievement: "Service in Medical Field" },
        { name: "Mr. S. Rajendran", achievement: "Outstanding Industrialist and Remarkable Social Service" },
        { name: "Mr. P.M.Naachimuthu Gounder", achievement: "Remarkable Social Service" },
        { name: "Dr. C.Chinnasamy", achievement: "Outstanding Agricultural Scientist" },
        { name: "Mr. C.Ponnusamy", achievement: "Remarkable Social Service" },
        { name: "Mr.S. Jagathesan", achievement: "Remarkable Social Service" },
        { name: "Mr. Asokan Muthusamy", achievement: "Remarkable Social Service" },
        { name: "Mr. P.V.Kalyana Sundaram", achievement: "Remarkable Social Service" },
        { name: "Mr. Paaya Gounder(a) R. Krishnan", achievement: "Remarkable Social Service" },
        { name: "MR. V.M. Sivanesan", achievement: "Remarkable Social Service" },
        { name: "Mr. Kuppanoor P.Sivanandham", achievement: "Best Engineer and remarkable Social Service" }
      ],
      2008: [
        { name: "Mr. V.K Ramasamy", achievement: "Outstanding Agriculturist and remarkable Social Service" },
        { name: "Mr. Atlas M.Nachimuthu", achievement: "Outstanding Industrialist and remarkable Social Service" },
        { name: "Mr. Dr. A.Muruganathan", achievement: "Outstanding Doctor and Remarkable Social Service" },
        { name: "Mr. N.K.M. Nallasamy", achievement: "Remarkable Social Service" },
        { name: "Mr. Dr. G.Sengottuvelu", achievement: "Outstanding Doctor" },
        { name: "Mr. Dr. V. Murugan", achievement: "Outstanding Professor" },
        { name: "Mr. N.S. Periasamy", achievement: "Best Government Employee" },
        { name: "Dr. C.Swaminathan", achievement: "Outstanding Educationalist" },
        { name: "Dr. C.Kandasamy", achievement: "Outstanding Industrialist and remarkable Social Service" },
        { name: "Mr. Kongu Govindasamy", achievement: "remarkable Social Service" },
        { name: "Mr. R.K. Balakrisnan", achievement: "remarkable Social Service" },
        { name: "Mrs. D.M. Thangamani", achievement: "remarkable Social Service" },
        { name: "Mr. P. Govindasamy", achievement: "Remarkable Social Service" },
        { name: "Dr.A.Selvi", achievement: "Outstanding Scientist" },
        { name: "Mr.Er.B. Mohan", achievement: "Young Industrialist" },
        { name: "Selvi B.Aprajita", achievement: "Sports Champion" }
      ],
      2007: [
        { name: "Mr. K. Balasubramanian", achievement: "Outstanding Educationalist and remarkable Social Service" },
        { name: "Mr. R. Tamilmani", achievement: "Outstanding Educationalist" },
        { name: "Dr. Vimala Ramalingam", achievement: "Outstanding Doctor and Remarkable Social Service" },
        { name: "Mr. K.K. Velusamy", achievement: "Outstanding Industrialist and Remarkable oldage Social Service" },
        { name: "Mr. S.D. Chandrasekar", achievement: "Outstanding Educationalist" },
        { name: "Mr. P. Muthusamy", achievement: "Outstanding Industrialist and Remarkable Social Service" },
        { name: "Mr. S.Perumal", achievement: "Outstanding Professor" },
        { name: "Dr. K.S.K. Velumani", achievement: "Remarkable Social Service" },
        { name: "Dr. R. Nayanam", achievement: "Outstanding Agricultural Educationalist" },
        { name: "Mr. M. Sivashanmugam", achievement: "Remarkable city Uplifting services" },
        { name: "Mr. E.T. Rajamanikam", achievement: "Remarkable Social Service" },
        { name: "Mrs. Rukmani Marappan", achievement: "Outstanding Educationalist and remarkable Social Service" },
        { name: "Mr. M. Kumara Gounder", achievement: "Outstanding Industrialist and Remarkable Social Service" },
        { name: "Dr. ChitraDevi Jagadeesan", achievement: "Outstanding Doctor" },
        { name: "Mr. A.K.P Chinraj", achievement: "Outstanding Industrialist and Remarkable Social Service" },
        { name: "Mr. Visa M. Shanmugam", achievement: "Remarkable Social Service" }
      ],
      2006: [
        { name: "Munaivar K.Arangasamy", achievement: "Outstanding Educationalist and remarkable Social Service" },
        { name: "Mr. C. Arumugam", achievement: "Best Engineer and remarkable Social Service" },
        { name: "k.K.K. Sugumaran", achievement: "Spirutal and cultural services" },
        { name: "P.Krishnasamy", achievement: "Best Kogu Witer (Sagatya Academy Award)" },
        { name: "Mr. P. Kandhasamy", achievement: "Environmental and Awarness Services" },
        { name: "Mr. R. Ramasamy", achievement: "Freedom fighter" },
        { name: "Mr. s. Rajesh", achievement: "Software Engineer" },
        { name: "Professor. Mr. S.Gunasekaran", achievement: "Outstanding Educationalist and remarkable Social Service" },
        { name: "Dr. V. Aanadh", achievement: "Outstanding Doctor(ENT)" },
        { name: "DR. A.K. Ramasamy", achievement: "Outstanding Educationalist and remarkable Social Service" },
        { name: "Mr. R. Rajkumar", achievement: "Gunnies record" },
        { name: "Mr. S. Susidheran", achievement: "Outstanding Industrialist and Remarkable Social Service" },
        { name: "Mr. N.P Velu", achievement: "Remarkable Social Service" }
      ],
      2005: [
        { name: "Mr. K.Ammaiappan", achievement: "Remarkable Social Service, Karur" },
        { name: "Thiru. Devatthur. N.Nachimuthu", achievement: "Former M.L.A., Outstanding Social Service" },
        { name: "Mr. N.K Chinnasamy", achievement: "Outstanding Educationalist, Namakkal" },
        { name: "Mr. Aranga Duraisamy", achievement: "Remarkable Social Service, Karnataka" },
        { name: "Chairman R. Natesan", achievement: "Remarkable Social Service, Thiruchengodu" },
        { name: "Mr. T.P. Chinnasamy", achievement: "Remarkable Social Service, Salem" },
        { name: "Dr. K.S. Palanisamy", achievement: "Outstanding Educationalist, Erode" },
        { name: "Professor. P.Chinnasamy", achievement: "Remarkable Social Service, Erode" },
        { name: "Sinthanai Kavigar Kavithasan", achievement: "Best Writer, Coimbatore" },
        { name: "Dr. P. Yeganathan", achievement: "Scientist, Erode" },
        { name: "post P.Muthu", achievement: "Remarkable Social Service, Karur" },
        { name: "Dr. R. Rajavelu", achievement: "Outstanding Doctor, Thiruchengodu" },
        { name: "Mr. Ponnusamy Gounder", achievement: "Remarkable Social Service" },
        { name: "Mr. E. Thangadurai", achievement: "Outstanding Educationalist, Karur" },
        { name: "Mr. S.K. Subramanium", achievement: "Outstanding Educationalist, Coimbatore" },
        { name: "Selvi. Y.Prabha", achievement: "Chess Champion, Erode" }
      ],
      1999: [
        { name: "Thiru. K. Kandasamy", achievement: "Exemplary Service in Educational Field" },
        { name: "Dr. C. Namachivayam", achievement: "Exemplary Service in Educational Field" },
        { name: "Dr. A.M. Sachithanandam", achievement: "Exemplary Service in Educational Field" },
        { name: "Dr. G. Kumaravelu I.F.S.", achievement: "Outstanding I.F.S Officer of Tamilnadu Govt." },
        { name: "Thiru. K.R. Mani", achievement: "Outstanding Exporter" },
        { name: "Thiru. S.V. Kumaraguruparasamy", achievement: "Outstanding Exporter" },
        { name: "Dr. Raj Gounder", achievement: "Expert in Computer Research" },
        { name: "Thiru. Ponvannan", achievement: "Contribution to Film World" },
        { name: "Thiru. C. Muthusamy", achievement: "Outstanding Service to Society" },
        { name: "Thiru. A. Eswaran", achievement: "Exemplary Service in Educational Field" },
        { name: "Dr. V. Ramasamy", achievement: "Outstanding Service as a Doctor in Medical Field" },
        { name: "Thiru. V. Paramasivam", achievement: "Outstanding Exporter" },
        { name: "Thiru. A.K. Venkita samy", achievement: "Outstanding Industrialist" },
        { name: "Selvi. Vinodhini Vasudevan", achievement: "Achievement in Education" }
      ],
      2004: [
        { name: "Dr. M.A. Velusamy", achievement: "Outstanding Engineer and a Great Contributor to Kongu Society Welfare" },
        { name: "Thiru. Devatthur. N.Nachimuthu", achievement: "Former M.L.A., Outstanding Social Service" },
        { name: "Thiru. V. Eswaramurthy", achievement: "Educationalist, A Tamil Scholar and authored many books on various topics" },
        { name: "Thiru. U.R. Chinnusamy Gounder", achievement: "Outstanding Industrialist and service to kongu society" },
        { name: "Thiru. M. Kumarasamy", achievement: "Fleet Owner, Educationalist" },
        { name: "Thiru. Dr. V. Chellappan", achievement: "A great contributor to the welfare of kongu society" },
        { name: "Thiru. T.S. Palanivelu", achievement: "An Outstanding Teacher and A great contributor to the welfare of Kongu Society" },
        { name: "Thiru. T.K. Subramanian", achievement: "Selfless and Dedicated Service to the welfare of Kongu Society" },
        { name: "Thiru. S.P. Gopalakrishnan", achievement: "Selfless service to the mankind" },
        { name: "Thiru. A. Ramasamy", achievement: "Outstanding Educationalist, SRV School" },
        { name: "Thiru. K.G. Pragatheeskumar", achievement: "An Outstanding Agriculturist" },
        { name: "Dr. S. Dhanabakkiyam", achievement: "Recipient of many awards in the field of maternity" },
        { name: "Dr. M.N. Ponnusamy", achievement: "An Outstanding Professor" },
        { name: "Thiru. A.P. Kandasamy", achievement: "A Tamil Scholar, An Outstanding Agriculturist and Service to Kongu Society" },
        { name: "Dr. C. Rayappa", achievement: "An Outstanding ENT Specialist and Service to mankind" }
      ],
      2003: [
        { name: "Thiru.Nalla Govindasamy", achievement: "Outstanding Service to society" },
        { name: "Thiru. K. Nalliyappan", achievement: "Outstanding Industrialist" },
        { name: "Thiru. J.P. Leo Ganesh", achievement: "Outstanding Service to Society" },
        { name: "Thiru. \"Thangamani\" P.M. Palanisamy Gounder", achievement: "Outstanding Social Service" },
        { name: "Dr. K.V. Kaliyappan", achievement: "Outstanding Professor/Research Scholar" },
        { name: "Dr. R. Balasubramanian", achievement: "Outstanding Professor" },
        { name: "Dr. K.R. Palanisamy", achievement: "Outstanding Doctor" },
        { name: "Thiru. S. Nallasamy", achievement: "Outstanding Agriculturist" },
        { name: "Thiru. M. Sivapragasam", achievement: "Recipient of National award for Outstanding Teacher" },
        { name: "Thiru. R. Sainathan", achievement: "Outstanding Social Service" },
        { name: "Thiru. S. Jayavelan", achievement: "Outstanding Service for Society Welfare" },
        { name: "Thiru. K. Sivalingam", achievement: "Outstanding Educational Service" },
        { name: "Thiru. K. Sakthivel", achievement: "Outstanding Educational Service" },
        { name: "Thiru. K. Natarajan", achievement: "Outstanding Educational Service" },
        { name: "Thiru. V. Anbazhagan", achievement: "Outstanding Industrialist" },
        { name: "Thiru. V. Sundaresan", achievement: "Outstanding Industrialist" },
        { name: "Tmt. Dr. Uma Selvaraj", achievement: "Outstanding Social Service" },
        { name: "Tmt. Dr. R. Shanthi", achievement: "Outstanding Geologist and Agricultural Scientist" }
      ],
      2002: [
        { name: "Tmt. Bharathi Sengottuvel", achievement: "Outstanding Architect" },
        { name: "Thiru. K. Chellamuthu", achievement: "Remarkable Service in Agriculturists welfare" },
        { name: "Arima. Thiru. K. Dhanabalan", achievement: "Outstanding Social Service" },
        { name: "Thiru. R. Ganesan", achievement: "Outstanding Young Industrialist" },
        { name: "Thiru. K. Krishnamurthy", achievement: "Outstanding Teacher" },
        { name: "Dr. S. Muthu", achievement: "Service in the field of Technical Education" },
        { name: "Thiru. K.P. Natarajan", achievement: "Outstanding service in Transport Business" },
        { name: "Thiru. P.C. Palanisamy", achievement: "Outstanding Advocate" },
        { name: "Thiru. S. Premdurai", achievement: "Outstanding Exporter and Industrialist" },
        { name: "Thiru. M. Ramasamy", achievement: "Service in Agricultural Field" },
        { name: "Dr. K. Shanmuga Sundaram", achievement: "Service in Medical Field" },
        { name: "Dr. R. Vadivelan", achievement: "Service to Tamil Literature Development" },
        { name: "Thiru. S. Varadarajan", achievement: "Outstanding Scientist" },
        { name: "Tmt. C. Vijayalakshmi", achievement: "Outstanding Service in Educational Field" }
      ],
      2001: [
        { name: "Thiru. S.K. Sengoda Gounder", achievement: "Outstanding Industrialist" },
        { name: "Thiru. K. Ponnusamy", achievement: "Outstanding Industrialist" },
        { name: "Thiru. K. Arangasamy", achievement: "Outstanding Research Scholar" },
        { name: "Thiru. K.R. Appavoo", achievement: "Outstanding Industrialist" },
        { name: "Dr. S. Ashokan", achievement: "Outstanding Doctor" },
        { name: "Dr. M. Kandasamy", achievement: "Outstanding Educationalist" },
        { name: "Thiru. R. Selvaraj", achievement: "Outstanding Young Industrialist" },
        { name: "Thiru. R. Rajendran", achievement: "Remarkable Social Service" },
        { name: "Selvi. Kanchi Kailasam", achievement: "Young Swimming Champion" }
      ],
      2000: [
        { name: "Thiru. Sampath Kumar", achievement: "Cricket Player" },
        { name: "Thiru. S. Nagalsamy", achievement: "I.A.S. Officer" },
        { name: "Selvi. Jayanthi", achievement: "Agricultural University" },
        { name: "Thiru. Kannaiyan", achievement: "H.H.E" },
        { name: "Dr. Mani", achievement: "Outstanding Doctor" },
        { name: "Thiru. K. Palanisamy", achievement: "Outstanding Industrial Management, Kavincare" },
        { name: "Thiru.Karuppan", achievement: "Outstanding Teacher" },
        { name: "Thiru. K.K. Somasundaram", achievement: "I.F.S Officer" },
        { name: "Thiru. Kaliappan", achievement: "Achievement in Transport Business-Thenpandian Transport" },
        { name: "Thiru. Gnanasekaran", achievement: "M.L.A" },
        { name: "Thiru. Shanmugam", achievement: "Shanthi Electricals" },
        { name: "Thiru. Kasi", achievement: "Young Industrialist" },
        { name: "Dr. Balasubramaniyam", achievement: "Uma Clinic" },
        { name: "Thiru. Muthuraja", achievement: "G.T.P. Marbles" },
        { name: "Thiru. Gopal", achievement: "Achievement in his field" }
      ]
    };
  
    return data[year] || [];
  };
  


  const renderContent = () => {
    switch(activeTab) {
      case 'History':
        return renderHistory();
      case 'Kongu Mamanigal':
        return renderKonguMamanigal();
      case 'Sadhanayalargal':
        return renderSadhanayalargal();
      default:
        return null;
    }
  };

  return (
    <div className="w-full overflow-hidden bg-[linear-gradient(135deg,#f0f9ff_0%,#ffffff_50%,#e8fff0_100%)]">
      {/* Hero Banner */}
      <div className="w-full h-96 relative">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,150,100,0.1)_0%,rgba(200,250,220,0.2)_100%)]" />
        <img 
          src="/Images/banner.png" 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-green-50 via-white to-green-50 border-y border-green-100 shadow-md overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-w-max">
            {['History', 'Kongu Mamanigal', 'Sadhanayalargal'].map((tab, index) => (
              <React.Fragment key={tab}>
                <button
                  className={`px-4 sm:px-6 py-4 text-base sm:text-lg font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
                {index < 2 && (
                  <div className="h-6 w-px bg-green-200 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8 sm:py-16" style={{
        background: 'linear-gradient(45deg, rgba(240,249,255,0.6) 0%, rgba(255,255,255,0.9) 50%, rgba(232,255,240,0.6) 100%)'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 px-2">
              {activeTab === 'History' && 'HISTORY OF KONGU NANBARGAL SANGAM - A GLIMPSE'}
              {activeTab === 'Kongu Mamanigal' && 'KONGU MAMANIGAL'}
              {activeTab === 'Sadhanayalargal' && 'SADHANAYALARGAL'}
            </h1>
            {activeTab === 'History' && (
              <p className="text-lg sm:text-xl italic text-gray-600 px-2">
                "Life is not worth living unless it is spent giving to others in some way"
              </p>
            )}
            <div className="w-32 h-1 bg-green-600 mx-auto mt-8"></div>
          </div>
          <div className="overflow-x-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5f9f7_50%,#f0f7f4_100%)] rounded-3xl shadow-xl border border-green-100">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="max-w-4xl mx-auto mt-8 mb-12">
        <div className="bg-[linear-gradient(135deg,#ffffff_0%,#f5f9f7_50%,#f0f7f4_100%)] rounded-xl shadow-xl border border-green-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Our Members</h3>
          <div className="relative overflow-hidden w-full h-[300px]">
            {[
              '/Images/kkr.png',
              '/Images/klabs.png', 
              '/Images/sakthi.png',
              '/Images/pon.png'
            ].map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-1000 transform ${
                  currentAd === index 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentAd 
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Advertisement ${index + 1}`} 
                  className="w-full h-full object-contain rounded-lg" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;