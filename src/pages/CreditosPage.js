import React from "react";
import lacasaLogo from "../assets/images/lacasa-logo.png";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/CreditosPage.css";
import { Link } from "react-router-dom";

const CreditosPage = () => {
  return (
    <div className="container">
      <h1 className="heading">CREDITOS</h1>
      <div className="credits-container">
        <h3 style={{ fontSize: "1.5rem" }}>Diseño y arte</h3>
        <div className="credit">
          Portada y arte realizados por Tobias y Candela Gencarelli y Julian
          Medrano
        </div>

        <br></br>
        <br></br>

        <h3 style={{ fontSize: "1.5rem" }}>Musicxs</h3>
        <div className="credit">Voz, coros y bajo: Mateo Gencarelli</div>
        <div className="credit">Voz, coros y teclados: Tobias Gencarelli</div>
        <div className="credit">Voz y coros: Candela Gencarelli</div>
        <div className="credit">Teclados: Ulises Gencarelli</div>
        <div className="credit">Coros y batería: Araceli Bonfigli</div>
        <div className="credit">Coros y saxo: Julian Medrano</div>
        <div className="credit">Coros y guitarra: Nicolás de la Cruz</div>

        <br></br>
        <br></br>

        <h3 style={{ fontSize: "1.5rem" }}>
          Producción musical y postproducción de audio
        </h3>
        <div className="credit">
          Técnica de grabación realizada por Gregorio López
        </div>
        <div className="credit">
          Mezclas en HOME KONG studio por Mariano Garione y Tomás Salguero
        </div>
        <div className="credit">
          Mastering en Surlumina Estudio por Fico Borgognone
        </div>

        <br></br>
        <br></br>

        <h3 style={{ fontSize: "1.5rem" }}>
          Nubila forma parte del colectivo artístico
        </h3>
        <div>
          <a
            href={
              "https://www.instagram.com/la.casa.mutante/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lacasaLogo} alt="La Casa Mutante Logo" className="logo" />
          </a>
        </div>
      </div>
      <Link to="/" className="back-to-home-link">
        <img src={volverImage} alt="Volver" />
      </Link>
    </div>
  );
};

export default CreditosPage;
