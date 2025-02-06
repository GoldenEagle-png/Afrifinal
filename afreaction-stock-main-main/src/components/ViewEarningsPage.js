import React from 'react';
import { Line } from 'react-chartjs-2';
import '../css/css/ViewEarningsPage.css';

const ViewEarningsPage = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Earnings ($)',
        data: [50, 120, 180, 200, 300, 450, 500],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Earnings ($)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
    },
  };

  return (
    <div className="earnings-container">
      <h1>Your Earnings</h1>
      <p>Track your revenue and performance statistics here.</p>

      {/* Earnings Summary */}
      <div className="earnings-summary">
        <div className="summary-card">
          <h2>Total Earnings</h2>
          <p>$450</p>
        </div>
        <div className="summary-card">
          <h2>Last Month</h2>
          <p>$120</p>
        </div>
        <div className="summary-card">
          <h2>Total Downloads</h2>
          <p>250</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="earnings-chart">
        <h2>Performance Chart</h2>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ViewEarningsPage;
