import React from "react";
import "./Ekspanzije.css";
import eks1 from "../Slike/ekspanzija1.png";
import eks2 from "../Slike/ekspanzija2.png";
import eks3 from "../Slike/ekspanzija3.png";
import eks4 from "../Slike/ekspanzija4.png";

export type Expansion = {
  title: string;
  img: string;
  desc: string;
};

const expansions: Expansion[] = [
  {
    title: "SEAFARERS",
    img: eks1,
    desc: "Dodaje more, brodove i nova ostrva za istraživanje i kolonizaciju.",
  },
  {
    title: "TRADERS & BARBARIANS",
    img: eks2,
    desc: "Donosi nove scenarije, trgovce i nove mehanike kretanja karavana.",
  },
  {
    title: "EXPLORERS & PIRATES",
    img: eks3,
    desc: "Dodaje misije, gusare i otkrivanje novih oblasti mape.",
  },
  {
    title: "CITIES & KNIGHTS",
    img: eks4,
    desc: "Uvodi vitezove, unapređenja gradova i odbranu od varvara.",
  },
];

export default function Ekspanzije() {
  return (
    <div className="ekspanzije-container">
      <div className="ekspanzije-grid">
        {expansions.map((exp, i) => (
          <div key={i} className="ekspanzija-box">
            <h3>{exp.title}</h3>
            <img src={exp.img} alt={exp.title} />
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
