import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';

const UnderFooter = () => {
  return (
    <header className="bg-[#222222] text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex sm:flex-row flex-col gap-y-2 justify-between items-center">
        <div className="flex items-center">
          <IoEarthOutline className="mr-2" />
          <span>Ethiopia</span>
          <span className="mx-2">|</span>
          <span>English (US)</span>
          <span className="mx-2">|</span>
          <span>$ (USD)</span>
        </div>
        <span>© 2024 Etsy, Inc.</span>
        <div className="flex items-center space-x-4">
          <a href="#" className="underline">Terms of Use</a>
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Interest-based ads</a>
          <a href="#" className="underline">Local Shops</a>
          <a href="#" className="underline">Regions</a>
        </div>
      </div>
    </header>
  );
};

export default UnderFooter