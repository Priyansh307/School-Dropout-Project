import React, { useState } from 'react';
import Sd_sub_nav from '../Navbar/Sd_sub_nav';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Sch_test.css';
import Google_img from '../Assets/google-symbol.png';

const Sch_test = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [navVisible, setNavVisible] = useState(true);
  const [subjectCount, setSubjectCount] = useState(0);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  // Function to handle changes in subject count
  const handleSubjectCountChange = (e) => {
    setSubjectCount(parseInt(e.target.value, 10));
  };

  // Function to render table rows dynamically based on subject count
  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < subjectCount; i++) {
      rows.push(
        <tr key={i}>
          <td><input type="text" className="input_field_test" placeholder="Subject"/></td>
          <td><input type="number" className="input_field_test" placeholder="Total Marks"/></td>
          <td><input type="number" className="input_field_test" placeholder="Obtained Marks"/></td>
        </tr>
      );
    }
    return rows;
  };

  // Function to handle save button click
  const handleSave = () => {
    // Add your logic here to save the form data
    console.log("Form data saved!");
  };

  return (
    <div className='std_wise_container'>
      <div className="toggle-nav" onClick={toggleNavbar}>
        {navVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>

      {navVisible && <Sd_sub_nav />}
      {activeStandard ? (
        <div className='sd_grid_container'>
          <div className='active_card'></div>
          <button className='back_btn' onClick={() => setActiveStandard(null)}>Back</button>
        </div>
      ) : (
        <div className='outercontainer'>
          <div className="imagcontainer">
            <img className="imagcontainer_imge" src={Google_img} alt="" />
            <h2 className='image_text_box_h1_sch_test'>Test Section</h2>
          </div>

          <div className="innercontainer1test">
            <div className="innerbaiscdetails">
              <h1> Basic Details </h1>
            </div>
            <div className="innerbaiscdetails1">
              <form>
                <div class="form-group">
                  <input type="text" className='input_field_test' placeholder="School Name"/>
                  <input type="number" className='input_field_test' placeholder="School Index"/>
                  <input type="number" className='input_field_test' placeholder="Standard"/>
                  <input type="number" className='input_field_test' placeholder="Roll Number"/>
                  <input type="text" className='input_field_test' placeholder="Your Name"/>
                </div>
              </form>
            </div>
          </div>

          <div className="innercontainer2test">
            <div className="innerbaiscdetails2">
              <h1> Test Details </h1>
            </div>
            <div className='inner2_border_test_name'>
              <label>Test Name</label> <input type="text" className='input_field_test' placeholder="Your Name"/> 
            </div>
            <div className='inner2_border_test_name'>
              <label>How Many Subject</label> <input type="number" className='input_field_test_update' placeholder="How Many Subject" onChange={handleSubjectCountChange}/> 
            </div>
          </div>

          <div className="table_my_test_score">
            <table className='table_in_test_score_weuse'>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Total Marks</th>
                  <th>Obtained Marks</th>
                </tr>
              </thead>
              <tbody>
                {renderTableRows()}
              </tbody>
            </table>
            <button className='save_btn' onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sch_test;

