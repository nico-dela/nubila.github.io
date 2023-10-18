import React, { useState } from "react";
import { Link } from "react-router-dom";
import laCasaLogo from "../assets/images/lacasa-logo.png";
import "../styles/Menu.css";

const Menu = ({ background }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="menu-container"
      style={{
        background: `linear-gradient(to bottom, ${background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button className="menu-button" onClick={toggleMenu}>
        <span className={`menu-bar ${showMenu ? "open" : ""}`}></span>
        <span className={`menu-bar ${showMenu ? "open" : ""}`}></span>
        <span className={`menu-bar ${showMenu ? "open" : ""}`}></span>
      </button>
      <div className={`menu-dropdown ${showMenu ? "active" : ""}`}>
        <div className="menu-item">
          <Link to="/nubila" className="menu-link" onClick={toggleMenu}>
            <img
              src={laCasaLogo}
              alt="La Casa Mutante Logo"
              className="menu-logo"
            />
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/nubila/acerca" className="menu-link" onClick={toggleMenu}>
            SENTIMIENTO OCEÁNICO
          </Link>
        </div>
        <div className="menu-item">
          <Link
            to="/nubila/creditos"
            className="menu-link"
            onClick={toggleMenu}
          >
            CRÉDITOS
          </Link>
        </div>
        <div className="menu-item">
          <Link
            to="/nubila/colabora"
            className="menu-link"
            onClick={toggleMenu}
          >
            COLABORÁ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
