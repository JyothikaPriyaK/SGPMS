import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');  // Redirect to landing page
  };

  return (
    <div className="student-dashboard">
      <header>
        <div className="left-corner">Teammates</div>
        <nav className="right-corner">
          <ul>
            <li onClick={() => navigate('/projects')}>PROJECTS</li>
            <li onClick={() => navigate('/profile')}>PROFILE</li>
            <li onClick={handleSignOut}>SIGN OUT</li>
          </ul>
        </nav>
      </header>

      <div className="content-section">
        <h1>Welcome to the Student Dashboard</h1>
        <p>Manage your projects and profile here.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
