import React from "react";

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
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default BoleritoPage;
