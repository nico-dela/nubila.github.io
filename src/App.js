import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
  const [isOffline] = useState(false);

  return (
    <Router baseline="/nubila">
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
              <Route path="/" element={<LandingPage />} />
              <Route path="/oceanica" element={<OceanicaPage />} />
              <Route path="/girasoles" element={<GirasolesPage />} />
              <Route path="/bolerito" element={<BoleritoPage />} />
              <Route path="/mariposa" element={<MariposaPage />} />
              <Route path="/frio" element={<FrioPage />} />
              <Route path="/limonero" element={<LimoneroPage />} />
              <Route path="/creditos" element={<CreditosPage />} />
              <Route path="/acerca" element={<AcercaPage />} />
              <Route path="/colabora" element={<ColaboraPage />} />
            </Routes>
            <MusicPlayer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
