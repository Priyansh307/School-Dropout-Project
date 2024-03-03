import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Govpro.css'

const Govicom = () => {
    const canvasRefgov5 = useRef(null);

  useEffect(() => {
    const incomeCategoriesgov5 = ['0-10000', '10001-50000', '500001-100000', '100000>'];
    const dropoutRatesgov5 = [1, 1, 1, 2];

    const ctxgov = canvasRefgov5.current.getContext('2d');
    const dropoutChartgov5 = new Chart(ctxgov, {
      type: 'bar',
      data: {
        labels: incomeCategoriesgov5,
        datasets: [{
          label: 'Dropout',
          data: dropoutRatesgov5,
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
        dropoutChartgov5.destroy();
    };
  },);
  return (
    <div className="container_goverment_chart">

      <div className="drop_out_income_wise_container_goverment">
        <h1 className="dr_title_goverment">Income Wise School Dropout Statistics</h1>
        <div className="total_students_goverment">
          <p>Total School Students: 25</p>
        </div>
        <div className="g_total_dropout_students_goverment">
          <p>Total Dropout Students: 5</p>
        </div>
        <div className="g_dropout_ratio_goverment">
          <p>Income (0-10000): 1</p>
          <p>Income (10001-50000): 1 </p>
          <p>Income (50001-100000): 1 </p>
          <p>Income (100000 above): 2 </p>
        </div>

        <div className="dr_bar_chart_income_goverment">
      <canvas ref={canvasRefgov5}></canvas>
          
        </div>
      </div>
    </div>
  )
}

export default Govicom
