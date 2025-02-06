import React, { useState, useEffect } from "react";
import axios from "axios";
import { Home, Users, Image, Bell, Trash, CreditCard } from "lucide-react";

const API_KEY = "47312692-be74d645ff2191fcd8381e33b";
const BACKEND_URL = "https://your-backend.com/api";

export default function AdminPage() {
  const [images, setImages] = useState([]);
  const [clients, setClients] = useState([]);
  const [editors, setEditors] = useState([]);
  const [payments, setPayments] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    fetchImages();
    fetchUsers();
    fetchPayments();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=12`);
      setImages(response.data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/users`);
      setClients(response.data.clients);
      setEditors(response.data.editors);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/payments`);
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  // 🔹 Styles for Transparent Background & Light Theme
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      background: "none", // Transparent background
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
    },
  
    // Sidebar Styling
    sidebar: {
      width: "250px",
      background: "rgba(255, 255, 255, 0.2)", // Glass effect
      backdropFilter: "blur(15px)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      borderRight: "2px solid rgba(255, 255, 255, 0.4)",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease-in-out",
    },
  
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "orange",
      textAlign: "center",
      marginBottom: "20px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
  
    menu: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  
    menuItem: {
      background: "none",
      border: "none",
      color: "#333",
      padding: "12px",
      textAlign: "left",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      borderRadius: "5px",
    },
  
    menuItemHover: {
      background: "rgba(255, 165, 0, 0.8)", // Orange hover effect
      borderRadius: "5px",
      color: "white",
      transform: "scale(1.05)",
    },
  
    // Main Content
    content: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
    },
  
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
  
    card: {
      background: "rgba(255, 255, 255, 0.6)", // Light Glass effect
      padding: "20px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease-in-out",
    },
  
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    },
  
    deleteBtn: {
      background: "red",
      border: "none",
      padding: "7px",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
  
    deleteBtnHover: {
      background: "#ff4d4d",
      transform: "scale(1.1)",
    },
  
    button: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      background: "orange",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
  
    buttonHover: {
      background: "darkorange",
      transform: "scale(1.05)",
    },
  
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
      outline: "none",
      transition: "all 0.3s ease-in-out",
    },
  
    inputFocus: {
      border: "1px solid orange",
      boxShadow: "0px 0px 5px rgba(255, 165, 0, 0.5)",
    },
  
    // Grid for Images
    imageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
  
    imageCard: {
      position: "relative",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  
    imageHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
  
    image: {
      width: "100%",
      borderRadius: "8px",
      transition: "all 0.3s ease-in-out",
    },
  
    deleteIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "red",
      padding: "5px",
      borderRadius: "50%",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
    },
  
    deleteIconHover: {
      background: "#ff4d4d",
      transform: "scale(1.1)",
    },
    
  };
  

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.title}>Afreaction</h2>
        <nav style={styles.menu}>
          {[
            { name: "Dashboard", icon: <Home />, tab: "dashboard" },
            { name: "Clients", icon: <Users />, tab: "clients" },
            { name: "Editors", icon: <Users />, tab: "editors" },
            { name: "Manage Images", icon: <Image />, tab: "images" },
            { name: "View Payments", icon: <CreditCard />, tab: "payments" },
            { name: "Notifications", icon: <Bell />, tab: "notifications" },
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              style={{
                ...styles.menuItem,
                ...(activeTab === item.tab ? styles.menuItemHover : {}),
              }}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.content}>
        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div>
            <h2>Welcome, Admin</h2>
            <div>
              {[
                { label: "Total Clients", value: clients.length },
                { label: "Total Editors", value: editors.length },
                { label: "Payments Processed", value: `$${payments.reduce((acc, p) => acc + p.amount, 0)}` },
              ].map((card) => (
                <div key={card.label} style={styles.card}>
                  <p>{card.label}</p>
                  <h3>{card.value}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clients Section */}
        {activeTab === "clients" && (
          <div>
            <h2>Clients</h2>
            <ul>
              {clients.map((client) => (
                <li key={client.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "rgba(255, 255, 255, 0.6)", borderRadius: "5px", marginBottom: "10px", backdropFilter: "blur(10px)" }}>
                  {client.name}
                  <button style={styles.deleteBtn}>
                    <Trash size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image Management Section */}
        {activeTab === "images" && (
          <div>
            <h2>Manage Images</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {images.map((image) => (
                <div key={image.id} style={{ position: "relative", borderRadius: "8px" }}>
                  <img src={image.webformatURL} alt={image.tags} style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} />
                  <button style={{ ...styles.deleteBtn, position: "absolute", top: "10px", right: "10px" }}>
                    <Trash size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
