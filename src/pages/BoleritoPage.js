import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import boleritoImage from "../assets/images/bolerito-letra.png";
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
