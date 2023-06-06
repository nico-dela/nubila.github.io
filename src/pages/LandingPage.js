import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const generateRandomButton = (link) => {
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
          to={`/details/${link.url}`} // Ruta a la que se navegará al hacer clic en el botón
          style={{
            position: 'absolute',
            top: randomY,
            left: randomX,
            width: buttonWidth,
            height: buttonHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#000',
            transform: `rotate(${randomRotation * 90}deg)`, // Rotación aleatoria
            transition: 'transform 0.3s ease', // Transición suave
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Courier New, monospace', // Especifica la fuente de texto aquí 
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f0f0f0'; // Cambiar el color de fondo al hacer hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'; // Restaurar el color de fondo al dejar de hacer hover
          }}
        >
          {link.text}
        </Link>
      );
    };

    const links = [
      { text: 'Botón 1', url: 'button1' },
      { text: 'Botón 2', url: 'button2' },
      { text: 'Botón 3', url: 'button3' },
      { text: 'Botón 4', url: 'button4' },
      { text: 'Botón 5', url: 'button5' },
    ];

    const generatedButtons = [];
    const generatedUrls = new Set();

    while (generatedButtons.length < 5) {
      const randomIndex = Math.floor(Math.random() * links.length);
      const randomLink = links[randomIndex];

      if (!generatedUrls.has(randomLink.url)) {
        generatedButtons.push(generateRandomButton(randomLink));
        generatedUrls.add(randomLink.url);
      }
    }

    setButtons(generatedButtons);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {buttons}
    </div>
  );
};

export default LandingPage;
