import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: "150px",
    height: "100vh",
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px 0",
    fontSize: "18px",
  };

  const handleLogout = () => { // Function to handle logout
    localStorage.removeItem("token");
    navigate("/");
  };

  const logoutButtonStyle = {
    marginTop: "20px",
    padding: "10px",
    width: "100%",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };
  
  const logoutButtonHoverStyle = {
    backgroundColor: "darkred", // Warna berubah saat hover
  };

  return (
    <div style={sidebarStyle}>
      <h2>Management Product</h2>
      <Link to="/dashboard" style={linkStyle}>
        Dashboard
      </Link>
      <Link to="/products" style={linkStyle}>
        Data Product
      </Link>
      <hr style={{ marginTop: "20px", borderColor: "white" }} />
      <button
        onClick={handleLogout}
        style={{ ...logoutButtonStyle }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = logoutButtonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = logoutButtonStyle.backgroundColor)}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
