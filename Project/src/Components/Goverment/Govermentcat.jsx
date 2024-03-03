import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import './Govpro.css';

const Govermentcat = () => {

    useEffect(() => {
        
        const ctxgov29 = document.getElementById('dropoutChart_Category_wise');
        const dropoutChartgov29 = new Chart(ctxgov29, {
          type: 'pie',
          data: {
            labels: ['Private', 'Government', 'Semi-Government'],
            datasets: [{
              data: [2, 1, 1],
              backgroundColor: ['#0082B6', '#FFF700', '#00FF97'],
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
    
        // Cleanup function to destroy the chart
        return () => {
            dropoutChartgov29.destroy();
        };
      },);
    

  return (
    <div className="container_goverment_chart">
      <div className="drop_out_gender_wise_container_goverment">
        <h1 className="dr_title_goverment">Category Wise Dropout Statistics</h1>
        <div className="total_students_goverment">
          <p>Total School Students: 25</p>
        </div>
        <div className="g_total_dropout_students_goverment">
          <p>Total Dropout Students: 5</p>
        </div>
        <div className="g_dropout_ratio_goverment">
          <p>Private: 2</p>
          <p>Government: 1</p>
          <p>Semi-Government: 1</p>
        </div>
        <div className="dr_bar_chart_gender_goverment">
          <canvas id="dropoutChart_Category_wise"></canvas>
        </div>
      </div>
      
    </div>
  )
}

export default Govermentcat
