import React from 'react';

const OurHistory = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-green-50">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-green-900 mb-4">
          HISTORY OF KONGU NANBARGAL SANGAM - A GLIMPSE
        </h2>
        <p className="text-xl text-green-800 italic font-light">
          "Life is not worth living unless it is spent giving to others in some way"
        </p>
        <div className="h-0.5 w-24 bg-green-600/30 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* First Section */}
        <p className="text-lg">
          Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways. Right from the start, it has taken huge strides and grown into a reputed society delving into various avenues of service.
        </p>

        {/* Foundation Years */}
        <div>
          <p className="text-lg mb-8">
            In 1961, Thiru. K.M. Chenniappan B.A., Father of our Sangam felt the need for a society wherein, the members would be of help to one another both in joyous occasions and in times of adversity. Along with Thiru.K.A.Subramaniam, Thiru. C.K. Ramaswami, Thiru. T.P. Sadasivam, Thiru. K.A. Deviappan, Thiru.C.Eswarmurthi, Thiru. Palaniswami who worked at the secretariat, he arranged for regular meetings at Hotel Durbar and Marina beach.
          </p>
          {/* First Image Container */}
          <div className="flex justify-center mb-8">
            <div className="relative w-[600px] h-[500px] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
              <img
                src="/Images/VVI.jpg"
                alt="Historical Gathering"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="space-y-8">
          <p className="text-lg">
            When Arutchelvar .N.Mahalingam took over in the year 1968, the membership had increased considerably and the members along with families met at the nursery school run by Thiru.K.R.Marappan and at Hotel Woodlands. After almost a decade, when Thiru K.Palaniappan & Thiru.R.Gandhi headed the sangam, funds were raised through a Star Nite and of course with generous contributions from our families in Chennai & in our native places, the site for Kongu Nadu Illam was purchased by the efforts made by then Secretary T.K.Subramanian. Accommodation was provided for the students to pursue their degree courses in the capital. A newsletter, by the name, "Seithimadal" with just four pages was brought out for circulation.
          </p>
          
          <p className="text-lg">
            The period from 1993 – 1996 was a turning point in the history of Kongu Nanbargal Sangam, when Thiru.Arunachalam and Thiru. P. Devarajan were presidents and Thiru. K. Balasubramanian was the secretary. Kongu Nadu Illam was constructed within a year's time, the statue of Theeran Chinnamalai, the first freedom fighter of India was unveiled, fifteen <span className="text-green-800 font-medium">"Sadhanaiyalar Award"</span> to recognize our people who have achieved honors in various avenues was instituted and an Arakkattalai to honor the first three toppers in the 10th and 12th classes was formed.
          </p>
        </div>

        {/* Final Section with Second Image */}
        <div>
          <p className="text-lg mb-8">
            Kongu Nanabargal Sangam showed tremendous progress during the period 1997 -2000 when Thiru.K.R.Appavoo was President and Thiru. K.C.Kaliannan was Secretary. The monthly newsletter was converted to a magazine with the help of Thiru.S.K.Karuppan. It had a great impact on the Kongu society bringing about the involvement of many more elders in the activities of the sangam. Family get-togethers were "anxiously awaited for" occasions. The site for the Silver Jubilee Illam was purchased &plans were laid for the construction.
          </p>

          {/* Second Image Container */}
          <div className="flex justify-center mb-8">
            <div className="relative w-[600px] h-[500px] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
              <img
                src="/Images/KNI.jpg"
                alt="Modern Day Sangam"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
            </div>
          </div>

          <p className="text-lg">
            There has been a great flurry of activity since 2001, when Thiru. Govindasamy and Thiru. K.C. Kaliannan were presidents & Thiru. E.R. Eswaran was the secretary. The "Kongu Mamani" award to honor those elders of our society ho have earned a name for themselves as well the nation was instituted, funds were raised through "Anandhamaalai" and "Sandhoshamaalai" cultural extravaganzas and the construction of the Silver Jubilee Illam was completed. Many students, individuals and families have enjoyed and even today enjoy the accommodation facilities at both the Illams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;