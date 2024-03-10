import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './Govpro.css';

const Govagetot = () => {
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

  const canvasRef22 = useRef(null);

  useEffect(() => {
    if (Object.keys(ageGroupCounts).length === 0) return;

    const ageGroups = ['0-5', '6-10', '11-15', '16-20'];
    const dropoutCounts = [
      ageGroupCounts.age0to5,
      ageGroupCounts.age6to10,
      ageGroupCounts.age11to15,
      ageGroupCounts.age16to20
    ];

    const ctx22 = canvasRef22.current.getContext('2d');
    const dropoutChart22 = new Chart(ctx22, {
      type: 'bar',
      data: {
        labels: ageGroups,
        datasets: [{
          label: 'Student Dropout Count',
          data: dropoutCounts,
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
      dropoutChart22.destroy();
    };
  }, [ageGroupCounts]);

  return (
    <div className="container_goverment_chart">
      <div className="drop_out_age_wise_container_goverment">
        <h1 className="dr_title_goverment">Age Wise School Dropout Statistics</h1>
        <div className="total_students_goverment">
          <p>Total School Students: 25</p>
        </div>
        <div className="g_total_dropout_students_goverment">
          <p>Total Dropout Students: 5</p>
        </div>
        <div className="g_dropout_ratio_goverment">
          <p>Dropout Students 0-5: {ageGroupCounts.age0to5}</p>
          <p>Dropout Students 6-10: {ageGroupCounts.age6to10}</p>
          <p>Dropout Students 11-15: {ageGroupCounts.age11to15}</p>
          <p>Dropout Students 16-20: {ageGroupCounts.age16to20}</p>
        </div>
        <div className="dr_bar_chart_age_goverment">
          <canvas ref={canvasRef22}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Govagetot;
