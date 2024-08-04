import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <h1>{/* navbar heading */}</h1>
      <div className="links">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About</Link>
        <Link to="/statistics" className={currentPath === '/statistics' ? 'active' : ''}>Statistics</Link>
        <Link to="/tips" className={currentPath === '/tips' ? 'active' : ''}>Tips</Link>
        <Link to="/quizzes" className={currentPath === '/quizzes' ? 'active' : ''}>Quizzes</Link>
        <Link to="/surveys" className={currentPath === '/surveys' ? 'active' : ''}>Surveys</Link>
        <Link to="/resources" className={currentPath === '/resources' ? 'active' : ''}>Resources</Link>
        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
      <h1>{/* navbar heading */}</h1>
    </nav>
  );
}

export default Navbar;
