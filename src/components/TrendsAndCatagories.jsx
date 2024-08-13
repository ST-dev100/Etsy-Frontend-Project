import React from 'react';

const TrendsAndCategories = () => {
  const trends = [
    { title: "Vintage Charms", imgSrc: "im1.jpg" },
    { title: "Marble Furnishings", imgSrc: "marable.jpg" },
    { title: "Maximalist Decor", imgSrc: "maximalist.jpg" },
    { title: "Monogrammed Kids' Sweaters", imgSrc: "monogram.jpg" },
    { title: "Statement Dorm Art", imgSrc: "dorm.jpg" },
    { title: "Best Friend Gifts", imgSrc: "bestFriends.jpg" },
  ];

  const giftCategories = [
    { title: "Anniversary gifts", imgSrc: "ani.jpg" },
    { title: "Gifts for him", imgSrc: "gifthim.jpg" },
    { title: "Gifts for her", imgSrc: "gifther.jpg" },
    { title: "Personalized gift ideas", imgSrc: "per.jpg" },
    { title: "Wedding gifts", imgSrc: "wedding.jpg" },
    { title: "Housewarming gifts", imgSrc: "house.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Trends Section */}
      <div>
        <h2 className="text-center text-2xl font-semibold mb-6">
          Check out the season's biggest trends
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="text-center transition-transform transform hover:scale-105 hover:bg-gray-100 p-2 rounded-lg"
            >
              <img
                src={trend.imgSrc}
                alt={trend.title}
                className="sm:w-36 sm:h-36 w-20 h-20 mx-auto rounded-full transition-transform transform hover:scale-110"
              />
              <p className="mt-2 text-xs sm:text-sm sm:font-medium">{trend.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gift Categories Section */}
      <div className="mt-12">
        <h2 className="text-left text-2xl font-semibold mb-6">
          Shop our popular gift categories
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="text-center bg-white shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={category.imgSrc}
                alt={category.title}
                className="w-full h-32 object-cover transition-transform transform hover:scale-105"
              />
              <p className="mt-4 mb-6 text-sm font-medium">{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsAndCategories;
