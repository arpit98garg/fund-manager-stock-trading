import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📈 Fund Manager
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/recommendations" className="nav-link">Recommendations</Link>
          <Link to="/performance" className="nav-link">Performance</Link>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
