import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css'

const Districtgen = () => {
  const canvasRef3 = useRef(null);

  useEffect(() => {
    // Create a pie chart
    const ctx = canvasRef3.current.getContext('2d');
    const dropoutChart3 = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [3, 7],
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
  }, );

  return (
    <div className="container_district_chart">
      <div className="drop_out_gender_wise_container_district">
        <h1 className="dr_title_district">Gender Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p>Total Dropout Students : 10</p>
        </div>
        <div className="dropout_ratio_district">
          <p>Dropout Male Students: 3</p>
          <p>Dropout Female Students: 7</p>
        </div>
        <div className="dr_bar_chart_gender_district">
          <canvas ref={canvasRef3}></canvas>
        </div>
      </div>
      {/* Display submitted data from the database here */}
    </div>
  );
};

export default Districtgen;
