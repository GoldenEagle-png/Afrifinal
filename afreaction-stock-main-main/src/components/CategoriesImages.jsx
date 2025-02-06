import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "47312692-be74d645ff2191fcd8381e33b";
const API_URL = "https://pixabay.com/api/";

const CategoriesImages = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("nature"); // Default category
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategoryImages();
  }, [category]);

  const fetchCategoryImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${category}&page=1&per_page=12&safesearch=true`);
      setImages(response.data.hits);
    } catch (err) {
      setError("Failed to load images. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h1>

      {/* Category Selector */}
      <div style={styles.filterContainer}>
        <label style={styles.label}>Select Category:</label>
        <select style={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="nature">Nature</option>
          <option value="animals">Animals</option>
          <option value="technology">Technology</option>
          <option value="city">City</option>
          <option value="food">Food</option>
        </select>
      </div>

      {/* Loading and Error Messages */}
      {loading && <p style={styles.message}>Loading images...</p>}
      {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}

      {/* Image Grid */}
      <div style={styles.grid}>
        {images.map((img) => (
          <div key={img.id} style={styles.card}>
            <img src={img.webformatURL} alt={img.tags} style={styles.image} />
            <p style={styles.text}>{img.tags}</p>
          </div>
        ))}
      </div>

      {!loading && !error && images.length === 0 && (
        <p style={styles.message}>No images found for this category.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#333",
  },
  filterContainer: {
    marginBottom: "20px",
  },
  label: {
    marginRight: "10px",
    fontSize: "16px",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  text: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  message: {
    fontSize: "16px",
    color: "#555",
  },
};

export default CategoriesImages;
