
  import React, { useState } from "react";
  import "./Igraj.css";

  import pustinjaImg from "./slike/pustinja.png";
  import drvoImg from "./slike/drvo.png";
  import ovcaImg from "./slike/ovca.png";
  import psenicaImg from "./slike/psenica.png";
  import ciglaImg from "./slike/cigla.png";
  import kamenImg from "./slike/kamen.png";



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

  const outerRing = [0,1,2,6,11,15,18,17,16,12,7,3];
  const innerRing = [4,5,10,14,13,8];
  const center = 9;
  const cornerIndices = [0,2,11,18,16,7];

  export default function Igraj() {
    const [tiles, setTiles] = useState<(string|null)[]>(Array(19).fill(null));
    const [counts,setCounts] = useState<Record<string,number>>(
      Object.fromEntries(Object.keys(resourceLimits).map(r=>[r,0]))
    );
    const [numbers,setNumbers] = useState<(number|null)[]>(Array(19).fill(null));
    const [rolled,setRolled] = useState<number|null>(null);

    const handleSelect = (idx:number,res:string)=>{
      if(tiles[idx]) return;
      if(counts[res]>=resourceLimits[res]){
        alert(`Nema više dostupnih polja za ${res}`);
        return;
      }
      const newTiles = [...tiles];
      newTiles[idx] = res;
      setTiles(newTiles);
      setCounts({...counts,[res]:counts[res]+1});
    }

    const rollDiceAndAssign = ()=>{
      if(tiles.includes(null)){
        alert("Moraš popuniti sva polja pre dodele brojeva!");
        return;
      }

      const dice = Math.floor(Math.random()*6)+1;
      setRolled(dice);

      const startCorner = cornerIndices[dice-1];
      const startOuterIdx = outerRing.indexOf(startCorner);
      const rotatedOuter = outerRing.slice(startOuterIdx).concat(outerRing.slice(0,startOuterIdx));

      let numIndex=0;
      const newNumbers:Array<number|null> = Array(19).fill(null);

      rotatedOuter.forEach(idx=>{
        if(tiles[idx]!=="pustinja") newNumbers[idx]=numberTokens[numIndex++];
      });

      let startInnerIdx=0;
      if(startCorner===0) startInnerIdx=0;
      else if(startCorner===2) startInnerIdx=1;
      else if(startCorner===6) startInnerIdx=2;
      else if(startCorner===15) startInnerIdx=3;
      else if(startCorner===16) startInnerIdx=4;
      else if(startCorner===3) startInnerIdx=5;

      const rotatedInner = innerRing.slice(startInnerIdx).concat(innerRing.slice(0,startInnerIdx));
      rotatedInner.forEach(idx=>{
        if(tiles[idx]!=="pustinja") newNumbers[idx]=numberTokens[numIndex++];
      });

      if(tiles[center]!=="pustinja") newNumbers[center]=numberTokens[numIndex++];
      setNumbers(newNumbers);
    }

    const resourceImages: Record<string,string> = {
      pustinja: pustinjaImg,
      drvo: drvoImg,
      ovca: ovcaImg,
      pšenica: psenicaImg,
      cigla: ciglaImg,
      kamen: kamenImg
    }

    let counter=0;

    return (
      <div className="board-wrapper">
        <h1>Igraj Catan</h1>
        {rolled && <h3>Pao broj na kocki: <strong>{rolled}</strong></h3>}
        <div className="board">
          {hexLayout.map((count,rowIdx)=>(
            <div key={rowIdx} className="row">
              {Array(count).fill(null).map((_,i)=>{
                const idx = counter++;
                return (
                  <div key={idx} className="hex">
                    {tiles[idx]?(
                      <>
                        <img src={resourceImages[tiles[idx]!]} alt={tiles[idx]!} />
                        {numbers[idx] && <div className="number">{numbers[idx]}</div>}
                      </>
                    ):(
                      <div className="options">
                        {Object.keys(resourceLimits).map(res=>(
                          <button key={res} onClick={()=>handleSelect(idx,res)}>{res}</button>
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
          <button className="dice-btn" onClick={rollDiceAndAssign}>
            Baci kocku i dodeli brojeve
          </button>
  
           <button className="start-btn" onClick={() => alert("Igra počinje!")}>
            Počni igru
           </button> 
        </div>
      </div>
    )
  }