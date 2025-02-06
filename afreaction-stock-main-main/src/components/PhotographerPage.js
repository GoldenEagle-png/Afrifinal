import React, { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

const API_KEY = "47312692-be74d645ff2191fcd8381e33b";
const PER_PAGE = 9;

const EditorsPage = () => {
  const [media, setMedia] = useState([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [uploadData, setUploadData] = useState({ image: null, description: "", price: "" });

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}&safesearch=true`
      );
      const data = await response.json();
      setMedia(data.hits || []);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, [query, page]);

  const handleUploadChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadData({ ...uploadData, image: URL.createObjectURL(file) });
    }
  };

  const handleUploadSubmit = () => {
    if (uploadData.image) {
      setMedia([{ id: Date.now(), previewURL: uploadData.image, tags: uploadData.description, views: 0, price: uploadData.price }, ...media]);
      setShowUploadPopup(false);
      setUploadData({ image: null, description: "", price: "" });
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Afreaction</h1>
        <div style={styles.searchContainer}>
          <FaSearch color="#fff" />
          <input
            style={styles.input}
            type="text"
            placeholder="Search media..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button style={styles.uploadButton} onClick={() => setShowUploadPopup(true)}>
          <FaPlus /> Upload
        </button>
      </header>

      {/* Image Gallery */}
      <div style={styles.grid}>
        {loading ? (
          <div style={styles.loader}>Loading...</div>
        ) : media.length > 0 ? (
          media.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.previewURL} alt={item.tags} style={styles.image} />
              <div style={styles.overlay}>
                <button style={styles.iconButton}><FaHeart /></button>
                <button style={styles.iconButton}><FaShoppingCart /></button>
              </div>
              <div style={styles.info}>
                <p>{item.tags}</p>
                {item.price && <p>Price: ${item.price}</p>}
              </div>
            </div>
          ))
        ) : (
          <div style={styles.loader}>No results found.</div>
        )}
      </div>

      {/* Upload Popup */}
      {showUploadPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={() => setShowUploadPopup(false)}>
              <FaTimes />
            </button>
            <h2>Upload Image</h2>
            <input type="file" onChange={handleUploadChange} />
            {uploadData.image && <img src={uploadData.image} alt="Preview" style={styles.previewImage} />}
            <input type="text" placeholder="Description" value={uploadData.description} onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })} />
            <input type="number" placeholder="Price ($)" value={uploadData.price} onChange={(e) => setUploadData({ ...uploadData, price: e.target.value })} />
            <button style={styles.submitButton} onClick={handleUploadSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#121212", minHeight: "100vh" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "10px", marginBottom: "20px" },
  logo: { fontSize: "24px", fontWeight: "bold", color: "white" },
  searchContainer: { display: "flex", alignItems: "center", gap: "10px", padding: "10px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "5px" },
  input: { padding: "10px", border: "none", background: "transparent", color: "white", outline: "none", width: "250px" },
  uploadButton: { backgroundColor: "orange", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" },
  card: { position: "relative", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "8px", overflow: "hidden", transition: "transform 0.3s", cursor: "pointer" },
  image: { width: "100%", height: "200px", objectFit: "cover" },
  overlay: { position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" },
  iconButton: { background: "rgba(255,255,255,0.3)", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer", color: "white" },
  info: { padding: "10px", fontSize: "14px", color: "white" },
  popupOverlay: { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.6)", display: "flex", justifyContent: "center", alignItems: "center" },
  popup: { background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "8px", width: "300px", textAlign: "center" },
  closeButton: { position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer", color: "white" },
  previewImage: { width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px", marginTop: "10px" },
  submitButton: { backgroundColor: "orange", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default EditorsPage;
