import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoEarth } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isSellOpen, setSellOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);

  const toggleShop = () => setShopOpen(!isShopOpen);
  const toggleSell = () => setSellOpen(!isSellOpen);
  const toggleAbout = () => setAboutOpen(!isAboutOpen);
  const toggleHelp = () => setHelpOpen(!isHelpOpen);

  return (
    <footer className="bg-[#4d6bc6] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-3 flex items-center justify-center border-b border-[#5d78cf]">
          <IoEarth className="mr-2" />
          <p className="text-sm">Etsy is powered by 100% renewable electricity.</p>
        </div>

        <div className="py-8 grid grid-cols-5 gap-8">
          <div className="col-span-5 sm:col-span-1 row-start-2 sm:row-start-1 bg-[#3c55a5] p-6 rounded-lg flex flex-col items-center">
            <img src="/etsy.png" alt="Etsy" className="w-16 h-16 rounded-2xl mb-4" />
            <button className="bg-[#4d6bc6] text-white py-2 px-4 rounded-full text-sm">
              Download the Etsy App
            </button>
          </div>

          <div className='grid grid-cols-5 col-span-5 sm:col-span-4'>
            <div className="col-span-5 sm:col-span-1">
              <h3 className="font-semibold mb-4 flex justify-between items-center">
                Shop
                <button className="sm:hidden" onClick={toggleShop}>
                  {isShopOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h3>
              <ul className={`space-y-2 text-sm ${isShopOpen ? 'block' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}>
                <li>Gift cards</li>
                <li>Etsy Registry</li>
                <li>Sitemap</li>
                <li>Etsy blog</li>
                <li>Etsy United Kingdom</li>
                <li>Etsy Germany</li>
                <li>Etsy Canada</li>
              </ul>
            </div>

            <div className="sm:col-span-1 col-span-5">
              <h3 className="font-semibold mb-4 flex justify-between items-center">
                Sell
                <button className="sm:hidden" onClick={toggleSell}>
                  {isSellOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h3>
              <ul className={`space-y-2 text-sm ${isSellOpen ? 'block' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}>
                <li>Sell on Etsy</li>
                <li>Teams</li>
                <li>Forums</li>
                <li>Affiliates & Creators</li>
              </ul>
            </div>

            <div className="sm:col-span-1 col-span-5">
              <h3 className="font-semibold mb-4 flex justify-between items-center">
                About
                <button className="sm:hidden ml-96" onClick={toggleAbout}>
                  {isAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h3>
              <ul className={`space-y-2 text-sm ${isAboutOpen ? 'block' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}>
                <li>Etsy, Inc.</li>
                <li>Policies</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Impact</li>
                <li>Legal imprint</li>
              </ul>
            </div>

            <div className="sm:col-span-1 col-span-5 ">
              <h3 className="font-semibold mb-4 flex justify-between items-center ">
                Help
                <button className="sm:hidden ml-96" onClick={toggleHelp}>
                  {isHelpOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h3>
              <ul className={`space-y-2 text-sm ${isHelpOpen ? 'block' : 'hidden'} sm:block transition-all duration-300 ease-in-out`}>
                <li>Help Center</li>
                <li>Privacy settings</li>
              </ul>
              <div className="mt-8 flex justify-center sm:justify-start space-x-8">
                <FaInstagram className=" text-2xl" />
                <FaFacebookF className=" text-2xl" />
                <FaPinterestP className=" text-2xl" />
                <FaTwitter className=" text-2xl" />
                <FaYoutube className=" text-2xl" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
