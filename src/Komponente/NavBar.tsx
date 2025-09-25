import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const user = localStorage.getItem("user");
  const username = user ? JSON.parse(user).username : "Gost";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Settlers of CATAN</h1>
      </div>

      <div className="navbar-center">
        <Link to="/">Početna</Link>
        <Link to="/catan">Pravila igre</Link>
        <Link to="/ekspanzije">Ekspanzije</Link>
        <Link to="/igraj">Igraj</Link>
        <Link to="/stats">Statistika</Link>
      </div>

      <div className="navbar-right">
        {username === "Gost" ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registracija</Link>
          </>
        ) : (
          <>
            <span>{username}</span>
            <span className="user-icon">👤</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
