import React from 'react'
import govtg1 from '../Assets/govtg1.png'
import './CSS/Navbardistrict.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbardistrict = ({ showContent }) => {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () =>{
    axios.get('http://localhost:3000/auth/logout')
    .then(res =>{
      if(res.data.status){
        navigate('/logindislogin')
      }
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <>
      <header></header>
      <nav className='nav_district'>
            <div className="logo_district">
                <img className='govtg_district_nav' src={govtg1} alt="" />
                <h1 className='nav_h1'>Government Of India</h1>
            </div>
            <ul className='ul_district_nav'>
                <li><a href="#" className='a_district_page_nav' onClick={() => showContent('info')}>Home</a></li>
                <li><a href="#" className='a_district_page_nav' onClick={() => showContent('district-table')}>District Student Table</a></li>
                <li>
                    <a href="#" className='a_district_page_nav'>Dropout Analysis</a>
                    <ul className="sub-nav_district">
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_District_Wise')}>District Dropout</a></li>
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_Age_Wise')}>Age Wise</a></li>
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_Gender_Wise')}>Gender Wise</a></li>
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_Income_Wise')}>Income Wise</a></li>
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_School_Wise')}>School Wise</a></li>
                        <li><a href="#" className='a_district_page_nav' onClick={() => showContent('dropout_analysis_Distance_Wise')}>Distance Wise</a></li>
                    </ul>
                </li>
                <li><a href="#" className='a_district_page_nav' onClick={() => showContent('suggestion')}>Suggestion</a></li>
                <li><a href="#" className='a_district_page_nav' onClick={() => showContent('instruction')}>Instructions</a></li>
                <li><a href="#" className='a_district_page_nav' onClick={() => showContent('approved')}>Approved</a></li>
                <li>
                  <Link className='a_school_page_nav' onClick={handleLogout}>Log Out</Link>
                </li>

            </ul>
        </nav>
    
    
    </>
  )
}

export default Navbardistrict
