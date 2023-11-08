import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import nubilaLogo from "../assets/images/nubila-logo.png";
import "../styles/Menu.css";

const Menu = ({ background }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("Estado de showMenu:", showMenu); // Agrega un registro para verificar el estado

  };

  const closeMenu = () => {
    setShowMenu(false);
    console.log("Menú cerrado");

  };

  // Utiliza un ref para el menú y un efecto para escuchar eventos de clic en el documento
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
        console.log("Menú cerrado al hacer clic afuera");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        ref={menuRef}
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
          <Link to="/acerca" className="menu-link" onClick={toggleMenu}>
            SENTIMIENTO OCEANICO
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
