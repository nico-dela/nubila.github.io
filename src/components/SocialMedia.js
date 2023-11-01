import React from "react";
import socialMediaIcon from "../assets/images/social-media.png";
import "../styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-container">
      <a
        href="https://linktr.ee/nubila"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img src={socialMediaIcon} alt="Acceso a nuestras redes" />
      </a>
    </div>
  );
};

export default SocialMedia;
