import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CreditosPage.css";

const CreditosPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Créditos</h1>
      <div className="credits">
        {/* Add your credit details here */}
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default CreditosPage;
