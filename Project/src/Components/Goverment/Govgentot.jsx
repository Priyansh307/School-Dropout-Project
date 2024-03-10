import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './Govpro.css';
import axios from 'axios';

const Govgentot = () => {
    const [maleCount, setMaleCount] = useState();
    const [femaleCount, setFemaleCount] = useState();

    useEffect(() => {
        const fetchGenderStats = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/auth/dis-gender', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMaleCount(response.data.male);
                setFemaleCount(response.data.female);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGenderStats();
    }, []);

    const canvasRefgov4 = useRef(null);

    useEffect(() => {
        if (maleCount === null || femaleCount === null) return;

        const ctxgov4 = canvasRefgov4.current.getContext('2d');
        const dropoutChartgov4 = new Chart(ctxgov4, {
            type: 'pie',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{
                    data: [maleCount, femaleCount],
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
    }, [maleCount, femaleCount]);

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
                    {maleCount !== null && femaleCount !== null && (
                        <>
                            <p>Dropout Male Students: {maleCount}</p>
                            <p>Dropout Female Students: {femaleCount}</p>
                        </>
                    )}
                </div>

                <div className="dr_bar_chart_gender_goverment">
                    <canvas ref={canvasRefgov4}></canvas>
                </div>
            </div>
        </div>
    );
}

export default Govgentot;
