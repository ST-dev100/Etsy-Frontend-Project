import React, { useState } from 'react';
import { FiMenu, FiHeart, FiGift, FiShoppingCart, FiSearch } from 'react-icons/fi';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-6 items-center  gap-4">
                    {/* Etsy Logo */}
                    <a href="#" className="col-span-3 sm:col-span-1 row-start-1 text-orange-600 text-2xl sm:text-3xl font-bold">
                        Etsy
                    </a>

                    {/* Categories and Search Bar */}
                    <div className="col-span-6 sm:col-span-4 mt-4 flex row-start-2  sm:row-start-1 col-start-1  items-center space-x-4">
                        <div className="relative">
                            <button
                                className="flex items-center text-gray-500"
                                onClick={toggleDropdown}
                            >
                                <FiMenu className="mr-1" />
                                <span className="hidden sm:inline">Categories</span>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    <ul className="py-1">
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Accessories</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Art & Collectibles</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Baby</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Bags & Purses</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Bath & Beauty</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Books, Movies & Music</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Clothing</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Craft Supplies & Tools</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Electronics & Accessories</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Gifts</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Home & Living</li>
                                        <li className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out">Jewelry</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 ">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for anything"
                                    className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500">
                                    <FiSearch className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="col-span-3 sm:col-span-1 flex items-center justify-end space-x-4 sm:space-x-6">
                        <button className="text-gray-500">Sign in</button>
                        <button className="text-gray-500">
                            <FiHeart className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500">
                            <FiGift className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500">
                            <FiShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Additional Links */}
                <div className="flex justify-center space-x-2 sm:space-x-4 mt-0 text-gray-600">
                    <a href="#" className="hover:bg-gray-100 hover:rounded-2xl p-2 hidden sm:flex items-center transition-all duration-300 ease-in-out">
                        <FiGift className="mr-2" /> Gift Mode
                    </a>
                    <a href="#" className="hover:bg-gray-100 hover:rounded-2xl p-2 hidden sm:inline transition-all duration-300 ease-in-out">Shop Birthday Gifts</a>
                    <a href="#" className="hover:bg-gray-100 hover:rounded-2xl p-2 hidden sm:inline transition-all duration-300 ease-in-out">Home Favorites</a>
                    <a href="#" className="hover:bg-gray-100 hover:rounded-2xl p-2 hidden sm:inline transition-all duration-300 ease-in-out">Fashion Finds</a>
                    <a href="#" className="hover:bg-gray-100 hover:rounded-2xl p-2 hidden sm:inline transition-all duration-300 ease-in-out">Registry</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
