import React from "react";
import instagramIcon from "../assets/images/instagram.svg";
import spotifyIcon from "../assets/images/spotify.svg";

import "../styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div id="main-container">
      <a
        href="https://www.instagram.com/nubila___/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <img
          src={instagramIcon}
          alt="Instagram"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
      <a
        href="https://open.spotify.com/artist/6fWZzJGm1glU7LAu374FSL?si=wsUOfKliQ9613oxyqYk7NA"
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-link"
      >
        <img
          src={spotifyIcon}
          alt="Spotify"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
