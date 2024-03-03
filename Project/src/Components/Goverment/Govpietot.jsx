import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import './Govpro.css'; // Import CSS file if needed

const Govpietot = () => {
  
    const canvasRef11 = useRef(null);

    useEffect(() => {
      var data1Elementgov400 = 25;
      var data1Elementgov401 = 5;
  
     
      const ctx = canvasRef11.current.getContext('2d');
      const dropoutPieChartDisgov = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Total Student', 'Dropout Student'],
          datasets: [{
            data: [data1Elementgov400, data1Elementgov401],
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
        dropoutPieChartDisgov.destroy();
      };
    },);
    

    return (
        <div className="container_goverment_chart">
            <div className="Dropout-rate-container_govertment">
                <h1 className="dr_title_goverment">School Dropout Statistics</h1>
                <div className="g_total_students_goverment">
                    <p>Total School Students : 25</p>
                </div>
                <div className="g_total_dropout_students_goverment">
                    <p>Total Dropout Students: 5</p>
                </div>
                <div className="g_dropout_ratio_goverment">
                    <p>Dropout Ratio:  20%</p>
                </div>
                <div className="dr_pie_chart_goverment">
                <canvas ref={canvasRef11}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Govpietot;

