import React from "react";

import { Transition, CSSTransition } from "react-transition-group";
import fríoImage from "../assets/images/frio-letra.png";
import "../styles/LyricsPage.css";

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
            <img src={fríoImage} alt="Frío partitura" />
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default FrioPage;
