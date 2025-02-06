import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/css/ReviewContent.css';


const ReviewContent = () => {
  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/content');
      setContentList(response.data);
    } catch (err) {
      setError('Failed to load content. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const endpoint = `/api/content/${id}/${action}`;
      await axios.put(endpoint);
      setContentList((prevList) =>
        prevList.map((content) =>
          content.id === id ? { ...content, status: action === 'approve' ? 'Approved' : 'Rejected' } : content
        )
      );
      setSuccess(`Content ${action === 'approve' ? 'approved' : 'rejected'} successfully!`);
    } catch (err) {
      setError(`Failed to ${action} content. Please try again.`);
    } finally {
      setLoading(false);
      // Clear messages after 3 seconds
      setTimeout(() => {
        setSuccess('');
        setError('');
      }, 3000);
    }
  };

  return (
    <div className="review-content-container">
      <h1 className="title">Review Content</h1>
      <p className="description">
        Review, approve, or reject submitted content based on quality and guidelines.
      </p>

      {/* Feedback Messages */}
      {success && <div className="message success">{success}</div>}
      {error && <div className="message error">{error}</div>}

      {/* Content List Section */}
      <div className="content-list">
        <h2 className="content-list-title">Submitted Content</h2>
        {loading && contentList.length === 0 ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading content...</p>
          </div>
        ) : (
          <ul className="content-list-ul">
            {contentList.map((content) => (
              <li key={content.id} className={`content-item ${content.status.toLowerCase()}`}>
                <div className="content-card">
                  <h3 className="content-title">{content.title}</h3>
                  <p className={`status-badge ${content.status.toLowerCase()}`}>
                    {content.status}
                  </p>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleAction(content.id, 'approve')}
                      className="approve-btn"
                      disabled={content.status !== 'Pending' || loading}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(content.id, 'reject')}
                      className="reject-btn"
                      disabled={content.status !== 'Pending' || loading}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewContent;
