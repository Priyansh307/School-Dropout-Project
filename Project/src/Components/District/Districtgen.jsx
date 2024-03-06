import './Districtpro.css';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';


const Districtgen = () => {
  const [maleCount, setMaleCount] = useState();
  const [femaleCount, setFemaleCount] = useState();

  useEffect(() => {
    const fetchGenderStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/dis-gender', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMaleCount(response.data.male);
        setFemaleCount(response.data.female);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenderStats();
  }, []);

  const canvasRef3 = useRef(null);

  useEffect(() => {
    if (maleCount === null || femaleCount === null) return;

    // Create a pie chart
    const ctx = canvasRef3.current.getContext('2d');
    const dropoutChart3 = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [maleCount, femaleCount],
          backgroundColor: ['#0074A3', '#F3BA00'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 18
              }
            }
          }
        }
      }
    });
  
    return () => {
      dropoutChart3.destroy();
    };
  }, [maleCount, femaleCount]);

  return (
    <div className="container_district_chart">
      <div className="drop_out_gender_wise_container_district">
        <h1 className="dr_title_district">Gender Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p style={{ color: 'black' }}>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p style={{ color: 'black' }}>Total Dropout Students : 10</p>
        </div>
        <div className="dropout_ratio_district">
          {maleCount !== null && femaleCount !== null && (
            <>
              <p style={{ color: 'black' }} >Dropout Male Students: {maleCount}</p>
              <p style={{ color: 'black' }}>Dropout Female Students: {femaleCount}</p>
            </>
          )}
        </div>
        <div className="dr_bar_chart_gender_district">
          <canvas ref={canvasRef3}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Districtgen;