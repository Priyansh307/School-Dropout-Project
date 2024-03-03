import React, { useState } from 'react';
import School_Card from './School_Card';
import './Std_wise_details.css';
import Sd_sub_nav from '../Navbar/Sd_sub_nav';
import male_student from '../Assets/male_student.jpg';
import female_student from '../Assets/female_student.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Std_wise_details = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [navVisible, setNavVisible] = useState(true);

  // Function to set the active standard
  const handleStandardClick = (standard) => {
    setActiveStandard(standard);
  };

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  // Define card data for each standard
  const cardData = {
    'Standard 12': [
      { rollno: 1, name: 'Dhyanam Pathak', address: 'Raj-Mahal Road', standard: 'Standard 12', income: 'Rs.3,00,000', district: 'Vadodara',image: male_student },
      { rollno: 2, name: 'Yogini Pambhar', address: 'Delhi-Palace', standard: 'Standard 12', income: 'Rs.3,00000', district: 'Rajkot',image:female_student },
      { rollno: 4, name: 'Dhruv Patel', address: 'Don PGs', standard: 'Standard 12', income: 'Rs.60,000', district: 'Valsad' },
        // Add more cards as needed
    ],
    'Standard 2': [
      { rollno: 1, name: 'Raju Seth', address: 'Pawdar Galli', standard: 'Standard 2', income: 'Rs.2,00,00,000', district: 'Mumbai' },
      { rollno: 2, name: 'Kiara Raval', address: 'New Ranip', standard: 'Standard 2', income: 'Rs.50,000', district: 'Ahmedabad' },
      { rollno: 4, name: 'Karan Varma', address: 'Juni Vav', standard: 'Standard 2', income: 'Rs.5000', district: 'Sabarkatha' },
      // Add more cards as needed
    ],
    // node vaprisu re bapu sethalal
  };

  return (
    <div className='std_wise_container'>
      <div className="toggle-nav" onClick={toggleNavbar}>
        {navVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>
      
      {navVisible && <Sd_sub_nav />}
      {activeStandard ? (
        <div className='active_card'>
          {/* active card ne load karavanu heavy js */}
          {cardData[activeStandard].map(card => (
            <School_Card key={card.rollno}  {...card} />
          ))}
          <div className='std_back_btn' >
          <button className='back_btn' onClick={() => setActiveStandard(null)}>Back</button>
          </div>
        </div>
      ) : (
        <div className='standard-list'>
          <div className='primary'>
            <h2>Primary</h2>
            <hr />
            <div className='standard-box' onClick={() => handleStandardClick('Standard 1')}>Standard 1</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 2')}>Standard 2</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 3')}>Standard 3</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 4')}>Standard 4</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 5')}>Standard 5</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 6')}>Standard 6</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 7')}>Standard 7</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 8')}>Standard 8</div>
          </div>
          <div className='secondary'>
            <h2>Secondary</h2>
            <hr />
            <div className='standard-box' onClick={() => handleStandardClick('Standard 9')}>Standard 9</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 10')}>Standard 10</div>
          </div>
          <div className='higher-secondary'>
            <h2>Higher-Secondary</h2>
            <hr />
            <div className='standard-box' onClick={() => handleStandardClick('Standard 11')}>Standard 11</div>
            <div className='standard-box' onClick={() => handleStandardClick('Standard 12')}>Standard 12</div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Std_wise_details;
