import React from 'react';
import './css/App.css'
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppSpendingOverview from './overview.js';
import Home from './pages/index'



function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact component = { Home } />
        </Routes>
      <AppSpendingOverview />
    </Router>
  );
}

export default App;
