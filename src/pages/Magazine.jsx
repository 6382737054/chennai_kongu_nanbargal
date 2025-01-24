import React from 'react';

const MagazineIssues = () => {
  const yearlyArchives = [
    { year: "2003", link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
    { year: "2004", link: "https://kongunanbargalsangam.org/pdf/2004.pdf" },
    { year: "2005", link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
    { year: "2006", link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
    { year: "2007", link: "https://kongunanbargalsangam.org/pdf/2007.pdf" },
    { year: "2008", link: "https://kongunanbargalsangam.org/pdf/2008.pdf" },
    { year: "2009", link: "https://kongunanbargalsangam.org/pdf/2009.pdf" },
    { year: "2011", link: "https://kongunanbargalsangam.org/pdf/2011.pdf" },
    { year: "2012", link: "https://kongunanbargalsangam.org/pdf/2012.pdf" },
    { year: "2013", link: "https://kongunanbargalsangam.org/pdf/2013.pdf" },
    { year: "2014", link: "https://kongunanbargalsangam.org/pdf/Book.pdf" },
    { year: "2015", link: "https://drive.google.com/2015" },
    { year: "2016", link: "https://kongunanbargalsangam.org/pdf/2016.pdf" },
    { year: "2017", link: "https://kongunanbargalsangam.org/pdf/Book_2017.pdf" },
    { year: "2018", link: "https://kongunanbargalsangam.org/pdf/Book_2018.pdf" },
    { year: "2019", link: "https://kongunanbargalsangam.org/pdf/Book_2019.pdf" },
    { year: "2023", link: "https://kongunanbargalsangam.org/Magazine_pdf.html" },
    { year: "2024", link: "https://kongunanbargalsangam.org/Maga_pdf_2024.html" },
    { year: "2025", link: "https://kongunanbargalsangam.org/Maga_pdf_2025.html" }
  ];

  const monthlyIssues = [
    { month: "September", year: "2019", cover: "/Images/sep19.jpg", link: "https://drive.google.com/sep19" },
    { month: "August", year: "2019", cover: "/Images/aug19.jpg", link: "https://drive.google.com/aug19" },
    { month: "July", year: "2019", cover: "/Images/jul19.jpg", link: "https://drive.google.com/jul19" }
  ];

  return (
    <div className="w-full bg-gray-50 py-12 mt-10">
      {/* Annual Archives Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-12">Chennai Kongu Nanbargal Sangam Annual Issues</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {yearlyArchives.map((item) => (
            <a 
              key={item.year}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center hover:-translate-y-2 transition-transform">
                <div className="text-2xl font-bold text-white bg-orange-500 px-6 py-2 rounded-full mb-2 z-10">
                  {item.year}
                </div>
                <img
                  src="/Images/book-open.png"
                  alt={`Annual Issue ${item.year}`}
                  className="w-32 group-hover:scale-110 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Monthly Issues Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">Recent Monthly Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monthlyIssues.map((issue, index) => (
            <a
              key={index}
              href={issue.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4">
                <img
                  src={issue.cover}
                  alt={`${issue.month} ${issue.year} Issue`}
                  className="w-full h-[400px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {issue.month} {issue.year}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazineIssues;