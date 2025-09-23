import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@gmail\.com$/;
    return regex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Korisničko ime je obavezno");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email mora biti u formatu neki_tekst@gmail.com");
      return;
    }
    if (!validatePassword(password)) {
      setError("Šifra mora imati bar jedan specijalan karakter i broj (min 6 karaktera).");
      return;
    }

    setError("");

    localStorage.setItem("userEmail", email);
    navigate("/");
  };

  return (
    <div>
      <h1>Registracija</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Korisničko ime: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Šifra: </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Sakrij" : "Prikaži"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registruj se</button>
      </form>
    </div>
  );
}