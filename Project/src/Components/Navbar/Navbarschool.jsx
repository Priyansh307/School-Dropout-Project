import React from 'react'
import './CSS/Navbarschool.css'
import govth1 from '../Assets/govtg1.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navbarschool = ({ showContent }) => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () =>{
    axios.get('http://localhost:3000/auth/logout')
    .then(res =>{
      if(res.data.status){
        navigate('/loginschlogin')
      }
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <>
      <header></header>
    <nav className='nav_school'>
        <div className="logo_school">
        <img className = 'govtg_school_nav' src={govth1} alt=""/>
        <h1 className='nav_h1'>Government Of India</h1>
        </div>
        
        <ul className='ul_school_nav'>
      <li><a href="#" className='a_school_page_nav' onClick={() => showContent('info')}>Home</a></li>
      <li><a href="#" className='a_school_page_nav' onClick={() => showContent('dropout-form')}>Profile Form</a></li>
      <li><a href="#" className='a_school_page_nav' onClick={() => showContent('dropout-view')}>Dropout Table</a></li>
      <li><a href="#" className='a_school_page_nav' onClick={() => showContent('total_students')}>Student Dashboard</a></li>
      <li>
        <a className='a_school_page_nav' href="#">Suggestion</a>
        <ul  className='sub-nav_school'>
          <li><a href="#" className='a_school_page_nav'  onClick={() => showContent('suggestion')}>Suggestion by District</a></li>
          <li><a href="#" className='a_school_page_nav'  onClick={() => showContent('suggestiongtos')}>Suggestion by State</a></li>
        </ul>
      </li>  
      <li>
      <Link className='a_school_page_nav' onClick={handleLogout}>Log Out</Link>
      {/* <a className='a_school_page_nav' onClick={handleLogout}>Log Out</a> */}
      </li>
    </ul>
    </nav>
    
    
    </>
  )
}

export default Navbarschool

