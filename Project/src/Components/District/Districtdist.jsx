import React, { useEffect} from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import './Districtpro.css'

const Districtdist = () => {
    // Define state variables to store data
    // const [totalStudentsCountYear, setTotalStudentsCountYear] = useState(0);
    // const [totalDropoutStudents, setTotalDropoutStudents] = useState(0);
    // const [totalDropoutDistRange0, setTotalDropoutDistRange0] = useState(0);
    // const [totalDropoutDistRange1, setTotalDropoutDistRange1] = useState(0);
    // const [totalDropoutDistRange2, setTotalDropoutDistRange2] = useState(0);
    // const [totalDropoutDistRange3, setTotalDropoutDistRange3] = useState(0);

    // Simulating data fetching from API or database
    useEffect(() => {
        // Fetch data from API or database here and update state variables
        // Example:
        // fetchData().then(data => {
        //     setTotalStudentsCountYear(data.totalStudentsCountYear);
        //     setTotalDropoutStudents(data.totalDropoutStudents);
        //     setTotalDropoutDistRange0(data.totalDropoutDistRange0);
        //     setTotalDropoutDistRange1(data.totalDropoutDistRange1);
        //     setTotalDropoutDistRange2(data.totalDropoutDistRange2);
        //     setTotalDropoutDistRange3(data.totalDropoutDistRange3);
        // });
    }, []);

   
    useEffect(() => {
       
        const dataValues = [1,2,3,4];

      
        const ctx = document.getElementById('dropoutChart_Distance_wise_district').getContext('2d');

    
        if (window.dropoutChart) {
            window.dropoutChart.destroy();
        }

        
        window.dropoutChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0-5', '6-15', '16-30', '30 above'],
                datasets: [{
                    label: 'Student Dropout Count',
                    data: dataValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Clean up function
        return () => {
            if (window.dropoutChart) {
                window.dropoutChart.destroy();
            }
        };
    }, );

    return (
        <div className="container_district_chart">
            <div className="drop_out_age_wise_container_district">
                <h1 className="dr_title_district">Distance Wise Dropout Statistics</h1>
                <div className="total_students_district">
                    <p>Total School Students: 100</p>
                </div>
                <div className="total_dropout_students_district">
                    <p>Total Dropout Students: 10</p>
                </div>
                <div className="dropout_ratio_dic_district">
                    <p>Dropout Students(0-5): 1</p>
                    <p>Dropout Students(6-15): 2</p>
                    <p>Dropout Students(16-30): 3</p>
                    <p>Dropout Students(30 above): 4</p>
                </div>
                <div className="dr_bar_chart_age_district">
                    <canvas id="dropoutChart_Distance_wise_district" style={{ position: 'relative', height: '20vh', width: '15vw' }}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Districtdist;
