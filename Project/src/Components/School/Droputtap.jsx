import React, { useEffect, useState } from 'react';
import '../School/Schoolprofile.css';
import axios from 'axios';

const Droputtap = () => {
  const [students, setStudents] = useState([]);

  const filterByClass = (event) => {
    const selectedClass = event.target.value;
    // Implement filtering logic here
  };

  useEffect(() => {
    // Fetch student data from the server
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/students', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStudents(response.data.students);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
}, []);


  return (
    <>
      <div className="container_school">
        <div className="class-filter_school">
          <select id="class-select" onChange={filterByClass}>
            <option value="all">All Classes</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="class">Class</option>
            <option value="gender">Gender</option>
            <option value="area">Area</option>
            <option value="city">City</option>
            <option value="income">Income</option>
            <option value="reason">Reason for Leaving</option>
          </select>
        </div>
        <div className="sub-container_school_droptab">
          <table className="table_school_com table_school_com-bordered table_school_com-hover">
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
                
                <th>State</th>
                <th>Roll No</th>
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
  );
};

export default Droputtap;
