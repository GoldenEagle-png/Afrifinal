import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BrowsePhotos.css';
import { FaSearch } from 'react-icons/fa';

const API_KEY = '47312692-be74d645ff2191fcd8381e33b';
const API_URL = 'https://pixabay.com/api/';

const BrowsePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories] = useState([
    'All',
    'Nature',
    'People',
    'Architecture',
    'Animals',
    'Sports',
    'Business',
    'Technology',
    'Food',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, [selectedCategory]);

  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);

    try {
      const categoryQuery = selectedCategory !== 'All' ? selectedCategory.toLowerCase() : '';
      const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${categoryQuery}&page=1&per_page=20&safesearch=true`);
      setPhotos(response.data.hits);
    } catch (err) {
      setError('Failed to load photos. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${searchTerm}&page=1&per_page=20&safesearch=true`);
      setPhotos(response.data.hits);
    } catch (err) {
      setError('Failed to load photos. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="browse-photos">
      {/* Header Section */}
      <header className="browse-header">
        <h1>Browse Photos</h1>
        <p>Explore a collection of high-quality stock images curated just for you.</p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </header>

      {/* Category Filter Section */}
      <section className="filter-section">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="photo-gallery">
        <h2>Photo Gallery</h2>

        {loading && <p className="loading-message">Loading photos...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && photos.length > 0 ? (
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.webformatURL} alt={photo.tags} />
                <div className="photo-info">
                  <h3>{photo.tags}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && !error && <p className="no-photos-message">No photos found. Try a different search or category.</p>
        )}
      </section>
    </div>
  );
};

export default BrowsePhotos;
