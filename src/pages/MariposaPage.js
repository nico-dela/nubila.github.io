import React, { useState } from "react";

import { Transition, CSSTransition } from "react-transition-group";
import mariposaImage from "../assets/images/mariposa-letra.png";
import "../styles/LyricsPage.css";

const MariposaPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
            <img
              src={mariposaImage}
              alt="Mariposa origami partitura"
              className={isExpanded ? "expanded" : ""}
              onClick={toggleExpand}
            />
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default MariposaPage;
