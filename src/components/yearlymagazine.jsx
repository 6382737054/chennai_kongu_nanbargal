import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const YearlyMagazineArchive = () => {
  // Generate years from 2025 to 2003
  const yearlyMagazines = [
    { year: 2025, link: "https://kongunanbargalsangam.org/Maga_pdf_2025.html" },
    { year: 2024, link: "https://kongunanbargalsangam.org/Maga_pdf_2024.html" },
    { year: 2023, link: "https://kongunanbargalsangam.org/Magazine_pdf.html" },
    // { year: 2022, link: "https://kongunanbargalsangam.org/pdf/2022.pdf" },
    // { year: 2021, link: "https://kongunanbargalsangam.org/pdf/2021.pdf" },
    // { year: 2020, link: "https://kongunanbargalsangam.org/pdf/2020.pdf" },
    { year: 2019, link: "https://kongunanbargalsangam.org/pdf/Book_2019.pdf" },
    { year: 2018, link: "https://kongunanbargalsangam.org/pdf/Book_2018.pdf" },
    { year: 2017, link: "https://kongunanbargalsangam.org/pdf/Book_2017.pdf" },
    { year: 2016, link: "https://kongunanbargalsangam.org/pdf/2016.pdf" },
    // { year: 2015, link: "https://kongunanbargalsangam.org/pdf/2015.pdf" },
    { year: 2014, link: "https://kongunanbargalsangam.org/pdf/2014.pdf" },
    { year: 2013, link: "https://kongunanbargalsangam.org/pdf/2013.pdf" },
    { year: 2012, link: "https://kongunanbargalsangam.org/pdf/2012.pdf" },
    { year: 2011, link: "https://kongunanbargalsangam.org/pdf/2011.pdf" },
    // { year: 2010, link: "https://kongunanbargalsangam.org/pdf/2010.pdf" },
    { year: 2009, link: "https://kongunanbargalsangam.org/pdf/2009.pdf" },
    { year: 2008, link: "https://kongunanbargalsangam.org/pdf/2008.pdf" },
    { year: 2007, link: "https://kongunanbargalsangam.org/pdf/2007.pdf" },
    { year: 2006, link: "https://kongunanbargalsangam.org/pdf/2006.pdf" },
    { year: 2005, link: "https://kongunanbargalsangam.org/pdf/2005.pdf" },
    { year: 2004, link: "https://kongunanbargalsangam.org/pdf/2004.pdf" },
    { year: 2003, link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
  ];

  const handleYearClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-green-900 mb-3">Magazine Archive</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-green-200"></div>
          <BookOpen className="w-6 h-6 text-green-400" />
          <div className="h-px w-16 bg-green-200"></div>
        </div>
      </div>

      {/* Yearly Magazines Grid */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
          <h3 className="text-2xl font-light text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Yearly Magazines
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
          {yearlyMagazines.map((magazine) => (
            <button
              key={magazine.year}
              onClick={() => handleYearClick(magazine.link)}
              className="p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="text-lg font-medium text-green-900 flex items-center justify-center gap-2">
                {magazine.year}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearlyMagazineArchive;