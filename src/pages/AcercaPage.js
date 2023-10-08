import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/AcercaPage.css";

const AcercaPage = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cargar la API de YouTube de manera síncrona
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const initializeYouTubePlayer = () => {
      console.log("initializeYouTubePlayer called");
      new window.YT.Player("youtube-player", {
        height: screenHeight * 0.8,
        width: screenWidth,
        videoId: "zO1L7Grx1VQ", // Cambia esto al ID de tu video
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // Definir la función de callback que se ejecutará cuando se cargue la API
    window.onYouTubeIframeAPIReady = initializeYouTubePlayer;

    // Adjuntar el script al DOM
    const scriptTag = document.getElementsByTagName("script")[0];
    scriptTag.parentNode.insertBefore(tag, scriptTag);

    // Limpieza: eliminar el evento onYouTubeIframeAPIReady cuando se desmonta el componente
    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, [screenHeight, screenWidth]);

  const onPlayerReady = (event) => {
    // El reproductor de YouTube está listo
    event.target.playVideo(); // Reproducir automáticamente el video
  };

  const onPlayerStateChange = (event) => {
    // Manejar eventos de reproducción
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setBackgroundColor("rgb(65, 65, 65)");
      console.log('Play');
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      setBackgroundColor("rgb(255, 255, 255)");
      console.log('Pause');
    }
  };

  return (
    <div className={`container ${isPlaying ? "playing" : ""}`} style={{ backgroundColor: backgroundColor, transition: "background-color 0.3s ease" }}>
      <h1 className="heading">Sentimiento oceánico</h1>
      <div className="credits-video">
          <div id="youtube-player"></div>
      </div>
      <Link to="/nubila" className="link">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
};

export default AcercaPage;
