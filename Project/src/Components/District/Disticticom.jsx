import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css'; // Importing the CSS file for styling

const Disticticom = () => {
  const canvasRef4 = useRef(null);

  useEffect(() => {
    const incomeCategories = ['0-10000', '10001-50000', '500001-100000', '100000>'];
    const dropoutRates = [1, 2, 3, 4];

    const ctx = canvasRef4.current.getContext('2d');
    const dropoutChart4 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: incomeCategories,
        datasets: [{
          label: 'Dropout',
          data: dropoutRates,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Dropout'
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
  },);

  return (
    <div className="container_district_chart">
      <div className="drop_out_income_wise_container_district">
        <h1 className="dr_title_district">Income Wise School Dropout Statistics</h1>
        <div className="total_students_district">
          <p>Total School Students: 100</p>
        </div>
        <div className="total_dropout_students_district">
          <p>Total Dropout Students: 10</p>
        </div>
        <div className="dropout_ratio_district">
          <p>Income (0-10000): 1</p>
          <p>Income (10001-50000): 2</p>
          <p>Income (50001-100000): 3</p>
          <p>Income (100000 above): 4</p>
        </div>
        <div className="dr_bar_chart_income_district">
          <canvas ref={canvasRef4}></canvas>
        </div>
      </div>
      {/* Display submitted data from the database here */}
    </div>
  );
};

export default Disticticom;
