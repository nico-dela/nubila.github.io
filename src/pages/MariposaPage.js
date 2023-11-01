import React from "react";

import { Transition, CSSTransition } from "react-transition-group";
import mariposaImage from "../assets/images/mariposa-letra.png";
import "../styles/LyricsPage.css";

const MariposaPage = () => {
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
            <img src={mariposaImage} alt="Mariposa origami partitura" />
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default MariposaPage;
