import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nubila" element={<LandingPage />} />
        <Route path="/details/button1/" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
