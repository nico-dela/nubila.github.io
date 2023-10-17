import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/LandingPage.css";

const LandingPage = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const generateRandomButton = (link, isStrikeThrough) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight * 0.8;

      const buttonWidth = 100; // Ancho del botón
      const buttonHeight = 40; // Alto del botón

      const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
      const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
      const randomRotation = Math.floor(Math.random() * 2); // 0 o 1

      return (
        <Link
          key={link.url} // Utilizamos la URL como clave única para evitar duplicados
          to={`/nubila/${link.url}`} // Ruta a la que se navegará al hacer clic en el botón
          style={{
            position: "absolute",
            top: randomY,
            left: randomX,
            width: buttonWidth,
            height: buttonHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: isStrikeThrough ? "line-through" : "none", // Aplica tachado si es el botón seleccionado
            color: "#000",
            transform: `rotate(${randomRotation * 90}deg)`, // Rotación aleatoria
            transition: "transform 0.3s ease", // Transición suave
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: "Nubifont", // Especifica la fuente de texto aquí
            fontSize: 40,
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.5"; // Cambiar el color de fondo al hacer hover
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1"; // Restaurar el color de fondo al dejar de hacer hover
          }}
        >
          {link.text}
        </Link>
      );
    };

    const links = [
      { text: "Oceánica", url: "oceanica" },
      { text: "Girasoles", url: "girasoles" },
      { text: "Bolerito de Stapelia", url: "bolerito" },
      { text: "Frío", url: "frio" },
      { text: "Mariposa Origami", url: "mariposa" },
      { text: "Limonero", url: "limonero" },
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
    "#a385cf",
    "#A6C4CF",
    "#E1CFCB",
    "#2e7b7f",
    "#557B86",
    "#EB7E83",
  ];

  const randomGradient = hexColors
    .sort(() => 0.33 - Math.random())
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
