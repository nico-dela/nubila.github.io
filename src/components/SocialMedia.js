import React from "react";
import instagramIcon from "../assets/images/instagram.svg";

import "../styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <a
      href="https://www.instagram.com/nubila___/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-link"
    >
      <img
        src={instagramIcon}
        alt="Instagram"
        style={{ width: "40px", height: "40px" }} // Ajusta el tamaño según tus preferencias
      />
    </a>
  );
};

export default SocialMedia;
