import React, { useState } from 'react';
import '../css/css/UploadPhotosPage.css';

const UploadPhotosPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formDetails, setFormDetails] = useState({ title: '', description: '' });

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length === 0) {
      alert('Please select photos to upload.');
      return;
    }
    alert('Photos uploaded successfully!');
    setSelectedFiles([]);
    setFormDetails({ title: '', description: '' });
  };

  return (
    <div className="upload-photos-container">
      <h1>Upload Your Photos</h1>
      <p>Share your creativity with the world by uploading high-quality photos.</p>

      <form className="upload-form" onSubmit={handleFormSubmit}>
        {/* File Input */}
        <label className="file-label">
          Select Photos:
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </label>

        {/* Preview Images */}
        {selectedFiles.length > 0 && (
          <div className="preview-container">
            <h3>Preview:</h3>
            <div className="preview-grid">
              {selectedFiles.map((file, index) => (
                <div key={index} className="preview-card">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index + 1}`}
                    className="preview-image"
                  />
                  <p>{file.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Title Input */}
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formDetails.title}
            placeholder="Enter photo title"
            onChange={handleInputChange}
          />
        </label>

        {/* Description Input */}
        <label>
          Description:
          <textarea
            name="description"
            value={formDetails.description}
            placeholder="Describe your photos"
            onChange={handleInputChange}
          ></textarea>
        </label>

        {/* Submit Button */}
        <button type="submit" className="upload-btn">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPhotosPage;
