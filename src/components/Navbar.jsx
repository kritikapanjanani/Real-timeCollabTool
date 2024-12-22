import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom styles for the Navbar
import logoimage from '../assets/image.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" >
      <img src={logoimage} alt="LetsCollab Logo" className="navbar-logo-img" />
      </Link>
        <Link to="/" className="navbar-logo">
          <h2>LetsCollab!</h2>
        </Link>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
