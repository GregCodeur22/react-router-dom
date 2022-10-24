import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Component/Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="container">
        <li>
          <NavLink to="/">Acceuil</NavLink>
        </li>
        <li className="display-user">
          Utilisateur
          <ul className="display">
            <NavLink to="/user-1">
              <li>user-1</li>
            </NavLink>

            <NavLink to="/user-2">
              <li>user-2</li>
            </NavLink>

            <NavLink to="/user-3">
              <li>user-3</li>
            </NavLink>
          </ul>
        </li>
        <li>
          <NavLink to="/information">Information</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
