import React, { useState, useEffect } from "react";
import {
  FaTimes, FaImages, FaPaintBrush, FaVectorSquare, FaVideo, FaMusic,
  FaVolumeUp, FaFilm
} from "react-icons/fa";
import "../css/ExploreDropdown.css";

const API_KEY = "47312692-be74d645ff2191fcd8381e33b";
const BASE_URL = "https://pixabay.com/api/";

const ExploreDropdown = ({ onClose }) => {
  const [mediaType, setMediaType] = useState(null);
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (mediaType) {
      fetch(`${BASE_URL}?key=${API_KEY}&q=${mediaType}&image_type=photo`)
        .then(response => response.json())
        .then(result => setData(result.hits))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [mediaType]);

  return (
    <div className="explore-dropdown-overlay">
      <div className="explore-dropdown">
        <div className="dropdown-content">
          <div className="dropdown-section">
            <h3><FaImages /> Media</h3>
            <ul>
              <li onClick={() => setMediaType("photos")} className="hover-link"><FaImages /> Photos</li>
              <li onClick={() => setMediaType("illustrations")} className="hover-link"><FaPaintBrush /> Illustrations</li>
              <li onClick={() => setMediaType("vector")} className="hover-link"><FaVectorSquare /> Vectors</li>
              <li onClick={() => setMediaType("videos")} className="hover-link"><FaVideo /> Videos</li>
              <li onClick={() => setMediaType("music")} className="hover-link"><FaMusic /> Music</li>
              <li onClick={() => setMediaType("sound")} className="hover-link"><FaVolumeUp /> Sound Effects</li>
              <li onClick={() => setMediaType("gifs")} className="hover-link"><FaFilm /> GIFs</li>
            </ul>
          </div>
        </div>

        {data.length > 0 && (
          <div className="results-grid">
            {data.slice(0, 9).map((item, index) => (
              <div key={index} className="result-item">
                <a href={item.pageURL} target="_blank" rel="noopener noreferrer">
                  <img src={item.previewURL} alt={item.tags} />
                </a>
              </div>
            ))}
          </div>
        )}

        {selectedImage && (
          <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
            <div className="popup-content">
              <img src={selectedImage} alt="Selected" />
              <button className="close-popup" onClick={() => setSelectedImage(null)}><FaTimes /></button>
            </div>
          </div>
        )}

        <button className="close-btn" onClick={onClose}><FaTimes /></button>
      </div>
    </div>
  );
};

export default ExploreDropdown;
