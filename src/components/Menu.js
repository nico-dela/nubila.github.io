import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import nubilaLogo from "../assets/images/nubila-logo.png";
import "../styles/Menu.css";

const Menu = ({ background }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
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
      <motion.div
        className={`menu-dropdown ${showMenu ? "active" : ""}`}
        initial="hidden"
        animate={showMenu ? "visible" : "hidden"}
        variants={menuVariants}
      >
        <div className="menu-item">
          <Link to="/" className="menu-link" onClick={toggleMenu}>
            <img
              src={nubilaLogo}
              alt="Nubila Logo"
              className="menu-logo"
              color="#8191BA"
            />
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/sentimiento" className="menu-link" onClick={toggleMenu}>
            SENTIMIENTO OCEANICO
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/acerca" className="menu-link" onClick={toggleMenu}>
            UN CD-WEB
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/creditos" className="menu-link" onClick={toggleMenu}>
            CREDITOS
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/colabora" className="menu-link" onClick={toggleMenu}>
            COLABORA
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
