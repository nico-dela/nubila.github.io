import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OceanicaPage from "./pages/OceanicaPage";
import GirasolesPage from "./pages/GirasolesPage";
import BoleritoPage from "./pages/BoleritoPage";
import MariposaPage from "./pages/MariposaPage";
import FrioPage from "./pages/FrioPage";
import LimoneroPage from "./pages/LimoneroPage";
import AcercaPage from "./pages/AcercaPage";
import CreditosPage from "./pages/CreditosPage";
import ColaboraPage from "./pages/ColaboraPage";
import OfflinePage from "./pages/OfflinePage";
import MusicPlayer from "./components/MusicPlayer";
import SocialMedia from "./components/SocialMedia";
import Menu from "./components/Menu";

import "./App.css";

const App = () => {
  const [isOffline, setIsOffline] = useState(true);

  useEffect(() => {
    // Agrega tu lógica para determinar si tu sitio está completo aquí.
    // Cuando tu sitio esté completo, cambia el valor de isComingSoon a `false`.
    // setComingSoon(false);
  }, []);

  return (
    <Router>
      <div className="container">
        {isOffline ? (
          <Routes>
            <Route path="/*" element={<OfflinePage />} />
          </Routes>
        ) : (
          <>
            <Menu />
            <SocialMedia />
            <Routes>
              <Route path="/nubila" element={<LandingPage />} />
              <Route path="/nubila/oceanica" element={<OceanicaPage />} />
              <Route path="/nubila/girasoles" element={<GirasolesPage />} />
              <Route path="/nubila/bolerito" element={<BoleritoPage />} />
              <Route path="/nubila/mariposa" element={<MariposaPage />} />
              <Route path="/nubila/frio" element={<FrioPage />} />
              <Route path="/nubila/limonero" element={<LimoneroPage />} />
              <Route path="/nubila/creditos" element={<CreditosPage />} />
              <Route path="/nubila/acerca" element={<AcercaPage />} />
              <Route path="/nubila/colabora" element={<ColaboraPage />} />
            </Routes>
            <MusicPlayer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
