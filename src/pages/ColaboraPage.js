import React from "react";
import { Link } from "react-router-dom";
import "../styles/ColaboraPage.css";

const ColaboraPage = () => {
  return (
    <div className="container">
      <h1 className="heading">COLABORÁ</h1>
      <div className="collaborate">
        <strong>¡Gracias por asomarte!</strong>
        <p>
          Cada contribución, grande o pequeña, nos ayuda a financiar
          grabaciones, producciones en vivo y otras actividades que nos permiten
          seguir haciendo lo que amamos.
        </p>
        <p>Si queres colaborar, podés hacerlo de las siguientes formas:</p>
        <ul>
          <li>
            Contribuir a nuestro proyecto a través de donaciones en línea.
          </li>
          <li>Asistir a nuestros conciertos y/o comprar merchandising.</li>
          <li>
            Compartir nuestra música y promocionar el proyecto en las redes
            sociales.
          </li>
        </ul>
        <p>
          Tu apoyo es esencial para continuar creando y
          compartiendo arte.
        </p>
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default ColaboraPage;
