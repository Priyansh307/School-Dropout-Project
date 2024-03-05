import React, { useState } from 'react';
import School_Card from './School_Card';
import './Std_wise_details.css';
import Sd_sub_nav from '../Navbar/Sd_sub_nav';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cardData from './StudentCardData';

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
  
  return (
    <div className='std_wise_container'>
      <div className="toggle-nav" onClick={toggleNavbar}>
        {navVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>

      {navVisible && <Sd_sub_nav />}
      {activeStandard ? (
       <div className='sd_grid_container'>
       <div className='active_card'>
         {/* active card ne load karavanu heavy js */}
         {cardData[activeStandard].map(card => (
           <School_Card key={card.rollno}  {...card} />
         ))}
       </div>
       <button className='back_btn' onClick={() => setActiveStandard(null)}>Back</button>
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
