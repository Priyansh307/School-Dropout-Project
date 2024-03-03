import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './School_Card.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const School_Card = (props) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = () => {
    navigate('/student-details', { state: { ...props } });
  };

  return (
    <div className='student_card'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={props.image} alt="no-image" />
        <div className="profile-title">{props.name}</div>
        <div className="profile-desc">
          <p>Rollno - {props.rollno}</p>
          <p>Std - {props.standard}</p>
          <p>Address - {props.address}</p>
        </div>
      </div>
      <div className='card_btn'>
        <button className='do_btn'>Dropout</button>
        <button className='inc_btn'>Std Inc</button>
        <button className='card_link' onClick={handleViewDetailsClick}>
          View Details <FaLongArrowAltRight className='arrow_icon'/>
        </button>
      </div>

    </div>
  );
}

export default School_Card;
