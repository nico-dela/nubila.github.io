import React, { useState } from "react";
import YouTube from "react-youtube";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/AcercaPage.css";
import { Link } from "react-router-dom";

const AcercaPage = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [backgroundColor, setBackgroundColor] = useState("");

  const opts = {
    height: screenHeight * 0.7,
    width: screenWidth,
    playerVars: {
      autoplay: 0,
    },
  };

  const pauseMusic = () => {
    const audioRef = document.querySelector("audio");
    if (audioRef && !audioRef.paused) {
      audioRef.pause();
    }
  };

  const onPlayerReady = (event) => {
    // event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setBackgroundColor("rgb(65, 65, 65)");
      pauseMusic();
    } else {
      setBackgroundColor("");
    }
  };

  return (
    <div className="container" style={{ backgroundColor }} id="main-container">
      <h1 className="heading">SENTIMIENTO OCEANICO</h1>
      <div>
        <YouTube
          videoId="zO1L7Grx1VQ"
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={onPlayerStateChange}
        />
      </div>
      <div className="button-container">
        <Link to="/" className="back-to-home-link">
          <img src={volverImage} alt="Volver" />
        </Link>
      </div>
      <a
        href="https://linktr.ee/nubila"
        target="_blank"
        rel="noopener noreferrer"
        className="link-tree-link"
      >
        Accede a nuestras redes
      </a>
    </div>
  );
};

export default AcercaPage;
