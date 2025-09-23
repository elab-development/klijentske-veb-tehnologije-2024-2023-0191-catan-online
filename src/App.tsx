import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Početna</Link> | <Link to="/register">Registracija</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;