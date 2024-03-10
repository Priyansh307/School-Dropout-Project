import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './Govpro.css';

const Govcast = () => {
  const [casteData, setCasteData] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/caste-wise-dropout-counts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Caste Data:', response.data); // Log received data
        setCasteData(response.data);  
      } catch (error) {
        console.error('Error fetching caste-wise dropout counts:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(casteData).length === 0) return;

    const ctx = canvasRef.current.getContext('2d');
    const dropoutChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(casteData),
        datasets: [{
          label: 'Dropout Count',
          data: Object.values(casteData),
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(54, 162, 235, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Dropout Count'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Caste Category'
            }
          }
        }
      }
    });

    return () => {
      dropoutChart.destroy();
    };
  }, [casteData]);

  return (
    <div className="container_goverment_chart">
      <div className="dropout_analysis_Cast_Wise_goverment">
        <h1 className="dr_title_goverment">Caste Wise School Dropout Statistics</h1>
        <div className="total_students_goverment">
          <p>Total School Students: {casteData.totalStudents}</p>
        </div>
        <div className="g_total_dropout_students_goverment">
          <p>Total Dropout Students: {casteData.totalDropouts}</p>
        </div>
        <div className="g_dropout_ratio_goverment">
          {Object.keys(casteData).map(key => (
            <p key={key}>Dropout Students({key}): {casteData[key]}</p>
          ))}
        </div>
        <div className="dr_bar_chart_cast_goverment">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Govcast;
