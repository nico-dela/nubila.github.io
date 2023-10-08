import React from "react";
import { Link } from "react-router-dom";

import { Transition, CSSTransition } from "react-transition-group";
import boleritoImage from "../assets/images/bolerito-letra.png";
import "../styles/LyricsPage.css";

const BoleritoPage = () => {
  return (
    <Transition in={true} timeout={300} appear={true}>
      {(status) => (
        <CSSTransition
          in={status === "entered"}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="lyrics">
            <img src={boleritoImage} alt="Bolero de stapelia partitura" />
            <Link to="/nubila" className="link">
              <button className="button">Volver</button>
            </Link>
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default BoleritoPage;
