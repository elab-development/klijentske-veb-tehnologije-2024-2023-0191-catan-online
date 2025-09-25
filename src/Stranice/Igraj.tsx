import React, { useState } from "react";
import "./Igraj.css";

import pustinjaImg from "../Slike/pustinja.png";
import drvoImg from "../Slike/drvo.png";
import ovcaImg from "../Slike/ovca.png";
import psenicaImg from "../Slike/psenica.png";
import ciglaImg from "../Slike/cigla.png";
import kamenImg from "../Slike/kamen.png";

const hexLayout = [3, 4, 5, 4, 3];

const resourceLimits: Record<string, number> = {
  pustinja: 1,
  drvo: 4,
  ovca: 4,
  pšenica: 4,
  cigla: 3,
  kamen: 3,
};

const numberTokens = [
  5, 2, 6, 3, 8, 10, 9,
  12, 11, 4, 8, 10, 9,
  4, 5, 6, 3, 11,
];

const outerRing = [0, 1, 2, 6, 11, 15, 18, 17, 16, 12, 7, 3];
const innerRing = [4, 5, 10, 14, 13, 8];
const center = 9;
const cornerIndices = [0, 2, 11, 18, 16, 7];

export default function Igraj() {
  const [tiles, setTiles] = useState<(string | null)[]>(Array(19).fill(null));
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(Object.keys(resourceLimits).map(r => [r, 0]))
  );
  const [numbers, setNumbers] = useState<(number | null)[]>(Array(19).fill(null));
  const [rolled, setRolled] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  // jednostavno: dva igrača
  const [players, setPlayers] = useState([
    { id: 1, name: "Igrač 1", resources: { drvo: 0, ovca: 0, pšenica: 0, cigla: 0, kamen: 0 } },
    { id: 2, name: "Igrač 2", resources: { drvo: 0, ovca: 0, pšenica: 0, cigla: 0, kamen: 0 } },
  ]);
  const [log, setLog] = useState<string[]>([]);

  const handleSelect = (idx: number, res: string) => {
    if (tiles[idx]) return;
    if (counts[res] >= resourceLimits[res]) {
      alert(`Nema više dostupnih polja za ${res}`);
      return;
    }
    const newTiles = [...tiles];
    newTiles[idx] = res;
    setTiles(newTiles);
    setCounts({ ...counts, [res]: counts[res] + 1 });
  };

  const rollDiceAndAssign = () => {
    if (tiles.includes(null)) {
      alert("Moraš popuniti sva polja pre dodele brojeva!");
      return;
    }

    const dice = Math.floor(Math.random() * 6) + 1;
    setRolled(dice);

    const startCorner = cornerIndices[dice - 1];
    const startOuterIdx = outerRing.indexOf(startCorner);
    const rotatedOuter = outerRing.slice(startOuterIdx).concat(outerRing.slice(0, startOuterIdx));

    let numIndex = 0;
    const newNumbers: Array<number | null> = Array(19).fill(null);

    rotatedOuter.forEach(idx => {
      if (tiles[idx] !== "pustinja") newNumbers[idx] = numberTokens[numIndex++];
    });

    let startInnerIdx = 0;
    if (startCorner === 0) startInnerIdx = 0;
    else if (startCorner === 2) startInnerIdx = 1;
    else if (startCorner === 6) startInnerIdx = 2;
    else if (startCorner === 15) startInnerIdx = 3;
    else if (startCorner === 16) startInnerIdx = 4;
    else if (startCorner === 3) startInnerIdx = 5;

    const rotatedInner = innerRing.slice(startInnerIdx).concat(innerRing.slice(0, startInnerIdx));
    rotatedInner.forEach(idx => {
      if (tiles[idx] !== "pustinja") newNumbers[idx] = numberTokens[numIndex++];
    });

    if (tiles[center] !== "pustinja") newNumbers[center] = numberTokens[numIndex++];
    setNumbers(newNumbers);
  };

  // 🎲 novo bacanje tokom igre
  const rollGameDice = () => {
    const dice = Math.floor(Math.random() * 11) + 2; // 2-12
    setRolled(dice);

    // pronalazimo pločice sa tim brojem
    const hitTiles = numbers
      .map((num, idx) => (num === dice ? idx : null))
      .filter((idx): idx is number => idx !== null);

    if (hitTiles.length === 0) {
      setLog(prev => [`Baceno ${dice}, niko ništa ne dobija.`, ...prev]);
      return;
    }

    // dodela resursa svim igračima (za sada jednostavno)
    const resType = (idx: number) => tiles[idx]!;
    const newPlayers = players.map(p => {
      const updated = { ...p, resources: { ...p.resources } };
      hitTiles.forEach(idx => {
        const r = resType(idx);
        if (r !== "pustinja") {
          updated.resources[r as keyof typeof updated.resources] += 1;
        }
      });
      return updated;
    });

    setPlayers(newPlayers);
    setLog(prev => [`Baceno ${dice}, dodeljeni resursi: ${hitTiles.map(i => tiles[i]).join(", ")}`, ...prev]);
  };

  const endGame = () => {
    console.log("Rezultati:", players);
    window.location.reload(); // reset stranice
  };

  const resourceImages: Record<string, string> = {
    pustinja: pustinjaImg,
    drvo: drvoImg,
    ovca: ovcaImg,
    pšenica: psenicaImg,
    cigla: ciglaImg,
    kamen: kamenImg,
  };

  const resourceEmojis: Record<string, string> = {
    pustinja: "🏜",
    drvo: "🌲",
    ovca: "🐑",
    pšenica: "🌾",
    cigla: "🧱",
    kamen: "🪨",
  };

  let counter = 0;

  return (
    <div className="board-wrapper">
      <h1>Igraj Catan</h1>
      {rolled && <h3>Poslednji broj: <strong>{rolled}</strong></h3>}
      <div className="board">
        {hexLayout.map((count, rowIdx) => (
          <div key={rowIdx} className="row">
            {Array(count).fill(null).map((_, i) => {
              const idx = counter++;
              return (
                <div key={idx} className="hex">
                  {tiles[idx] ? (
                    <>
                      <img src={resourceImages[tiles[idx]!]} alt={tiles[idx]!} />
                      {numbers[idx] && <div className="number">{numbers[idx]}</div>}
                    </>
                  ) : (
                    <div className="options-grid">
                      {Object.keys(resourceLimits).map(res => (
                        <button key={res} onClick={() => handleSelect(idx, res)}>
                          {resourceEmojis[res]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div className="controls">
        {!started ? (
          <>
            <button className="dice-btn" onClick={rollDiceAndAssign}>
              Baci kocku i dodeli brojeve
            </button>
            <button
              className="start-btn"
              onClick={() => setStarted(true)}
            >
              Počni igru
            </button>
          </>
        ) : (
          <>
            <button className="dice-btn" onClick={rollGameDice}>
              Baci kocku
            </button>
            <button className="start-btn" onClick={endGame}>
              Završi partiju
            </button>
          </>
        )}
      </div>

      {started && (
        <div className="stats">
          <h2>Statistika</h2>
          {players.map(p => (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <p>🌲 {p.resources.drvo} 🐑 {p.resources.ovca} 🌾 {p.resources.pšenica} 🧱 {p.resources.cigla} 🪨 {p.resources.kamen}</p>
            </div>
          ))}
          <h3>Istorija bacanja:</h3>
          <ul>
            {log.map((entry, idx) => (
              <li key={idx}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
