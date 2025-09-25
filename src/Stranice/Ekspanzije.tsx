import React, { useEffect } from "react";
import "./Ekspanzije.css";
import eks1 from "../Slike/ekspanzija1.png";
import eks2 from "../Slike/ekspanzija2.png";
import eks3 from "../Slike/ekspanzija3.png";
import eks4 from "../Slike/ekspanzija4.png";


class Expansion {
  title: string;
  img: string;
  desc: string;

  constructor(title: string, img: string, desc: string) {
    this.title = title;
    this.img = img;
    this.desc = desc;
  }

  
  shortDesc(maxLength: number = 60): string {
    return this.desc.length > maxLength
      ? this.desc.slice(0, maxLength) + "..."
      : this.desc;
  }
}


const expansions: Expansion[] = [
  new Expansion(
    "SEAFARERS",
    eks1,
    "Dodaje more, brodove i nova ostrva za istraživanje i kolonizaciju."
  ),
  new Expansion(
    "TRADERS & BARBARIANS",
    eks2,
    "Donosi nove scenarije, trgovce i nove mehanike kretanja karavana."
  ),
  new Expansion(
    "EXPLORERS & PIRATES",
    eks3,
    "Dodaje misije, gusare i otkrivanje novih oblasti mape."
  ),
  new Expansion(
    "CITIES & KNIGHTS",
    eks4,
    "Uvodi vitezove, unapređenja gradova i odbranu od varvara."
  ),
];

export default function Ekspanzije() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="ekspanzije-container">
      <div className="ekspanzije-grid">
        {expansions.map((exp, i) => (
          <div key={i} className="ekspanzija-box">
            <h3>{exp.title}</h3>
            <img src={exp.img} alt={exp.title} />
            {}
            <p>{exp.shortDesc(80)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
