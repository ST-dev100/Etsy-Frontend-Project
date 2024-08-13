import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-sky-100 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-900 mb-4">
          Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 w-64 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
          />
          <button className="py-2 px-6 bg-white text-black font-medium border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-50">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter