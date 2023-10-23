import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

const LandingPage = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const generateRandomButton = (link, isStrikeThrough) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const buttonWidth = 250;
      const buttonHeight = 40;

      const musicPlayerHeight = 80;

      const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
      const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight - musicPlayerHeight));

      const randomRotation = Math.floor(Math.random() * 2); // 0 o 1

      return (
        <Link
          key={link.url}
          to={`/nubila/${link.url}`}
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
            color: "#000",
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
      );
    };

    const links = [
      { text: "OCEÁNICA", url: "oceanica" },
      { text: "GIRASOLES", url: "girasoles" },
      { text: "BOLERITO DE STAPELIA", url: "bolerito" },
      { text: "FRÍO", url: "frio" },
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
      </div>
    );
};

export default LandingPage;
