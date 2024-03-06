import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css'
import axios from 'axios';


// Disschwise component
const Disschwise = () => {
  // State variables to store the school-wise statistics
  const [schoolStatistics, setSchoolStatistics] = useState([]);

  useEffect(() => {
    // Fetch school-wise statistics
    const fetchSchoolStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/school-wise-dropout-statistics');
        setSchoolStatistics(response.data.schoolStatistics);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchoolStatistics();
  }, []);

  return (
    <div className="container_district_chart">
      <div className="drop_out_school_wise_container_district">
        <h1 className="dr_title_district">School Wise Dropout Statistics</h1>
        <table className='table_district'>
          <thead>
            <tr>
              <th className="t_title_distict">School Name</th>
              <th className="t_title_distict">Total Dropout Students</th>
              <th className="t_title_distict">Total Male Dropout Students</th>
              <th className="t_title_distict">Total Female Dropout Students</th>
              <th className="t_title_distict">Total Students</th>
              <th className="t_title_distict">Dropout Ratio</th>
            </tr>
          </thead>
          <tbody>
            {schoolStatistics.map((school) => (
              <tr key={school._id}>
                <td>{school.name}</td>
                <td>{school.totalDropoutStudents}</td>
                <td>{school.totalMaleDropout}</td>
                <td>{school.totalFemaleDropout}</td>
                <td>{school.totalStudents}</td>
                <td>{school.dropoutRatio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Disschwise;