import React, { useState } from 'react';
import '../../css/css/AdminP.css';

const ReviewContent = () => {
  const [contentList, setContentList] = useState([
    { id: 1, title: 'Article 1', status: 'Pending' },
    { id: 2, title: 'Article 2', status: 'Pending' },
    { id: 3, title: 'Article 3', status: 'Pending' },
  ]);

  const handleApprove = (id) => {
    setContentList(contentList.map(content =>
      content.id === id ? { ...content, status: 'Approved' } : content
    ));
  };

  const handleReject = (id) => {
    setContentList(contentList.map(content =>
      content.id === id ? { ...content, status: 'Rejected' } : content
    ));
  };

  return (
    <div className="review-content-container">
      <h1 className="title">Review Content</h1>
      <p className="description">
        Review and approve or reject submitted content based on quality and guidelines.
      </p>

      {/* Content List Section */}
      <div className="content-list">
        <h2 className="content-list-title">Pending Content</h2>
        <ul className="content-list-ul">
          {contentList.map((content) => (
            <li key={content.id} className={`content-item ${content.status.toLowerCase()}`}>
              <span>{content.title}</span>
              <span className="status">{content.status}</span>
              <div className="action-buttons">
                <button
                  onClick={() => handleApprove(content.id)}
                  className="approve-btn"
                  disabled={content.status !== 'Pending'}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(content.id)}
                  className="reject-btn"
                  disabled={content.status !== 'Pending'}
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewContent;
