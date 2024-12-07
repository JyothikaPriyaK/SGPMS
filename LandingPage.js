// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        {/* Left corner - Teammates */}
        <div className="left-corner">Teammates</div>
        {/* Right corner - Navigation */}
        <nav className="right-corner">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      {/* Main content - big text */}
      <main>
        <h2>Your Project, Your Team, Your Success</h2>
      </main>
      {/* Footer */}
      <footer>
        <p>&copy; 2024 Student Group Project Management System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
