import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Districtpro.css'


const Districtpie = () => {
  const canvasRef1 = useRef(null);

  useEffect(() => {
    const data1Element40001 = 25;
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
  },);
  

  return (
    <div className="container_district_chart">
      <div className="drop_out_gender_wise_container_district">
        <h1 className="dr_title_district">District Total Dropout Statistics</h1>
        <div className="total_students_district">
          <p>Total School Students: 25</p>
        </div>
        <div className="total_dropout_students_district">
          <p> Total Dropout Students: 5</p>
        </div>
        <div className="dropout_ratio_district">
          <p>Dropout Ratio: 1% </p>
        </div>
        <div className="dr_bar_chart_gender_district">
          <canvas ref={canvasRef1}></canvas>
        </div>
      </div>

    </div>
  );
};

export default Districtpie;
