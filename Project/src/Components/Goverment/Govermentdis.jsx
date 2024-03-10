import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Govpro.css';

const Goversch = () => {
  // State variable to store the city statistics
  const [cityStatistics, setCityStatistics] = useState([]);

  useEffect(() => {
    // Fetch city statistics
    const fetchCityStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/city-wise-dropout-statistics');
        setCityStatistics(response.data.cityStatistics); // Update state with city statistics
      } catch (error) {
        console.error(error);
      }
    };

    fetchCityStatistics();
  }, []);

  return (
    <div className="container_goverment">
      <table className='table_goverment'>
        <thead>
          <tr>
            <th className="t_title_goverment">City Name</th>
            <th className="t_title_goverment">Total Dropout Students</th>
            <th className="t_title_goverment">Total Male Dropout</th>
            <th className="t_title_goverment">Total Female Dropout</th>
            <th className="t_title_goverment">Total Students</th>
            <th className="t_title_goverment">Dropout Ratio</th>
          </tr>
        </thead>
        <tbody>
          {cityStatistics.map((cityStat, index) => (
            <tr key={index}>
              <td>{cityStat.city}</td>
              <td>{cityStat.totalDropoutStudents}</td>
              <td>{cityStat.totalMaleDropout}</td>
              <td>{cityStat.totalFemaleDropout}</td>
              <td>{cityStat.totalStudents}</td>
              <td>{cityStat.dropoutRatio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goversch;
