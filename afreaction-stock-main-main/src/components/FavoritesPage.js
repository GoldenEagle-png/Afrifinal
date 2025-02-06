import React, { useState, useEffect } from 'react';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';

const API_KEY = '47312692-be74d645ff2191fcd8381e33b';
const API_URL = 'https://pixabay.com/api/';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}&q=favorites&page=1&per_page=10&safesearch=true`);
      const data = await response.json();
      if (data.hits) {
        setFavorites(data.hits.map((item) => ({
          id: item.id,
          url: item.webformatURL,
          tags: item.tags,
        })));
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
    setLoading(false);
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Favorites</h1>
      <p style={styles.description}>Access and manage your favorite collections.</p>

      {loading && <p>Loading favorites...</p>}

      <div style={styles.grid}>
        {favorites.map((favorite) => (
          <div key={favorite.id} style={styles.card}>
            <img src={favorite.url} alt={favorite.tags} style={styles.image} />
            <p style={styles.text}>{favorite.tags}</p>
            <button style={styles.button} onClick={() => handleRemoveFavorite(favorite.id)}>
              <FaTrashAlt /> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    color: '#666',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  text: {
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  },
};

export default FavoritesPage;
