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
import { useNavigate } from 'react-router-dom';

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
  const [content, setContent] = useState('info'); 

  const showContent = (contentType) => {
    setContent(contentType);
  };

  return (
    <>
      <Navbarschool showContent={showContent} />
      <div className="content">
        {content === 'info' && (
          <div>
          <Schoolprofile />
          </div>
        )}
        {content === 'dropout-form' && (
          <div>
            <Studentprofile />
          </div>
        )}
        {content === 'dropout-view' && (
          <div>
           <Droputtap />
          </div>
        )}
        {content === 'total_students' && (
          <div>
          <Std_wise_details/>
          </div>
        )}
        {content === 'suggestion' && (
          <div>
           <SuhSujjdis />
          </div>
        )}
        {content === 'suggestiongtos' && (
          <div>
           <SuchSujjgov />
          </div>
        )}
      </div>
    </>
  );
};

export default Schoolhome;
