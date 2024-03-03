import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css'; 

const Districtagebar = () => {
  const canvasRef2 = useRef(null);

  useEffect(() => {
    const dropoutData = [
      { ageGroup: '0-5', dropoutCount: 1 },
      { ageGroup: '6-10', dropoutCount: 2 },
      { ageGroup: '11-15', dropoutCount: 3 },
      { ageGroup: '16-20', dropoutCount: 4 },
    ];

    const labels = dropoutData.map(item => item.ageGroup);
    const dataValues = dropoutData.map(item => item.dropoutCount);

    const ctx = canvasRef2.current.getContext('2d');
    const dropoutChart2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Student Dropout Count',
          data: dataValues,
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
  },);

  return (
    <div className="container_district_chart">
      <div className="drop_out_age_wise_container_district">
        <h1 className="dr_title_district">Age Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p>Total Dropout Students: 10</p>
        </div>
        <div className="dropout_ratio_district">
          <p>Dropout Students 0-5: 1</p>
          <p>Dropout Students 6-10: 2</p>
          <p>Dropout Students 11-15: 3</p>
          <p>Dropout Students 16-20: 4</p>
        </div>
        <div className="dr_bar_chart_age_district">
          <canvas ref={canvasRef2}></canvas>
        </div>
      </div>
      
    </div>
  );
};

export default Districtagebar;
