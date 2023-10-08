import React from "react";
import { Link } from "react-router-dom";

import oceanicaImage from "../assets/images/oceanica-letra.png";
import { Transition, CSSTransition } from "react-transition-group";
import "../styles/LyricsPage.css";

const OceanicaPage = () => {
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
            <img src={oceanicaImage} alt="Oceánica partitura" />
            <Link to="/nubila" className="link">
              <button className="button">Volver</button>
            </Link>
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default OceanicaPage;
