import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa';
import '../css/css/ManageCollectionsPage.css';

const API_KEY = '47312692-be74d645ff2191fcd8381e33b';
const API_URL = 'https://pixabay.com/api/';

const ManageCollectionsPage = () => {
  const [collections, setCollections] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCollections = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}&q=${query}&page=1&per_page=21&safesearch=true`);
      const data = await response.json();
      if (data.hits) {
        setCollections(data.hits.map((item) => ({ name: item.tags, photos: item.webformatURL })));
      }
    } catch (error) {
      console.error('Error fetching collections:', error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchCollections();
    }
  };

  const handleDeleteCollection = (index) => {
    if (window.confirm('Are you sure you want to delete this collection?')) {
      setCollections(collections.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="collections-container">
      <h1>Manage Your Collections</h1>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search collections..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <FaSearch /> Search
        </button>
      </form>

      {loading && <p>Loading collections...</p>}

      <div className="collections-list">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <img src={collection.photos} alt={collection.name} />
            <h3>{collection.name}</h3>
            <div className="action-buttons">
              <button className="delete-btn" onClick={() => handleDeleteCollection(index)}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCollectionsPage;
