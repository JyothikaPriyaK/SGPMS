import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InstructorDashboard.css';


const InstructorDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className="instructor-dashboard">
      <header>
        <div className="left-corner">Teammates</div>
        <nav className="right-corner">
          <ul>
            <li onClick={() => navigate('/projects')}>PROJECTS</li>
            <li onClick={() => navigate('/profile')}>PROFILE</li>
            <li onClick={() => navigate('/submissions')}>SUBMISSION</li>
            <li onClick={handleSignOut}>SIGN OUT</li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Instructor Dashboard</h2><br></br>
        <div className="dashboard-sections">
          <div onClick={() => navigate('/projects')} className="section">Manage Projects</div><br></br>
          <div onClick={() => navigate('/submissions')} className="section">Manage Submissions</div><br></br>
          <div onClick={() => navigate('/students')} className="section">Manage Students</div><br></br>
          <div onClick={() => navigate('/profile')} className="section">Profile</div><br></br>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;