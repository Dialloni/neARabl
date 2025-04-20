import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface VisualizationPageProps {
    data: any[];
}

const VisualizationPage: React.FC<VisualizationPageProps> = ({ data }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Calculate the number of people per state
    const stateCounts = data.reduce((acc: { [key: string]: number }, item: any) => {
        acc[item.state] = (acc[item.state] || 0) + 1;
        return acc;
    }, {});

    // Prepare chart data
    const chartData = {
        labels: Object.keys(stateCounts), // State names
        datasets: [
            {
                label: 'Number of People',
                data: Object.values(stateCounts), // Number of people per state
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'People Distribution Across States',
            },
        },
    };

    return (
        <div className="visualization">
            <h2>People Distribution Across States</h2>
            <Bar data={chartData} options={chartOptions} />
            <button
                onClick={() => navigate('/')} // Navigate back to the home page
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default VisualizationPage;