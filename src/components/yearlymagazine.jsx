import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

const YearlyMagazineArchive = () => {
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  const yearlyMagazines = [
    { year: 2025, link: "https://kongunanbargalsangam.org/Maga_pdf_2025.html" },
    { year: 2024, link: "https://kongunanbargalsangam.org/Maga_pdf_2024.html" },
    { year: 2023, link: "https://kongunanbargalsangam.org/Magazine_pdf.html" },
    { year: 2019, link: "https://kongunanbargalsangam.org/pdf/Book_2019.pdf" },
    { year: 2018, link: "https://kongunanbargalsangam.org/pdf/Book_2018.pdf" },
    { year: 2017, link: "https://kongunanbargalsangam.org/pdf/Book_2017.pdf" },
    { year: 2016, link: "https://kongunanbargalsangam.org/pdf/2016.pdf" },
    { year: 2014, link: "https://kongunanbargalsangam.org/pdf/2014.pdf" },
    { year: 2013, link: "https://kongunanbargalsangam.org/pdf/2013.pdf" },
    { year: 2012, link: "https://kongunanbargalsangam.org/pdf/2012.pdf" },
    { year: 2011, link: "https://kongunanbargalsangam.org/pdf/2011.pdf" },
    { year: 2009, link: "https://kongunanbargalsangam.org/pdf/2009.pdf" },
    { year: 2008, link: "https://kongunanbargalsangam.org/pdf/2008.pdf" },
    { year: 2007, link: "https://kongunanbargalsangam.org/pdf/2007.pdf" },
    { year: 2006, link: "https://kongunanbargalsangam.org/pdf/2006.pdf" },
    { year: 2005, link: "https://kongunanbargalsangam.org/pdf/2005.pdf" },
    { year: 2004, link: "https://kongunanbargalsangam.org/pdf/2004.pdf" },
    { year: 2003, link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
  ];

  const groupByDecade = () => {
    const decades = {};
    yearlyMagazines.forEach(magazine => {
      const decade = Math.floor(magazine.year / 10) * 10;
      if (!decades[decade]) {
        decades[decade] = [];
      }
      decades[decade].push(magazine);
    });
    return Object.entries(decades).sort((a, b) => b[0] - a[0]);
  };

  const handleYearClick = (link) => {
    window.open(link, '_blank');
  };

  const decades = groupByDecade();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Premium Header */}
        <div className="relative mb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000000,#00000008,#00000000)]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-200 opacity-20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100/50 backdrop-blur-sm p-4">
              <BookOpen className="w-10 h-10 text-green-800" />
            </div>
            
            <div>
              <h1 className="text-6xl font-light text-green-950 mb-6 tracking-tight">
                Annual Collections
              </h1>
              <p className="text-lg text-green-700 max-w-2xl mx-auto font-light">
                Explore our curated collection of yearly publications, 
                meticulously preserved and digitally archived for future generations
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-green-200"></div>
              <div className="w-2 h-2 rounded-full bg-green-300"></div>
              <div className="h-px w-12 bg-green-200"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Decades Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <h2 className="text-xl font-light text-green-900 mb-6 pl-4">Browse by Decade</h2>
              <div className="space-y-2">
                {decades.map(([decade]) => (
                  <button
                    key={decade}
                    onClick={() => setSelectedDecade(selectedDecade === decade ? null : decade)}
                    className={`w-full group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedDecade === decade 
                        ? 'bg-white shadow-lg shadow-green-900/5 text-green-900' 
                        : 'hover:bg-white/50 text-green-700'
                    }`}
                  >
                    <div className={`w-px h-8 transition-all duration-300 ${
                      selectedDecade === decade ? 'bg-green-400' : 'bg-green-200 group-hover:bg-green-300'
                    }`} />
                    <span className="text-lg font-light">{decade}s</span>
                    <ArrowRight className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                      selectedDecade === decade ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Years Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {decades
                .filter(([decade]) => !selectedDecade || decade === selectedDecade)
                .map(([_, magazines]) =>
                  magazines.map((magazine) => (
                    <button
                      key={magazine.year}
                      onClick={() => handleYearClick(magazine.link)}
                      onMouseEnter={() => setHoveredYear(magazine.year)}
                      onMouseLeave={() => setHoveredYear(null)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                      
                      <div className="relative bg-white/70 backdrop-blur-sm border border-green-100/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-green-200 group-hover:shadow-xl group-hover:shadow-green-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl" />
                        
                        <div className="relative flex flex-col items-center gap-4">
                          <div className="text-3xl font-extralight text-green-950 tracking-tight">
                            {magazine.year}
                          </div>
                          
                          <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
                          
                          <div className="flex items-center gap-2 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-light">View Archive</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </button>
                  ))
                )}
            </div>
          </div>
        </div>

        {/* Elegant Footer */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 text-green-700/75 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-100/50">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-light">Digital Archive Collection</span>
            <div className="w-1 h-1 rounded-full bg-green-200" />
            <span className="text-sm font-light">PDF Format</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyMagazineArchive;