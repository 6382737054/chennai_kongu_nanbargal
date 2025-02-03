import React, { useState } from 'react';
import { Calendar, ChevronDown, ExternalLink } from 'lucide-react';

const MonthlyMagazineArchive = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const monthlyArchives = {
    2018: {
      January: "https://kongunanbargalsangam.org/magazines/2018/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2018/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2018/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2018/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2018/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2018/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2018/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2018/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2018/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2018/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2018/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2018/december.pdf"
    },
    2017: {
      January: "https://kongunanbargalsangam.org/magazines/2017/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2017/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2017/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2017/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2017/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2017/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2017/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2017/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2017/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2017/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2017/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2017/december.pdf"
    },
    2016: {
      January: "https://kongunanbargalsangam.org/magazines/2016/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2016/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2016/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2016/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2016/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2016/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2016/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2016/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2016/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2016/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2016/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2016/december.pdf"
    },
    2015: {
      January: "https://kongunanbargalsangam.org/magazines/2015/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2015/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2015/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2015/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2015/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2015/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2015/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2015/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2015/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2015/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2015/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2015/december.pdf"
    },
    2014: {
      January: "https://kongunanbargalsangam.org/magazines/2014/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2014/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2014/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2014/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2014/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2014/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2014/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2014/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2014/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2014/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2014/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2014/december.pdf"
    },
    2013: {
      January: "https://kongunanbargalsangam.org/magazines/2013/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2013/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2013/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2013/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2013/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2013/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2013/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2013/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2013/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2013/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2013/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2013/december.pdf"
    },
    2012: {
      January: "https://kongunanbargalsangam.org/magazines/2012/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2012/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2012/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2012/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2012/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2012/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2012/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2012/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2012/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2012/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2012/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2012/december.pdf"
    },
    2011: {
      January: "https://kongunanbargalsangam.org/magazines/2011/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2011/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2011/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2011/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2011/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2011/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2011/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2011/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2011/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2011/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2011/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2011/december.pdf"
    },
    2010: {
      January: "https://kongunanbargalsangam.org/magazines/2010/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2010/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2010/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2010/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2010/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2010/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2010/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2010/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2010/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2010/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2010/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2010/december.pdf"
    },
    2009: {
      January: "https://kongunanbargalsangam.org/magazines/2009/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2009/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2009/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2009/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2009/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2009/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2009/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2009/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2009/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2009/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2009/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2009/december.pdf"
    }
  };

  const handleMonthClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Premium Header */}
      <div className="relative mb-16">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-300"></div>
        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-50"></div>
          <div className="relative z-10 p-8 text-center">
            <h2 className="text-4xl font-semibold text-green-900 mb-4 tracking-tight">
              Monthly Magazine Archives
            </h2>
            <p className="text-lg text-green-800 max-w-2xl mx-auto">
              Explore our comprehensive collection of monthly magazines from 2009 to 2018. 
              Each publication is a window into our rich history and community achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Archives Container */}
      <div className="space-y-6">
        {Object.entries(monthlyArchives).map(([year, months]) => (
          <div 
            key={year} 
            className="bg-white rounded-2xl shadow-lg border border-green-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Year Header */}
            <button
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 flex items-center justify-between bg-green-50/50 hover:bg-green-100/50 transition-colors group"
            >
              <span className="text-2xl font-semibold text-green-900 group-hover:text-green-700 transition-colors">
                {year}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
                  expandedYear === year ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Months Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 transition-all duration-500 ease-in-out ${
                expandedYear === year 
                  ? 'opacity-100 max-h-screen' 
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              {Object.entries(months).map(([month, link]) => (
                <button
                  key={month}
                  onClick={() => handleMonthClick(link)}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur-sm opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white p-4 rounded-xl shadow-md border border-green-100 hover:border-green-300 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-900 group-hover:text-green-700 transition-colors">
                        {month}
                      </span>
                      <ExternalLink 
                        className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-green-700">
        <p className="text-sm italic">
          * All magazines are in PDF format.
        </p>
      </div>
    </div>
);
};

export default MonthlyMagazineArchive;