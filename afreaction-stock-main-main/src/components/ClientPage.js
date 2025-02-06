import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, Home, Image, Film, User, HelpCircle, ShoppingCart, Heart, Download } from "lucide-react";

export default function ClientPage({ favorites = [], setFavorites, cart = [], setCart }) {
  const [searchQuery, setSearchQuery] = useState("nature");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const API_KEY = "47312692-be74d645ff2191fcd8381e33b";

  useEffect(() => {
    fetchImages("nature");
    fetchVideos("nature");
  }, []);

  const fetchVideos = async (query) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/videos/?key=${API_KEY}&q=${query}&per_page=12`
      );
      setVideos(response.data.hits || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=12`
      );
      setImages(response.data.hits || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      fetchImages(searchQuery);
    }
  };

  const toggleFavorite = (image) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === image.id)
        ? prev.filter((fav) => fav.id !== image.id)
        : [...prev, image]
    );
  };

  const addToCart = (image) => {
    setCart((prev) => (prev.some((item) => item.id === image.id) ? prev : [...prev, image]));
  };

  
const [popup, setPopup] = useState(null);

const togglePopup = (type) => {
  setPopup((prevPopup) => (prevPopup === type ? null : type));
};

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span style={styles.orange}>Afreaction</span>
          </Link>
        </h1>
        <nav style={styles.nav}>
          <Link to="/favorites" style={styles.navLink}>Favorites ({favorites.length})</Link>
          <Link to="/cart" style={styles.navLink}>Cart ({cart.length})</Link>
        </nav>
      </header>

      <div style={styles.contentWrapper}>
      {/* Sidebar */}
<aside style={styles.sidebar}>
  <Home style={styles.icon} onClick={() => window.location.reload()} />
  <Image style={styles.icon} onClick={() => togglePopup("images")} />
  <Film style={styles.icon} onClick={() => togglePopup("videos")} />
  <User style={styles.icon} onClick={() => togglePopup("account")} />
  <HelpCircle style={styles.icon} onClick={() => togglePopup("help")} />
</aside>,


{/* Popups */}
{popup === "images" && (
    <div style={styles.popup}>
      <h2>Images from Pixabay</h2>
      <div style={styles.gallery}>
        {images.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} style={styles.img} />
        ))}
      </div>
      <button style={styles.closeButton} onClick={() => setPopup(null)}>Close</button>
    </div>
  )}
  
  {popup === "videos" && (
    <div style={styles.popup}>
      <h2>Videos from Pixabay</h2>
      <div style={styles.gallery}>
        {videos.map((video, index) => (
          <video key={index} controls width="300">
            <source src={video.videos.medium.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <button style={styles.closeButton} onClick={() => setPopup(null)}>Close</button>
    </div>
  )}
  
  {popup === "account" && (
    <div style={styles.popup}>
      <h2>Account Details</h2>
      <p><strong>Username:</strong> johndoe</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
      <p><strong>Subscription:</strong> Premium Plan</p>
      <button style={styles.closeButton} onClick={() => setPopup(null)}>Close</button>
    </div>
  )}
  
  {popup === "help" && (
    <div style={styles.popup}>
      <h2>How to Use the App</h2>
      <ul>
        <li>Click the <strong>Images</strong> icon to view pictures from Pixabay.</li>
        <li>Click the <strong>Videos</strong> icon to browse free stock videos.</li>
        <li>Use the <strong>Search</strong> bar to find specific content.</li>
        <li>Click the <strong>Heart</strong> icon to add an image to your favorites.</li>
        <li>Click the <strong>Download</strong> icon to save an image.</li>
        <li>Manage your profile and subscription in the <strong>Account</strong> section.</li>
      </ul>
      <button style={styles.closeButton} onClick={() => setPopup(null)}>Close</button>
    </div>
  )};
  
  


        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Search Bar */}
          <div style={styles.searchSection}>
            <div style={styles.searchBox}>
              <input
                type="text"
                placeholder="Search for images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
              <button style={styles.searchBtn} onClick={handleSearch}>
                <Search />
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div style={styles.gallery}>
            {images.map((image) => (
              <div key={image.id} style={styles.imageCard}>
                <img src={image.webformatURL} alt={image.tags} style={styles.img} />
                <div style={styles.overlay}>
                  <button
                    style={{ ...styles.button, ...(favorites.some((fav) => fav.id === image.id) ? styles.loved : {}) }}
                    onClick={() => toggleFavorite(image)}
                  >
                    <Heart />
                  </button>
                  <button style={styles.button} onClick={() => addToCart(image)}>
                    <Download />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#121212",
    color: "white",
  },
  contentWrapper: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "80px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    position: "fixed",
    height: "100vh",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    color: "#ddd",
    width: "28px",
    height: "28px",
    margin: "20px 0",
    cursor: "pointer",
    transition: "0.3s",
  },
  mainContent: {
    flex: 1,
    marginLeft: "100px",
    paddingTop: "70px",
  },
  header: {
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  orange: {
    color: "darkorange",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "lightgray",
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.3s",
  },
  searchSection: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "80px 30px 20px",
    marginLeft: "100px",
    borderRadius: "10px",
  },
  searchBox: {
    display: "flex",
    background: "transparent",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "600px",
    margin: "auto",
    border: "1px solid white",
  },
  searchInput: {
    flex: 1,
    padding: "12px",
    border: "none",
    outline: "none",
    color: "white",
    background: "transparent",
  },
  searchBtn: {
    background: "darkorange",
    border: "none",
    padding: "12px 16px",
    cursor: "pointer",
    color: "white",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    padding: "20px",
    marginLeft: "100px",
  },
  imageCard: {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    gap: "8px",
  },
  button: {
    background: "rgba(0, 0, 0, 0.5)",
    border: "none",
    padding: "8px",
    borderRadius: "50%",
    cursor: "pointer",
    color: "white",
  },
  loved: {
    color: "red",
  },
};
