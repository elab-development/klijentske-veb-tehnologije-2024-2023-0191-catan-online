import React from "react";
import "./Home.css";

import pozadina from "../Slike/pozadina.png";
import katantabla from "../Slike/katantabla.png";
import Navbar from "../Komponente/NavBar";

const Home: React.FC = () => {
  const username = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!).username
    : "Gost";

  return (
    <div className="home">

      <main
        className="home-main"
        style={{ backgroundImage: `url(${pozadina})` }}
      >
        <div className="center-content">
          <img src={katantabla} alt="Catan logo" className="hex-logo" />

          <button className="play-btn">Igraj</button>
          <div className="options">
            <button className="option-btn">Pravila igre</button>
            <button className="option-btn">Ekspanzije</button>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Home;
