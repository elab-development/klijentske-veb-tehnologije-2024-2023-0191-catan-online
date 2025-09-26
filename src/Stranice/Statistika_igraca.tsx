import React from "react";
import "./Statistika_igraca.css";
import { PlayerStats } from "../Modeli/Statistika"; 

export default function Stats() {
  const userData = localStorage.getItem("user");
  const username = userData
    ? JSON.parse(userData).username
    : "Nepoznati korisnik";

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
