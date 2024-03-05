import React from 'react';
import './Std_full_details.css';
import Navbarschmo from './components2/Navbarschmo';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Pages2/Home';
import Product from './Pages2/Product';
import Report from './Pages2/Report';

const Student_full_details = () => {
  return (
    <>
      <Navbarschmo />
      <Routes> 
          <Route path='/home' element={<Home />} /> 
          <Route path='/products' element={<Product />} />
          <Route path='/report' element={<Report />} />
      </Routes>
    </>
  );
}

export default Student_full_details;


