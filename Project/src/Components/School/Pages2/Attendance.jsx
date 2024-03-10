import React, { useEffect, useRef } from 'react';
import attdance_home_student from '../../Assets/attendant-list.png'
import Chart from 'chart.js/auto';

const Attendance = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the chart (you can replace it with your actual data)
    const data = {
      labels: ['Attendance Obtian', 'Remaining Attendance'],
      datasets: [{
        label: 'Attandace',
        data: [50, 50], // Obtained Marks, Remaining Marks (Total Marks - Obtained Marks)
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)', // Obtained Marks color
          'rgba(255, 99, 132, 0.5)'   // Remaining Marks color
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)', // Obtained Marks border color
          'rgba(255, 99, 132, 1)'   // Remaining Marks border color
        ],
        borderWidth: 1
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            position: 'top'
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
    <div className='attandance_home_dashboard_outerlayer'>
      <div className="innerattandave_dashboard_student">
          <img className="imagcontainer_attden" src={attdance_home_student} alt="" />
          <h1>Student Attendance</h1>
      </div>

      <div className="attandance_home_dashboard_inerlayer2">

      <div className="text_h1_student_attendance_dashbord">
        <h4> Enter Year :</h4> 
        <input type="text" className='input_field_test_attdance'  placeholder='Enter year'/>

      </div>

      <div className="text_h1_student_attendance_dashbord">
        <h4 className='h1_h4_padding_i_given'> Student Name : Yogin</h4> 

      </div>

      </div>

      <div className="box_attedance_section">
         
          <div className="attendance_box">
            <p>1</p>
            <p>12/30</p>
          </div>
        
          <div className="attendance_box">
            <p>2</p>
            <p>12/30</p>
          </div>

          <div className="attendance_box">
            <p>3</p>
            <p>12/30</p>
          </div>

          <div className="attendance_box">
            <p>4</p>
            <p>12/30</p>
          </div>

          <div className="attendance_box">
            <p>5</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>6</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>7</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>8</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>9</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>10</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>11</p>
            <p>12/30</p>
          </div>
          <div className="attendance_box">
            <p>12</p>
            <p>12/30</p>
          </div>

      </div>

      <div className='card_test_mark_get_12_attendance'>

        <div className="performace_text_xontainer_attandance">
          <h2>Your Attendance</h2>
        </div>

        <div className='chart_test_peformance_attdance'>
        <canvas ref={chartRef} width="400" height="200"></canvas>
          
        </div>

        <div className="result_analysis_work_here_attendance">
          <div className="pargarph_in_result_attandance">
          <p className='p_in_rane_us_attendance'>Total Attendance:  100 </p>
          </div>
          <div className="pargarph_in_result_attandance">
          <p className='p_in_rane_us_attendance'>Obtain Attendance:  50 </p>
          </div>
          <div className="pargarph_in_result_attandance">
          <p className='p_in_rane_us_attendance'>Ratio:  50% </p>
          </div>
          
         
        </div>


  


      </div>






    </div>
  )
}

export default Attendance

