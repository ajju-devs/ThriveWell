import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <img src="/logo.png" alt="ThriveWell" className="logo" />
      <div className="text-container">
        <h1>ThriveWell</h1>
        <h2>a holistic health portal</h2>
      </div>
    </div>
  );
}

export default Logo;
