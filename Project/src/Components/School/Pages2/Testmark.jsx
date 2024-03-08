import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Testmark = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the chart (you can replace it with your actual data)
    const data = {
      labels: ['Obtained Marks', 'Total Marks'],
      datasets: [{
        label: 'Marks',
        data: [50, 100], // Obtained Marks, Total Marks
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)', // Obtained Marks color
          'rgba(255, 99, 132, 0.5)'   // Total Marks color
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)', // Obtained Marks border color
          'rgba(255, 99, 132, 1)'   // Total Marks border color
        ],
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Create the chart
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, config);
      return () => myChart.destroy(); // Cleanup on unmount
    }
  }, []);

  return (
    <div className='content_basic_std_dashboard'>
      <div className="card_test_mark_get">
        <h1>Test 1</h1>
        <table className='table_in_test_mark'>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>100</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='card_test_mark_get_12'>

        <div className="performace_text_xontainer">
          <h2>Your Performance</h2>
        </div>

        <div className="chart_test_peformance">
          <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>

        <div className="result_analysis_work_here">
          <div className="pargarph_in_result">
          <p className='p_in_rane_us'>Total Mark:  100 </p>
          </div>
          <div className="pargarph_in_result">
          <p className='p_in_rane_us'>Obtain Mark:  50 </p>
          </div>
          <div className="pargarph_in_result">
          <p className='p_in_rane_us'>Result:  50% </p>
          </div>
          
         
        </div>



      </div>









    </div>
  );
}

export default Testmark;



