import React from "react";
import { Link } from "react-router-dom";
import lacasaLogo from "../assets/images/lacasa-logo.png";
import "../styles/CreditosPage.css";

const CreditosPage = () => {
  return (
    <div className="container">
      <h1 className="heading">CREDITOS</h1>
      <div className="credits">
        <h2>Participantes del proyecto</h2>
        <ul>
          <li className="credit-item">Candela Gencarelli</li>
          <li className="credit-item">Mateo Gencarelli</li>
          <li className="credit-item">Tobias Gencarelli</li>
          <li className="credit-item">Ulises Gencarelli</li>
          <li className="credit-item">Araceli Bonfigli</li>
          <li className="credit-item">Julian Medrano</li>
          <li className="credit-item">Nicolás de la Cruz</li>
        </ul>

        <h2>Colaboradores Especiales</h2>
        <ul>
          <li className="credit-item">Gregorio Lopez</li>
        </ul>

        <h2>Agradecimientos</h2>
        <div className="item">
          <img src={lacasaLogo} alt="La Casa Mutante Logo" className="logo" />
        </div>
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default CreditosPage;
