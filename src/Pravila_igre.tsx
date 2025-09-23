import React from "react";

export default function PravilaIgre() {
  return (
   <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gap: "20px",
        textAlign: "center",
      }}
    >
      {/* Gornja dva diva */}
      <div style={{ gridColumn: "1 / 4", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h3>Opis</h3>
          <p>
            Catan je strateška igra trgovine i izgradnje. Cilj je osvojiti 10 poena izgradnjom naselja,
            gradova i puteva te korišćenjem posebnih bonusa.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Cilj igre</h3>
          <p>
            Budi prvi igrač sa 10 poena, prikupljajući resurse i pametno ih razmenjujući kako bi
            gradio i razvijao svoje teritorije.
          </p>
        </div>
      </div>

      {/* Donji red: levi, centralni, desni */}
      <div style={{ gridColumn: "1 / 2" }}>
        <h3>Tok poteza</h3>
        <ol>
          <li>Bacite kockice – svi igrači dobijaju resurse sa odgovarajućih polja.</li>
          <li>Trgujte sa igračima ili preko luka.</li>
          <li>Gradite puteve, naselja i gradove ili kupujte karte razvoja.</li>
        </ol>
      </div>

      <div style={{ gridColumn: "2 / 3" }}>
        <h3>Poeni</h3>
        <p>
          Naselje: 1 poen | Grad: 2 poena | Karte pobede: 1 poen <br />
          Najduži put: 2 poena | Najveća vojska: 2 poena
        </p>
      </div>

      <div style={{ gridColumn: "3 / 4" }}>
        <h3>Razbojnik</h3>
        <p>
          Kad se baci 7, igrači sa više od 7 karata odbacuju polovinu. Bacajući 7 pomerate
          razbojnika na novo polje, blokirate ga i uzimate 1 kartu od igrača pored tog polja.
        </p>
      </div>
    </div>
  );
}