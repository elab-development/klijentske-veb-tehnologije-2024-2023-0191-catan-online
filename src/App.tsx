import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Stats from "./Statistika_igraca";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Početna</Link> | <Link to="/register">Registracija</Link> 
        | <Link to="/stats">Statistika</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;