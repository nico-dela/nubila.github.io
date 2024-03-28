import React, { useEffect, useState } from "react";
import SocialMedia from "../components/SocialMedia";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const LandingPage = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const generateRandomButton = (link, isStrikeThrough) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
    
      const buttonWidth = 110;
      const buttonHeight = 40;
    
      const horizontalMargin = 70; 
      const verticalMargin = 70;
    
      let randomX = Math.floor(
        horizontalMargin +
        Math.random() * (screenWidth - buttonWidth - 2 * horizontalMargin)
      );
    
      let randomY = Math.floor(
        verticalMargin +
        Math.random() * (screenHeight - buttonHeight - 2 * verticalMargin)
      );
    
      // Verificar si el botón está fuera del área visible de la pantalla
      if (randomX + buttonWidth > screenWidth) {
        randomX = screenWidth - buttonWidth - horizontalMargin;
      }
    
      if (randomY + buttonHeight > screenHeight) {
        randomY = screenHeight - buttonHeight - verticalMargin;
      }
    
      const randomRotation = Math.floor(Math.random() * 2); // 0 o 1
    
      return (
        <motion.div
          key={link.url}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={buttonVariants}
        >
          <Link
            key={link.url}
            to={`/${link.url}`}
            style={{
              position: "absolute",
              top: randomY,
              left: randomX,
              width: buttonWidth,
              height: buttonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: isStrikeThrough ? "line-through" : "none",
              color: "#1C1C1C",
              transform: `rotate(${randomRotation * 90}deg)`,
              transition: "transform 0.5s ease",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontFamily: "Nubifont",
              fontSize: 35,
              padding: "5px 10px", // Ajusto el espacio interno
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = "1";
            }}
          >
            {link.text}
          </Link>
        </motion.div>
      );
    };    

    const links = [
      { text: "OCEANICA", url: "oceanica" },
      { text: "GIRASOLES", url: "girasoles" },
      { text: "BOLERITO DE STAPELIA", url: "bolerito" },
      { text: "FRIO", url: "frio" },
      { text: "MARIPOSA ORIGAMI", url: "mariposa" },
      { text: "LIMONERO", url: "limonero" },
    ];

    const randomIndex = Math.floor(Math.random() * (links.length + 1)); // Agrega 1 a la longitud para incluir la posibilidad de ningún botón tachado
    const selectedLink = randomIndex < links.length ? links[randomIndex] : null;

    const generatedButtons = links.map((link) =>
      generateRandomButton(link, link === selectedLink)
    );

    setButtons(generatedButtons);
  }, []);

  const hexColors = [
    "#86B0A6",
    "#A6C4CF",
    "#E1CFCB",
    "#2e7b7f",
    "#557B86",
    "#EB7E83",
  ];

  const randomGradient = hexColors
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .join(",");

  return (
    <div
      className="landing-page"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="background-gradient"
        style={{
          background: `linear-gradient(to bottom, ${randomGradient})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {buttons}
      <SocialMedia />
    </div>
  );
};

export default LandingPage;
