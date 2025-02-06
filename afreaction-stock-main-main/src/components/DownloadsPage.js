import React from 'react';
import '../css/css/DownloadsPage.css';

const DownloadsPage = () => {
  // Sample data for download history
  const downloads = [
    {
      id: 1,
      title: 'Sunset Landscape',
      description: 'A beautiful sunset over the mountains.',
      date: '2025-01-15',
    },
    {
      id: 2,
      title: 'City Skyline',
      description: 'A high-resolution image of a modern city skyline.',
      date: '2025-01-20',
    },
    {
      id: 3,
      title: 'Tropical Beach',
      description: 'A serene tropical beach with crystal-clear water.',
      date: '2025-01-25',
    },
  ];

  return (
    <div className="downloads-page">
      <h1>Your Download History</h1>
      <p>View and re-download previously purchased or licensed images.</p>
      <div className="downloads-list">
        {downloads.map((item) => (
          <div key={item.id} className="download-item">
            <div className="image-placeholder">
              {/* Placeholder for image */}
              <span>Image Preview</span>
            </div>
            <div className="download-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <button
                className="download-btn"
                onClick={() => alert(`Downloading: ${item.title}`)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
