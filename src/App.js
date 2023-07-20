import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OceanicaPage from './pages/OceanicaPage';
import GirasolesPage from './pages/GirasolesPage';
import BoleritoPage from './pages/BoleritoPage';
import MariposaPage from './pages/MariposaPage';
import FrioPage from './pages/FrioPage';
import LimoneroPage from './pages/LimoneroPage';
import AcercaPage from './pages/AcercaPage';
import CreditosPage from './pages/CreditosPage';
import MusicPlayer from './components/MusicPlayer';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Menu />
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
          <Route path="/nubila/colabora" element={<LimoneroPage />} />
        </Routes>
        <MusicPlayer />
      </div>
    </Router>
  );
};

export default App;
