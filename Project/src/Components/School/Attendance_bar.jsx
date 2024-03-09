import React, { useState, useEffect } from 'react';
import Sd_sub_nav from '../Navbar/Sd_sub_nav';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Attendance_bar.css'
import Attendance_image  from '../Assets/immigration.png'
// import axios from 'axios';


const Attendance_bar = () => {
  const [activeStandard, setActiveStandard] = useState(null);
  const [navVisible, setNavVisible] = useState(true);
 

  useEffect(() => {
    
  }, []); // Empty dependency array ensures this effect runs only once
  
  
  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };




  // fuction which helpful to create table

//   const [schoolIndex, setSchoolIndex] = useState('');
//   const [standard, setStandard] = useState('');
//   const [studentData, setStudentData] = useState([]);

//   const fetchData = async () => {
//       try {
//           // Replace the URL with your actual backend API endpoint
//           const response = await axios.get(`/api/students?schoolIndex=${schoolIndex}&standard=${standard}`);
//           setStudentData(response.data);
//       } catch (error) {
//           console.error('Error fetching student data:', error);
//       }
//   };




















  return (
    <div className='std_wise_container'>
      <div className="toggle-nav" onClick={toggleNavbar}>
        {navVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>

      {navVisible && <Sd_sub_nav />}
      {activeStandard ? (
       <div className='sd_grid_container'>
       <div className='active_card'>
        
       </div>
       <button className='back_btn' onClick={() => setActiveStandard(null)}>Back</button>
     </div>
      ) : (
        <div className="outerlayer_in_attendce">
           <div className="imagcontainer_attendance">
            <img className="imagcontainer_imge_attendance" src={Attendance_image} alt="" />
            <h2 className='image_text_box_h1_sch_test_attendance'>Attendance Section</h2>
          </div>

          <div className="innerAttance1_from_detalis">

            <div className='input_field_attadance_bar'>
            <form>
                
                  <input type="number" className='input_field_test_attdance' placeholder="School Index"/>
                  <input type="text" className='input_field_test_attdance' placeholder="School Name"/>
                  <input type="number" className='input_field_test_attdance' placeholder="Standard"/>
                  <input type="date" className='input_field_test_attdance' placeholder="Date"/>
                  <input type="number" className='input_field_test_attdance' placeholder='Months' />
                 
              
              </form>

            </div>

            <div className='basic_text_here_attendance'>
                <h1>Basic Details</h1>
                
            </div>

          </div>


          <div className="table_attandace_bar_section">


          <table className='table_in_test_score_weuse_attendance'>
                            <thead>
                                <tr>
                                    <th>Roll No</th>
                                    <th>Name</th>
                                    <th>Attendance</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {studentData.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.rollNo}</td>
                                        <td>{student.name}</td>
                                        <td> */}
                                            {/* Here you can render input fields for attendance */}
                                            {/* <input
                                                type="checkbox" */}
                                                {/* // handle attendance change event
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody> */}

                            <tbody>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tbody>

                        </table>
                        <button className='save_btn_attandance'>Save</button>

          </div>

        </div>
      )}
    </div>
  )
}

export default Attendance_bar
