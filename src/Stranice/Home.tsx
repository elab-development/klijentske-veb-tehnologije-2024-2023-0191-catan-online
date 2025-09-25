import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import pozadina from "../Slike/pozadina.png";
import katantabla from "../Slike/katantabla.png";
import Navbar from "../Komponente/NavBar";

const Home: React.FC = () => {
  const username = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!).username
    : "Gost";

  const navigate = useNavigate();

  return (
    <div className="home">

      <main
        className="home-main"
        style={{ backgroundImage: `url(${pozadina})` }}>

        <div className="center-content">

          <div className="table-logo">
            <img src={katantabla} alt="Catan logo" className="hex-logo" />
          </div>

          <button className="play-btn" onClick={() => navigate("/igraj")}>Igraj</button>

          <div className="options-wrapper">
              <button className="option-btn" onClick={() => navigate("/pravila")}>
              Pravila igre</button>
              <button className="option-btn" onClick={() => navigate("/ekspanzije")}>Ekspanzije</button> 
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Home;
