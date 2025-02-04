import React, { useState } from 'react';
import { Calendar, ChevronDown, ExternalLink, Clock, ArrowRight } from 'lucide-react';

const MonthlyMagazineArchive = () => {
  const [selectedYear, setSelectedYear] = useState(2018);
  const [selectedMonth, setSelectedMonth] = useState(null);

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

  const years = Object.keys(monthlyArchives).sort((a, b) => b - a);
  const months = selectedYear ? Object.keys(monthlyArchives[selectedYear]) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Magazine Archives</h1>
          <p className="text-lg text-green-600">Browse our collection of monthly magazines</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Years Panel */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
              <div className="p-4 bg-green-50 border-b border-green-100">
                <h2 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Select Year
                </h2>
              </div>
              <div className="divide-y divide-green-100">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(selectedYear === year ? null : year);
                      setSelectedMonth(null);
                    }}
                    className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                      selectedYear === year 
                        ? 'bg-green-50 text-green-800' 
                        : 'hover:bg-green-50/50 text-gray-600'
                    }`}
                  >
                    <span className="font-medium">{year}</span>
                    <ArrowRight className={`w-4 h-4 transform transition-transform ${
                      selectedYear === year ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Months Grid */}
          <div className="md:col-span-8 lg:col-span-9">
            {selectedYear ? (
              <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
                <div className="p-4 bg-green-50 border-b border-green-100">
                  <h2 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {selectedYear} Issues
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => handleMonthClick(monthlyArchives[selectedYear][month])}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                        <div className="relative bg-white p-4 rounded-xl border border-green-100 transition-all duration-300 hover:border-green-200 hover:shadow-lg">
                          <div className="flex flex-col items-center space-y-2">
                            <Calendar className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                            <span className="text-sm font-medium text-gray-800 group-hover:text-green-800">
                              {month}
                            </span>
                            <ExternalLink className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-white rounded-2xl shadow-sm border border-green-100 p-8">
                <p className="text-lg text-gray-500">Select a year to view available magazines</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          All magazines are available in PDF format
        </div>
      </div>
    </div>
  );
};

export default MonthlyMagazineArchive;