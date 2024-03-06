import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; // Import axios to make the HTTP request
import './Districtpro.css'

const Districtpie = () => {
  const [students, setStudents] = useState([]);
  const canvasRef1 = useRef(null);
  const [totalStudents, setTotalStudents] = useState(null);

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
        setTotalStudents(response.data.students.length); // Set totalStudents to the total number of students
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (totalStudents === null) return;

    const data1Element40001 = totalStudents - 5;
    const data1Element40002 = 5;

    const ctx = canvasRef1.current.getContext('2d');
    const dropoutPieChartDis = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Total Student', 'Dropout Student'],
        datasets: [{
          data: [data1Element40001, data1Element40002],
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

    // Cleanup function
    return () => {
      dropoutPieChartDis.destroy();
    };
  }, [totalStudents]);

  return (
    <div className="container_district_chart">
      <div className="drop_out_gender_wise_container_district">
        <h1 className="dr_title_district">District Total Dropout Statistics</h1>
        <div className="total_students_district">
          <p style={{ color: 'black' }}>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p style={{ color: 'black' }}> Total Dropout Students:  {students.length}</p>
        </div>
        <div className="dropout_ratio_district">
          <p style={{ color: 'black' }}>Dropout Ratio: 1% </p>
        </div>
        <div className="dr_bar_chart_gender_district">
          <canvas ref={canvasRef1}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Districtpie;
