import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';
import '../../css/ExplorePage.css';

const API_KEY = '47312692-be74d645ff2191fcd8381e33b';
const API_URL = 'https://pixabay.com/api/';

const ExplorePage = () => {
  const [photos, setPhotos] = useState([]);
  const [categories] = useState(['Nature', 'City', 'Animals', 'Technology', 'Food']); // Static categories
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, [selectedCategory]);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${searchTerm || selectedCategory}&page=1&per_page=21&safesearch=true`);
      setPhotos(response.data.hits);
    } catch (err) {
      setError('Failed to fetch photos. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  return (
    <div className="explore-container">
      <h2>Explore Stunning Photos</h2>
      
      <div className="explore-filters">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Category Dropdown */}
        <div className="category-filter">
          <label htmlFor="category-select">Filter by Category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Status Messages */}
      {loading && <p className="loading-spinner">Loading photos...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Display Photos */}
      {!loading && !error && photos.length > 0 && <PhotoGrid photos={photos} />}

      {/* No Photos Found */}
      {!loading && !error && photos.length === 0 && (
        <p className="no-photos-message">No photos found. Try a different search or category.</p>
      )}
    </div>
  );
};

export default ExplorePage;
