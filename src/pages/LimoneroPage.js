import React from "react";

import { Transition, CSSTransition } from "react-transition-group";
import limoneroImage from "../assets/images/limonero-letra.png";
import "../styles/LyricsPage.css";

const LimoneroPage = () => {
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
            <img src={limoneroImage} alt="Limonero partitura" />
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default LimoneroPage;
