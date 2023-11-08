import React, { useState } from "react";
import YouTube from "react-youtube";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/AcercaPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const titleVariants = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

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
    <motion.div
      className="container"
      style={{ backgroundColor }}
      id="main-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="heading"
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        SENTIMIENTO OCEANICO
      </motion.h1>
      <motion.div>
        <YouTube
          videoId="zO1L7Grx1VQ"
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={onPlayerStateChange}
        />
      </motion.div>
      <motion.div
        className="button-container"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
      >
        <Link to="/" className="back-to-home-link">
          <img src={volverImage} alt="Volver" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AcercaPage;
