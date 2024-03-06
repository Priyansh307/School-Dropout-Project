import React, { useState } from 'react';
import Navbarschool from '../Components/Navbar/Navbarschool';
import Schoolprofile from '../Components/School/Schoolprofile';
import Studentprofile from '../Components/School/Studentprofile';
import Droputtap from '../Components/School/Droputtap';
import SuhSujjdis from '../Components/School/SuhSujjdis';
import SuchSujjgov from '../Components/School/SuchSujjgov';
import Std_wise_details from '../Components/School/Std_wise_details'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const Schoolhome = () => {
  // // const navigate1 = useNavigate()
  // axios.defaults.withCredentials = true;
  // useEffect(() =>{
  //   axios.get('http://localhost:3000/auth/verify')
  //   .then(res=>{
  //     if(res.data.status)
  //     {
  //       if(!response.data.school)
  //       {
  //         navigate1('/loginschlogin')
  //       }
  //     }

  //   })
  // },[])
  
  return (
    <>
      <Navbarschool />
      <div className="content">
         {/* Declaring routes */}
        <Routes>
          <Route index element={<Schoolprofile />} />
          <Route path='dropout-form' element={<Studentprofile />} />
          <Route path='dropout-table' element={<Droputtap />} />
          <Route path='std-dashboard' >
            <Route index element={<Std_wise_details />} />
          </Route>
            <Route path='sugg_dis' element={<SuhSujjdis/>}/>
            <Route path='sugg_gov' element={<SuchSujjgov/>}/>
        </Routes>
         {/* Ending routes */}
      </div>
    </>
  );
};

export default Schoolhome;
