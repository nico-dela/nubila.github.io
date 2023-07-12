import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OceanicaPage from './pages/OceanicaPage';
import GirasolesPage from './pages/GirasolesPage';
import BoleritoPage from './pages/BoleritoPage';
import MariposaPage from './pages/MariposaPage';
import FrioPage from './pages/FrioPage';
import LimoneroPage from './pages/LimoneroPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nubila" element={<LandingPage />} />
        <Route path="/nubila/oceanica" element={<OceanicaPage />} />
        <Route path="/nubila/girasoles" element={<GirasolesPage />} />
        <Route path="/nubila/bolerito" element={<BoleritoPage />} />
        <Route path="/nubila/mariposa" element={<MariposaPage />} />
        <Route path="/nubila/frio" element={<FrioPage />} />
        <Route path="/nubila/limonero" element={<LimoneroPage />} />
      </Routes>
    </Router>
  );
};

export default App;
