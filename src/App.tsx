import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Komponente/Home";
import Register from "./Komponente/Register";
import Stats from "./Komponente/Statistika_igraca";
import CatanInfo from "./Komponente/Pravila_igre";
import Igraj from "./Komponente/Igraj";
import Login from "./Komponente/Login";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Početna</Link> | <Link to="/stats">Statistika</Link> | <Link to="/catan">Pravila Catan</Link> | <Link to="/igraj">Igraj</Link> | <Link to="/register">Registracija</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/catan" element={<CatanInfo />} />
        <Route path="/igraj" element={<Igraj />} />
      </Routes>
    </Router>
  );
}

export default App;