import React from 'react';
import { Link } from 'react-router-dom';

const ProcesoPage = () => {
  return (
    <div>
      <h1>Proceso</h1>
      {/* Agrega aquí el código JSX de tu página de detalles */}
      <Link to="/nubila" style={{ textDecoration: "none" }}>
        <button
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            transition: "transform 0.3s ease", // Transición suave
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "Courier New, monospace", // Especifica la fuente de texto aquí
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.5'; // Cambiar el color de fondo al hacer hover
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'; // Restaurar el color de fondo al dejar de hacer hover
          }}
        >
          Volver
        </button>
      </Link>
    </div>
  );
};

export default ProcesoPage;
