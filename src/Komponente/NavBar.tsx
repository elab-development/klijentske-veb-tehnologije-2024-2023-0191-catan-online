import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import home from "../Slike/home.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
         {location.pathname !== "/" && (
          <Link to="/"><img src={home} alt="Home" className="home-icon" /></Link>
          )}
        <h1>Settlers of CATAN</h1>
      </div>

      <div className="navbar-center">
      
        {location.pathname !== "/" && (
          <>
            
            <Link to="/pravila">Pravila igre</Link>
            <Link to="/igraj">Igraj</Link>
            <Link to="/ekspanzije">Ekspanzije</Link>
          </>
        )}

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
            
            <button className="user-btn" onClick={() => navigate("/statistika")}>
              <span className="user-icon">👤</span>
              <span className="username">{user.username}</span>
            </button>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
