import React from 'react';
import './Std_full_details.css';
import Navbarschmo from './components2/Navbarschmo';
import { Route, Routes } from 'react-router-dom'; 
import Home from './Pages2/Home';
import Testmark from './Pages2/Testmark';
import Attendance from './Pages2/Attendance';

const Student_full_details = () => {
  return (
    <>
      <Navbarschmo />
      <Routes> 
          <Route index element={<Home />} /> 
          <Route path='/testMark' element={<Testmark />} />
          <Route path='/Attdance-section' element={<Attendance />} />
      </Routes>
    </>
  );
}

export default Student_full_details;


