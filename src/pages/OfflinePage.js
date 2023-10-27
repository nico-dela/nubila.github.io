import React, { useState } from "react";
import bannerImage from "../assets/images/banner.jpeg";
import loadingSpinner from "../assets/images/spinning-loading.gif"; // Agrega la imagen de la animación de carga
import "../styles/OfflinePage.css";

const OfflinePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Función para manejar el evento onLoad de la imagen
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="overlay">
      <div className="coming-soon-container">
        {imageLoaded ? (
          // La imagen se ha cargado, muestra la imagen
          <img src={bannerImage} alt="Banner oceanica" />
        ) : (
          // La imagen aún se está cargando, muestra la animación de carga
          <img
            src={loadingSpinner}
            alt="Loading"
            className="loading-spinner"
            onLoad={handleImageLoad} // Llama a la función handleImageLoad cuando la imagen se carga
          />
        )}
      </div>
    </div>
  );
};

export default OfflinePage;
