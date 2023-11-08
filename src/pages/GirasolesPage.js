import React from "react";
import { motion } from "framer-motion"; // Importa motion de Framer Motion
import GirasolesImage from "../assets/images/girasoles-letra.png";
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
  }
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

const GirasolesPage = () => {
  return (
    <div className="lyrics">
      <motion.div
        className="image-container"
        variants={imageVariants} // Aplica las variantes de la imagen
        initial="initial"
        animate="animate"
      >
        <img src={GirasolesImage} alt="Girasoles partitura" />
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

export default GirasolesPage;
