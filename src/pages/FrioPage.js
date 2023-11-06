import React from "react";

import { Transition, CSSTransition } from "react-transition-group";
import fríoImage from "../assets/images/frio-letra.png";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/LyricsPage.css";
import { Link } from "react-router-dom";

const FrioPage = () => {
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
            <div className="image-container">
              <img src={fríoImage} alt="Frío partitura" />
            </div>
            <Link to="/" className="back-to-home-link">
              <img src={volverImage} alt="Volver" />
            </Link>
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default FrioPage;
