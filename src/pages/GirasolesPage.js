import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CommonPage.css";

const GirasolesPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Girasoles</h1>
      <div className="credits">
        {/* Add your credit details here */}
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default GirasolesPage;
