import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import frioHorizontalImage from "../assets/images/frio-midi-horizontal.jpeg";
import frioVerticalImage from "../assets/images/frio-midi-vertical.jpeg";
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
      duration: 0.3, // Duración de la animación
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
      duration: 0.3, // Duración de la animación
    },
  },
};

const FrioPage = () => {
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

  const fríoImage = isMobile ? frioVerticalImage : frioHorizontalImage;

  return (
    <div className="lyrics">
      <motion.div
        className="image-container"
        variants={imageVariants} // Aplica las variantes de la imagen
        initial="initial"
        animate="animate"
      >
        <img src={fríoImage} alt="Frío partitura" />
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
        variants={linkVariants} // Aplica las variantes del enlace
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

export default FrioPage;
