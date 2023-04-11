import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales $',
                data: [3213, 3123, 1233, 923, 1786, 9433, 4543],
                borderColor: 'rgb(53,  162, 235)',
                backgroundColor: 'rgba(53,  162, 235, .4)',
            }]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, []);


    return (
        <div className='bg-white rounded-lg p-4 shadow-sm'><Bar data={chartData} options={chartOptions}/></div>
    );
}

export default BarChart;
