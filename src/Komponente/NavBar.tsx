import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Settlers of CATAN</h1>
      </div>

      <div className="navbar-center">
        <Link to="/">Početna</Link>
        <Link to="/pravila">Pravila igre</Link>
        <Link to="/igraj">Igraj</Link>
        <Link to="/ekspanzije">Ekspanzije</Link>
        <Link to="/statistika">Statistika</Link>
      </div>

      <div className="navbar-right">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registracija</Link>
          </>
        ) : (
          <div className="user-section">
             <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
            <span className="user-icon">👤</span>
            <span className="username">{user.username}</span>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
