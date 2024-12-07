import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import leftImage from './leftImage.png'; // Assuming the logo image is the same

// Mock function to simulate a backend call to check for duplicate IDs
const checkIfIdExists = (id) => {
  const existingIds = ['240123', '240456']; // Replace with your database/API call
  return existingIds.includes(id);
};

const SignUp = () => {
  const [role, setRole] = useState('');
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the ID is already in use
    if (checkIfIdExists(id)) {
      setError('This ID is already in use. Please try a different one.');
      return;
    }

    // Clear error and proceed with account creation logic
    setError('');
    setMessage('Account created successfully!');

    // Simulate successful account creation and redirect
    setTimeout(() => {
      if (role === 'student') {
        navigate('/studentdashboard'); // Adjust the path as needed
      } else {
        navigate('/instructordashboard'); // Adjust the path as needed
      }
    }, 2000);
  };

  return (
    <div>
      <button className="back-button" onClick={handleBack}>
        &#8592; Back
      </button>

      <div className="signup-container">
        <div className="logo-container">
          <img src={leftImage} alt="Logo" className="leftImage" />
        </div>
        <div className="form-container">
          <h2>Sign Up</h2>
          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                value="instructor"
                checked={role === 'instructor'}
                onChange={() => setRole('instructor')}
              />
              Instructor
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <label>ID (Start with 240)</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            {error && <div className="error-message">{error}</div>}

            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Create Account</button>
          </form>
          {message && <div className="message-box">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;