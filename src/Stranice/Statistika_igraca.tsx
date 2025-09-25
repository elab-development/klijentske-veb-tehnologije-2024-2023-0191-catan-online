import React from "react";
import "./Statistika_igraca.css";


class PlayerStats {
  odigrane: number;
  pobedjene: number;
  ukupnoPoena: number;

  constructor(odigrane: number, pobedjene: number, ukupnoPoena: number) {
    this.odigrane = odigrane;
    this.pobedjene = pobedjene;
    this.ukupnoPoena = ukupnoPoena;
  }

  
  getProcenat(): number {
    return this.odigrane > 0 ? Math.round((this.pobedjene / this.odigrane) * 100) : 0;
  }

  
  getPoeniPoPartiji(): number {
    return this.odigrane > 0 ? (this.ukupnoPoena / this.odigrane).toFixed(2) as unknown as number : 0;
  }

  
  getStats() {
    return {
      odigrane: this.odigrane,
      pobedjene: this.pobedjene,
      procenat: this.getProcenat(),
      poeniPoPartiji: this.getPoeniPoPartiji(),
      ukupnoPoena: this.ukupnoPoena,
    };
  }
}

export default function Stats() {
  const userData = localStorage.getItem("user");
  const username = userData ? JSON.parse(userData).username : "Nepoznati korisnik";

  
  const playerStats = new PlayerStats(12, 7, 85);
  const stats = playerStats.getStats();

  return (
    <div className="stats-container">
      <h1>Statistika igrača: {username}</h1>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Odigrane partije</th>
            <th>Pobedjene partije</th>
            <th>Procenat pobeda</th>
            <th>Poeni po partiji</th>
            <th>Ukupno poena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stats.odigrane}</td>
            <td>{stats.pobedjene}</td>
            <td>{stats.procenat}%</td>
            <td>{stats.poeniPoPartiji}</td>
            <td>{stats.ukupnoPoena}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
