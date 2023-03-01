import React from 'react';
import './css/navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">How it works</a>
          <ul className="navbar-dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About Us</a>
          <ul className="navbar-dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Budget</a>
          <ul className="navbar-dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Tab 4</a>
          <ul className="navbar-dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Tab 5</a>
          <ul className="navbar-dropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
      </ul>
      <div className="navbar-auth">
        <button className="navbar-signin">Sign In</button>
        <button className="navbar-login">Log In</button>
      </div>
    </nav>
  );
}

export default NavBar;
