import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import catanImage from "../slike/katantabla.png";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("⚠️ Sva polja su obavezna!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u: any) => u.email === email)) {
      setError("⚠️ Korisnik sa ovim emailom već postoji!");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));

    console.log("✅ Registrovan:", newUser);

    setError("");

    
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Registracija</h2>

          {error && <p className="error-message">{error}</p>}

          <label htmlFor="username">Korisničko ime</label>
          <input
            id="username"
            type="text"
            placeholder="Unesite korisničko ime"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Unesite email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Lozinka</label>
          <input
            id="password"
            type="password"
            placeholder="Unesite lozinku"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Registracija</button>

          <div className="register-section">
            Već imate nalog?{" "}
            <Link to="/login" className="login-link">
              Prijavite se
            </Link>
          </div>
        </form>

        <img src={catanImage} alt="Catan" className="register-image" />
      </div>
    </div>
  );
};

export default Register;
