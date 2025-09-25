export default function Home() {
  const user = localStorage.getItem("userEmail");

  return (
    <div>
      <h1>Dobrodošao!</h1>
      {user ? <p>Uspešno si se registrovao kao: {user}</p> : <p>Nema registrovanog korisnika.</p>}
    </div>
  );
}