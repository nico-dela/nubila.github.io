import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Transition, CSSTransition } from "react-transition-group";
import limoneroImage from "../assets/images/limonero-letra.png";
import "../styles/LyricsPage.css";

const LimoneroPage = () => {
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
              src={limoneroImage}
              alt="Limonero partitura"
              className={isExpanded ? "expanded" : ""}
              onClick={toggleExpand}
            />
            <Link to="/nubila" className="link">
              <button className="button">Volver</button>
            </Link>
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default LimoneroPage;
