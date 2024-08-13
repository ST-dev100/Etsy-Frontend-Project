import React from 'react';
import Navbar from './components/NavBar';
import TrendsAndCategories from './components/TrendsAndCatagories';
import WhatIsEtsy from './components/WhatisEtsy';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import UnderFooter from './components/UnderFooter';

function App() {
  return (
    <>
      <Navbar/>
      <TrendsAndCategories/>
      <WhatIsEtsy/>
      <Newsletter/>
      <Footer/>
      <UnderFooter/>
    </>
  );
}

export default App;
