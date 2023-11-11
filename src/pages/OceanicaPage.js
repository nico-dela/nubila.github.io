import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import oceanicaHorizontalImage from "../assets/images/oceanica-midi-horizontal.jpeg";
import oceanicaVerticalImage from "../assets/images/oceanica-midi-vertical.jpeg";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/LyricsPage.css";
import { Link } from "react-router-dom";

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const OceanicaPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const oceanicaImage = isMobile
    ? oceanicaVerticalImage
    : oceanicaHorizontalImage;

  return (
    <div className="lyrics">
      <motion.div
        className="image-container"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <img src={oceanicaImage} alt="Oceánica partitura" />
      </motion.div>
      {/* <a
        href={"https://drive.google.com/drive/my-drive"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Descarga la letra y los acordes de la canción
      </a> */}
      <motion.div
        className="back-to-home-link"
        variants={linkVariants}
        initial="initial"
        animate="animate"
      >
        <Link to="/">
          <img src={volverImage} alt="Volver" />
        </Link>
      </motion.div>
    </div>
  );
};

export default OceanicaPage;
