import React from 'react';
import './css/App.css'
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import AppSpendingOverview from './overview.js';
// import Home, { homeLoader } from './pages'
import About from './pages/about'
import Services from './pages/services'
import ContactUs from './pages/contact-us'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'



function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          {/* <Route path="/" exact element={ <Home/> } /> */}
          <Route path="/about"  element={ <About/> } />
          <Route path="/services"  element={ <Services/> } />
          <Route path="/contact-us"  element={ <ContactUs/> } />
          <Route path="/sign-in"  element={ <SignIn/> } />
          <Route path="/sign-up"  element={ <SignUp/> } />
        </Routes>
    </Router>
  );
}

export default App;

