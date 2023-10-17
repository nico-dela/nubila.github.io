import React from "react";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import "../styles/AcercaPage.css";

const AcercaPage = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const opts = {
    height: screenHeight * 0.70,
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
      pauseMusic();
    }
  };

  return (
    <div
      className="acerca-container"
      style={{
        transition: "background-color 0.3s ease",
      }}
    >
      <h1 className="heading">Sentimiento oceánico</h1>
        <div id="youtube-player">
          <YouTube videoId="zO1L7Grx1VQ" opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange}/>;
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default AcercaPage;
