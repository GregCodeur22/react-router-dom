import React from "react";
import Navigation from "../Component/Navigation";
import "../style/Page/Home.css";

const Acceuil = () => {
  return (
    <div className="container">
      <Navigation />
      <div>
        <h1>Page d'acceuil</h1>
        <p>Bienvenu sur la page d'acceuil</p>
      </div>
    </div>
  );
};

export default Acceuil;
