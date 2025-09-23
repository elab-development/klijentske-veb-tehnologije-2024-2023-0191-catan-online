import React from "react";

export default function Stats() {
 
  const userData = localStorage.getItem("user");
  const username = userData ? JSON.parse(userData).username : "Nepoznati korisnik";


  const stats = {
    odigrane: 0,
    pobedjene: 0,
    procenat: 0,
    poeniPoPartiji: 0,
    ukupnoPoena: 0,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Statistika igrača: {username}</h1>
      <table border={1} style={{ borderCollapse: "collapse", marginTop: "20px" }}>
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