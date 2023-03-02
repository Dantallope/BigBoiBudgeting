import React from 'react';
import './css/App.css'
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppSpendingOverview from './overview.js';
import Home from './pages'
import About from './pages/about'
import Services from './pages/services'



function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/about"  element={ <About/> } />
          <Route path="/services"  element={ <Services/> } />
        </Routes>
      <AppSpendingOverview />
    </Router>
  );
}

export default App;
