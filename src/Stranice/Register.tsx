import React, { useState } from "react";
import "./Register.css";
import catanImage from "../Slike/katantabla.png"; // putanja do tvoje slike

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Sva polja su obavezna");
      return;
    }

    // Ovde ide tvoj register logic
    console.log({ username, email, password });
    setError("");
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
            Već imate nalog? <a href="/login">Prijavite se</a>
          </div>
        </form>

        <img src={catanImage} alt="Catan" className="register-image" />
      </div>
    </div>
  );
};

export default Register;
