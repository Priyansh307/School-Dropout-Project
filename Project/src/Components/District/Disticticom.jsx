import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css';
import axios from 'axios';

const DistrictIncome = () => {
  const [studentCounts, setStudentCounts] = useState([]);

  useEffect(() => {
    const fetchIncomeStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/income-wise-student-counts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setStudentCounts([
          response.data.countRange0to10000,
          response.data.countRange10001to50000,
          response.data.countRange50001to100000,
          response.data.countRange100000above
        ]);
      } catch (error) {
        console.error(error);
      }
    };
    
    
    
    

    fetchIncomeStats();
  }, []);
  // console.log(studentCounts);
  const canvasRef4 = useRef(null);

  useEffect(() => {
    if (studentCounts.length === 0) return;

    const ctx = canvasRef4.current.getContext('2d');
    const dropoutChart4 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0-10000', '10001-50000', '50001-100000', '100000>'],
        datasets: [{
          label: 'Student Count',
          data: studentCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
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
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Student Count'
            }
          },
          x: {
            title: {
              display: true,
              text: "Father's Income (per Month)"
            }
          }
        }
      }
    });

    return () => {
      dropoutChart4.destroy();
    };
  }, [studentCounts]);

  return (
    <div className="container_district_chart">
      <div className="drop_out_income_wise_container_district">
        <h1 className="dr_title_district">Income Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p style={{ color: 'black' }}>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p style={{ color: 'black' }}>Total Dropout Students: 10</p>
        </div>
        <div className="dropout_ratio_district">
          <p style={{ color: 'black' }}>Income (0-10000): {studentCounts[0]}</p>
          <p style={{ color: 'black' }}>Income (10001-50000): {studentCounts[1]}</p>
          <p style={{ color: 'black' }}>Income (50001-100000): {studentCounts[2]}</p>
          <p style={{ color: 'black' }}>Income (100000 above): {studentCounts[3]}</p>
        </div>
        <div className="dr_bar_chart_income_district">
          <canvas ref={canvasRef4}></canvas>
        </div>
      </div>
    </div>
  );
};

export default DistrictIncome;
