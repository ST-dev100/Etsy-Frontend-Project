import React from 'react';

const WhatIsEtsy = () => {
  return (
    <div className="bg-yellow-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-4">
          What is Etsy?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          <a href="#" className="underline">
            Read our wonderfully weird story
          </a>
        </p>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              A community doing good
            </h3>
            <p className="text-gray-600">
              Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.
              <br />
              <a href="#" className="underline">
                Here are some of the ways we’re making a positive impact, together.
              </a>
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Support independent creators
            </h3>
            <p className="text-gray-600">
              There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Peace of mind
            </h3>
            <p className="text-gray-600">
              Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
            </p>
          </div>
        </div>

        {/* Help Center Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-white text-gray-900 font-semibold py-2 px-6 border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            Go to Help Center
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}

    </div>
  );
};

export default WhatIsEtsy;
