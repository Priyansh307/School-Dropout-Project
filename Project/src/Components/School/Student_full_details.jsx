import React from 'react';
import './Std_full_details.css';
import Navbarschmo from './components2/Navbarschmo';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Pages2/Home';
import Testmark from './Pages2/Testmark';
import Report from './Pages2/Report';

const Student_full_details = () => {
  return (
    <>
      <Navbarschmo />
      <Routes> 
<<<<<<< HEAD
          <Route path='/home' element={<Home />} /> 
          <Route path='/testMark' element={<Testmark />} />
=======
          <Route index element={<Home />} /> 
          <Route path='/products' element={<Product />} />
>>>>>>> b7febb392379d765e41df9ccd2cb43a07aa28984
          <Route path='/report' element={<Report />} />
      </Routes>
    </>
  );
}

export default Student_full_details;


