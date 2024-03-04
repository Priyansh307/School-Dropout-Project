import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Std_full_details.css'


const Student_full_details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rollno, name, address, standard, income, district } = location.state;

  const goBack = () => {
    navigate("/loginschhome");
  };

  return (
    <div className='std_full_detail_card'>
      <p>RollNo :- {rollno}</p>
      <p>Name :- {name}</p>
      <p>Address:- {address}</p>
      <p>Standard:- {standard}</p>
      <p>Income:- {income}</p>
      <p>District:- {district}</p>
      <button className='full_det_btn' onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Student_full_details;
