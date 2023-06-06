import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MusicaPage from './pages/MusicaPage';
import ProcesoPage from './pages/ProcesoPage';
import CreditosPage from './pages/CreditosPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nubila" element={<LandingPage />} />
        <Route path="/nubila/home" element={<HomePage />} />
        <Route path="/nubila/musica" element={<MusicaPage />} />
        <Route path="/nubila/proceso" element={<ProcesoPage />} />
        <Route path="/nubila/creditos" element={<CreditosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
