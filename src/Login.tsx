import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import catanImage from './slike/katantabla.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/");
    } else {
      alert("Pogrešno korisničko ime ili lozinka");
    }
  };

  return (
    <>
      <div className="header">Settlers of CATAN</div>
      <div className="login-container">
        <div className="login-wrapper">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Prijavi se:</h2>
            <label>Username/Email</label>
            <input
              type="text"
              placeholder="Unesite korisničko ime ili email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Lozinka</label>
            <input
              type="password"
              placeholder="Unesite lozinku"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Prijavi se</button>
            <a href="#">Zaboravljena šifra?</a>

            <div className="register-section">
              <p>ili ukoliko nemaš nalog:</p>
              <button type="button" onClick={() => navigate("/register")}>
                Registracija
              </button>
            </div>
          </form>

          <img className="login-image" src={catanImage} alt="Catan tabla" />
        </div>
      </div>
      <div className="footer">
        Facebook | LinkedIn | YouTube | Instagram
      </div>
    </>
  );
};

export default Login;
