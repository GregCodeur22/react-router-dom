import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./Page/Acceuil";
import Information from "./Page/Information";
import Utilisateur1 from "./Page/User1";
import Utilisateur from "./Page/Utilisateur";
import Utilisateur2 from "./Page/Utilisateur2";
import Utilisateur3 from "./Page/Utilisateur3";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/information" element={<Information />} />
          <Route path="/Utilisateur" element={<Utilisateur />} />
          <Route path="/user-1" element={<Utilisateur1 />} />
          <Route path="/user-2" element={<Utilisateur2 />} />
          <Route path="/user-3" element={<Utilisateur3 />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
