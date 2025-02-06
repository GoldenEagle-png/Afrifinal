import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2'; // Example charts (you can add more)
import axios from 'axios';
import '../css/css/ViewAnalytics.css';

const ViewAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const response = await axios.get('/api/analytics'); // Replace with actual endpoint
      setAnalyticsData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load analytics data. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="view-analytics-page">
      <h1 className="title">Analytics Dashboard</h1>
      <p className="description">
        Get insights into platform performance, user activity, and engagement.
      </p>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Spinner */}
      {loading && !error ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading analytics...</p>
        </div>
      ) : (
        analyticsData && (
          <div className="analytics-dashboard">
            {/* Example: Bar Chart for User Growth */}
            <div className="chart-container">
              <h2>User Growth</h2>
              <Bar
                data={{
                  labels: analyticsData.userGrowth.labels,
                  datasets: [
                    {
                      label: 'New Users',
                      data: analyticsData.userGrowth.data,
                      backgroundColor: 'rgba(75, 192, 192, 0.6)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                  },
                }}
              />
            </div>

            {/* Example: Line Chart for User Engagement */}
            <div className="chart-container">
              <h2>User Engagement</h2>
              <Line
                data={{
                  labels: analyticsData.userEngagement.labels,
                  datasets: [
                    {
                      label: 'Daily Active Users',
                      data: analyticsData.userEngagement.data,
                      backgroundColor: 'rgba(153, 102, 255, 0.6)',
                      borderColor: 'rgba(153, 102, 255, 1)',
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                  },
                }}
              />
            </div>

            {/* Example: Pie Chart for Device Usage */}
            <div className="chart-container">
              <h2>Device Usage</h2>
              <Pie
                data={{
                  labels: analyticsData.deviceUsage.labels,
                  datasets: [
                    {
                      data: analyticsData.deviceUsage.data,
                      backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                      ],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                  },
                }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ViewAnalytics;
