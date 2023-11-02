import React, { useState, useEffect } from "react";
import bannerImage from "../assets/images/banner.jpeg";
import { Puff } from "react-loader-spinner";
import "../styles/OfflinePage.css";

const OfflinePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Función para manejar el evento onLoad de la imagen
  const handleImageLoad = () => {
    // Cuando la imagen se carga, actualiza el estado para indicar que la imagen se ha cargado.
    setImageLoaded(true);
  };

  // Utiliza useEffect para verificar si la imagen ya está en caché y establecer imageLoaded en true
  useEffect(() => {
    const image = new Image();
    image.src = bannerImage;
    image.onload = handleImageLoad;
  }, []);

  return (
    <div className="overlay">
      <div className="coming-soon-container">
        {imageLoaded ? (
          // La imagen se ha cargado, muestra la imagen
          <img
            src={bannerImage}
            alt="Banner oceanica"
            onLoad={handleImageLoad}
          />
        ) : (
          // La imagen aún se está cargando, muestra la animación de carga
          <Puff
            height={80}
            width={80}
            radius={1}
            color="black"
            ariaLabel="puff-loading"
            visible={!imageLoaded} // Oculta el spinner cuando la imagen se carga
          />
        )}
      </div>
    </div>
  );
};

export default OfflinePage;
