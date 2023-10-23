import React, { useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "../styles/AcercaPage.css";

const AcercaPage = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [backgroundColor, setBackgroundColor] = useState("");

  const opts = {
    height: screenHeight * 0.7,
    width: screenWidth,
    playerVars: {
      autoplay: 1,
    },
  };

  const pauseMusic = () => {
    const audioRef = document.querySelector("audio");
    if (audioRef && !audioRef.paused) {
      audioRef.pause();
    }
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
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
      <h1 className="heading">SENTIMIENTO OCEÁNICO</h1>
      <div>
        <YouTube
          videoId="zO1L7Grx1VQ"
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={onPlayerStateChange}
        />
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default AcercaPage;
