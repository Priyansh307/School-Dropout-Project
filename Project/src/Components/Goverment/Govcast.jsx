import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import './Govpro.css';

const Govcast = () => {
  
  useEffect(() => {
    
    const casteCategories = ['General', 'Scheduled Tribes (ST)', 'Scheduled Cast (SC)', 'Other Backward Class (OBC)'];
    const dropoutRates = [1, 1, 1, 2]; 

   
    const ctx = document.getElementById('dropoutChart_Cast_wise');
    const dropoutChartgov6 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: casteCategories,
        datasets: [{
          label: 'Dropout',
          data: dropoutRates,
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
              text: 'Dropout'
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
        dropoutChartgov6.destroy();
    };
  },);

  return (
    <div className="container_goverment_chart">
      <div className="dropout_analysis_Cast_Wise_goverment">
        <h1 className="dr_title_goverment">Cast Wise School Dropout Statistics</h1>
        <div className="total_students_goverment">
          <p>Total School Students: 25</p>
        </div>
        <div className="g_total_dropout_students_goverment">
          <p>Total Dropout Students: 5</p>
        </div>
        <div className="g_dropout_ratio_goverment">
          <p>Dropout Students(open): 1</p>
          <p>Dropout Students(ST): 1</p>
          <p>Dropout Students(SC): 1</p>
          <p>Dropout Students(OBC): 2</p>
        </div>
        <div className="dr_bar_chart_cast_goverment">
          <canvas id="dropoutChart_Cast_wise"></canvas>
        </div>
      </div>
     
    </div>
  );
}

export default Govcast;

