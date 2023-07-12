import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const generateRandomButton = (link, isStrikeThrough) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

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
            position: 'absolute',
            top: randomY,
            left: randomX,
            width: buttonWidth,
            height: buttonHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: isStrikeThrough ? 'line-through' : 'none', // Aplica tachado si es el botón seleccionado
            color: '#000',
            transform: `rotate(${randomRotation * 90}deg)`, // Rotación aleatoria
            transition: 'transform 0.3s ease', // Transición suave
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Bebas Neue, sans-serif', // Especifica la fuente de texto aquí
            fontSize: 40
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = '0.5'; // Cambiar el color de fondo al hacer hover
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '1'; // Restaurar el color de fondo al dejar de hacer hover
          }}
        >
          {link.text}
        </Link>
      );
    };

    const links = [
      { text: 'Oceánica', url: 'oceanica' },
      { text: 'Girasoles', url: 'girasoles' },
      { text: 'Bolerito de Stapelia', url: 'bolerito' },
      { text: 'Frío', url: 'frio' },
      { text: 'Mariposa origami', url: 'mariposa' },
      { text: 'Limonero', url: 'limonero' },
    ];

    const randomIndex = Math.floor(Math.random() * (links.length + 1)); // Agrega 1 a la longitud para incluir la posibilidad de ningún botón tachado
    const selectedLink = randomIndex < links.length ? links[randomIndex] : null;

    const generatedButtons = links.map((link) =>
      generateRandomButton(link, link === selectedLink)
    );

    setButtons(generatedButtons);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #0099ff, #00ccff, #66ccff, #99ccff, #ccddff, #e6e6ff)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {buttons}
    </div>
  );
};

export default LandingPage;
