import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Govpro.css';

const Goversch = () => {
  // State variable to store the school statistics
  const [schoolStatistics, setSchoolStatistics] = useState([]);

  useEffect(() => {
    // Fetch school statistics
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
    <div className="container_goverment">
      <table className='table_goverment'>
        <thead>
          <tr>
            <th className="t_title_goverment">School Name</th>
            <th className="t_title_goverment">Total Dropout Students</th>
            <th className="t_title_goverment">Total Male Dropout</th>
            <th className="t_title_goverment">Total Female Dropout</th>
            <th className="t_title_goverment">Total Students</th>
            <th className="t_title_goverment">Dropout Ratio</th>
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
  );
};

export default Goversch;
