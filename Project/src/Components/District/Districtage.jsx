import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './Districtpro.css';

const Districtagebar = () => {
  const [ageGroupCounts, setAgeGroupCounts] = useState({});

  useEffect(() => {
    const fetchAgeWiseCounts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/age-wise-student-counts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAgeGroupCounts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgeWiseCounts();
  }, []);

  const canvasRef2 = useRef(null);

  useEffect(() => {
    if (Object.keys(ageGroupCounts).length === 0) return;

    const ctx = canvasRef2.current.getContext('2d');
    const dropoutChart2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0-5', '6-10', '11-15', '16-20'],
        datasets: [{
          label: 'Student Dropout Count',
          data: [ageGroupCounts.age0to5, ageGroupCounts.age6to10, ageGroupCounts.age11to15, ageGroupCounts.age16to20],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true }
        }
      }
    });

    return () => {
      dropoutChart2.destroy();
    };
  }, [ageGroupCounts]);

  return (
    <div className="container_district_chart">
      <div className="drop_out_age_wise_container_district">
        <h1 className="dr_title_district">Age Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p style={{ color: 'black' }}>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p style={{ color: 'black' }}>Total Dropout Students: 10</p>
        </div>
        <div className="dropout_ratio_district">
          <p style={{ color: 'black' }}>Dropout Students 0-5: {ageGroupCounts.age0to5}</p>
          <p style={{ color: 'black' }}>Dropout Students 6-10: {ageGroupCounts.age6to10}</p>
          <p style={{ color: 'black' }}>Dropout Students 11-15: {ageGroupCounts.age11to15}</p>
          <p style={{ color: 'black' }}>Dropout Students 16-20: {ageGroupCounts.age16to20}</p>
        </div>
        <div className="dr_bar_chart_age_district">
          <canvas ref={canvasRef2}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Districtagebar;
