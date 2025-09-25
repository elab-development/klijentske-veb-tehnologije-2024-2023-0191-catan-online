import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import catanImage from "../Slike/katantabla.png";

const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (usernameOrEmail === "admin" && password === "1234") {
      const adminUser = { username: "admin", email: "admin@catan.com" };
      localStorage.setItem("user", JSON.stringify(adminUser));
      console.log("✅ Ulogovan kao admin");
      navigate("/");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u: any) =>
        (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
        u.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      console.log("✅ Ulogovan:", foundUser);
      navigate("/");
    } else {
      alert("❌ Pogrešno korisničko ime/email ili lozinka");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Prijavi se:</h2>

          <label>Username/Email</label>
          <input
            type="text"
            placeholder="Unesite korisničko ime ili email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
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
  );
};

export default Login;
