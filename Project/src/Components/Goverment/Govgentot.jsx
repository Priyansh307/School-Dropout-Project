import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Govpro.css'

const Govgentot = () => {
    const canvasRefgov4 = useRef(null);

  useEffect(() => {
    // Create a pie chart
    const ctxgov4 = canvasRefgov4.current.getContext('2d');
    const dropoutChartgov4 = new Chart(ctxgov4, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [2, 3],
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
        dropoutChartgov4.destroy();
    };
  }, )


  return (
    <div className="container_goverment_chart">

    <div className="drop_out_gender_wise_container_goverment">
      <h1 className="dr_title_goverment">Gender Wise School Dropout Statistics</h1>
      <div className="total_students_goverment">
        <p>Total School Students: 25</p>
      </div>
      <div className="g_total_dropout_students_goverment">
        <p>Total Dropout Students : 5</p>
      </div>

      <div className="g_dropout_ratio_goverment">
        <p>Dropout male Students: 2</p>
        <p>Dropout Female Students: 3</p>
      </div>

      <div className="dr_bar_chart_gender_goverment">
      <canvas ref={canvasRefgov4}></canvas>
      </div>
    </div>
   
  </div>
  )
}

export default Govgentot
