import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Districtpro.css'

const Districttab = () => {

    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [userDistrict, setUserDistrict] = useState('');
    const [username, setUsername] = useState('');
  const filterByClass = (event) => {
    const selectedClass = event.target.value;
    // Implement filtering logic here
  };

  useEffect(() => {
    // Fetch student data from the server
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/diststudents', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStudents(response.data.students);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUserData = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:3000/auth/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUserDistrict(response.data.district);
          setUsername(response.data.username);
        } catch (error) {
          console.error(error);
        }
      };
    fetchStudents();
    fetchUserData();
}, []);
  return (
    <>
     <div className="container_district">
       
       <div className="class-filter_district">
          
           <select id="class-select3">
               <option value="all">All Classes</option>
               <option value="name">Name</option>
               <option value="age">age</option>
               <option value="class">class</option>
               <option value="gender">gender</option>
               <option value="area">area</option>
               <option value="city">city</option>
               <option value="income">income</option>
               <option value="reason">reason for leaving</option>
 
           </select>
       </div>
       <div className="district_table_container">
               <h2 className='state_title_district'>District Table</h2>
           <table className='table_district'>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Gender</th>
                       <th>Caste</th>
                       <th>School Category</th>
                       <th>Distance</th>
                       <th>Area</th>
                       <th>City</th>
                       <th>Income</th>
                       {/* <th>Reason</th> */}
                       <th>Father Occupation</th>
                       <th>School Name</th>
                       <th>State</th>
                       <th>Student Roll No</th>
                       {/* <th>Year</th> */}
                   </tr>
               </thead>
               <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.caste}</td>
                  <td>{student.s_category}</td>
                  <td>{student.Distance}</td>
                  <td>{student.area}</td>
                  <td>{student.city}</td>
                  <td>{student.income}</td>
                  {/* <td>{student.reason}</td> */}
                  <td>{student.foccupation}</td>
                  <td>{student.user.username}</td>

                  <td>{student.mystate}</td>
                  <td>{student.stdrollno}</td>
                  
                  {/* <td>{student.year}</td> */}
                  {/* <td>Delete</td> */}
                </tr>
              ))}
            </tbody>
           </table>
       </div>
      
   </div>
    
    </>
  )
}

export default Districttab
