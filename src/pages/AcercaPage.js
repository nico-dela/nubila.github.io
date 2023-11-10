import React from "react";
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

const sectionVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AcercaPage = () => {
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="heading">UN CD-WEB</h1>
      <motion.div className="collaborate" variants={sectionVariants}>
        <p>
          Un rincón digital el cual se centra menos en la obra resultante y más
          en el proceso, el cuidado y la artesanía necesarios para llegar allí.
        </p>
        <strong>¿Que ideas seguimos?</strong>
        <ol>
          <li>
            Hacer un{" "}
            <a
              href="https://joelhooks.com/digital-garden"
              target="_blank"
              rel="noopener noreferrer"
            >
              jardín digital
            </a>
          </li>
          <li>Elaborar una obra en varios lenguajes artisticos</li>
          <li>
            La cultura es de{" "}
            <a
              href="https://archive.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dominio público
            </a>
          </li>
        </ol>
        <strong>¿Que decisiones tomamos?</strong>
        <ul>
          <li>
            Publicar nuestra musica en{" "}
            <a
              href={"https://bandcamp.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bandcamp
            </a>{" "}
            y esperar la apertura de la distribuidora nacional{" "}
            <a
              href={
                "https://www.argentina.gob.ar/noticias/grupos-y-solistas-de-musica-podran-subir-sus-canciones-gratis-todas-las-plataformas-de"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              AMA
            </a>
          </li>
          <li>Traducir el universo de la canción en lenguaje gráfico</li>
          <li>
            Crear nuestra tipografía (
            <a
              href={
                "https://drive.google.com/file/d/1TVzVx5IURQCXLEIOxYM6mBDrkLuyXAgg/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Acá
            </a>{" "}
            la podés descargar)
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="back-to-home-link"
        initial="initial"
        animate="animate"
      >
        <Link to="/">
          <img src={volverImage} alt="Volver" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AcercaPage;
