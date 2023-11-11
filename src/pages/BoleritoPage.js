import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import boleritoHorizontalImage from "../assets/images/bolerito-midi-horizontal.jpeg";
import boleritoVerticalImage from "../assets/images/bolerito-midi-vertical.jpeg";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import "../styles/LyricsPage.css";

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

const BoleritoPage = () => {
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

  const boleritoImage = isMobile ? boleritoVerticalImage : boleritoHorizontalImage;

  return (
    <div className="lyrics">
      <motion.div
        className="image-container"
        variants={imageVariants} // Aplica las variantes de la imagen
        initial="initial"
        animate="animate"
      >
        <img src={boleritoImage} alt="Bolerito de Stapelia partitura" />
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

export default BoleritoPage;
