import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

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
        <span className={showMenu ? 'menu-bar open' : 'menu-bar'}></span>
        <span className={showMenu ? 'menu-bar open' : 'menu-bar'}></span>
        <span className={showMenu ? 'menu-bar open' : 'menu-bar'}></span>
      </button>
      {showMenu && (
        <div className="menu-dropdown">
          <div className="menu-item">
            <Link to="/nubila/creditos" className="menu-link" onClick={toggleMenu}>
              Créditos
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/nubila/acerca" className="menu-link" onClick={toggleMenu}>
              Nubila
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/nubila/colabora" className="menu-link" onClick={toggleMenu}>
              Colaborá
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
