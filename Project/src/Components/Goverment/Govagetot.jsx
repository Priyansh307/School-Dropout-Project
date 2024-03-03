import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Govpro.css'

const Govagetot = () => {
    const canvasRef22 = useRef(null);

  useEffect(() => {
    const dropoutDatagov3 = [
      { ageGroupgov: '0-5', dropoutCountgov: 1 },
      { ageGroupgov: '6-10', dropoutCountgov: 1 },
      { ageGroupgov: '11-15', dropoutCountgov: 1 },
      { ageGroupgov: '16-20', dropoutCountgov: 2 },
    ];

    const labelsgov3 = dropoutDatagov3.map(item => item.ageGroupgov);
    const dataValuesgov3 = dropoutDatagov3.map(item => item.dropoutCountgov);

    const ctx3 = canvasRef22.current.getContext('2d');
    const dropoutChart22 = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: labelsgov3,
        datasets: [{
          label: 'Student Dropout Count',
          data: dataValuesgov3,
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
  },);


  return (
    <div className="container_goverment_chart">

    <div className="drop_out_age_wise_container_goverment">
      <h1 className="dr_title_goverment">Age Wise School Dropout Statistics</h1>
      <div className="total_students_goverment">
        <p>Total School Students: 25</p>
      </div>
      <div className="g_total_dropout_students_goverment">
        <p> Total Dropout Students: 5 </p>
      </div>

      <div className="g_dropout_ratio_goverment">

        <p>Dropout Students 0-5: 1</p>
        <p>Dropout Students 6-10: 1</p>
        <p>Dropout Students 11-15: 1</p>
        <p>Dropout Students 16-20: 2</p>
      </div>

      <div className="dr_bar_chart_age_goverment">
      <canvas ref={canvasRef22}></canvas>
      </div>
    </div>
 
  </div>
  )
}

export default Govagetot
