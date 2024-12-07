import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate, Link } from 'react-router-dom';
import leftImage from './leftImage.png';

const SignIn = () => {
    const [accountType, setAccountType] = useState('student'); // Default to student
    const [id, setId] = useState(''); // State for the ID field
    const [error, setError] = useState(''); // State for error message
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'); // Redirect to the home page
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        // Validate the ID before proceeding
        const regex = /^240\d{3,5}$/;
        if (!regex.test(id)) {
            setError('Invalid ID. It must start with 240 followed by 3-5 digits.');
            return;
        }

        // Clear any previous errors
        setError('');

        // Logic for authentication goes here
        // Redirect based on account type
        if (accountType === 'student') {
            navigate('/studentdashboard'); // Change to your actual route
        } else if (accountType === 'instructor') {
            navigate('/instructordashboard'); // Change to your actual route
        } else {
            navigate('/admindashboard'); // Change to your actual route
        }
    };

    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);

        // Optional real-time validation
        const regex = /^240\d{3,5}$/;
        if (value !== '' && !regex.test(value)) {
            setError('Invalid ID. It must start with 240 followed by 3-5 digits.');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <button className="back-button" onClick={handleBack}>
                &#8592; Back
            </button>
            <div className="main-container">
                <div className="logo-container">
                    <img src={leftImage} alt="Logo" className="leftImage" />
                </div>
                <div className="signin-container">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="account-type">
                            <label>
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="student"
                                    checked={accountType === 'student'}
                                    onChange={(e) => setAccountType(e.target.value)}
                                    required
                                />
                                Student
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="instructor"
                                    checked={accountType === 'instructor'}
                                    onChange={(e) => setAccountType(e.target.value)}
                                    required
                                />
                                Instructor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="admin"
                                    checked={accountType === 'admin'}
                                    onChange={(e) => setAccountType(e.target.value)}
                                    required
                                />
                                Admin
                            </label>
                        </div>
                        <label htmlFor="id">ID (Start with 240)</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            placeholder="Enter your ID starting with 240"
                            value={id}
                            onChange={handleIdChange}
                            required
                        />
                        {error && <p className="error-message">{error}</p>}

                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />

                        <div className="forgot-password">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>

                        <button type="submit">Sign In</button>

                        <p className="signup-text">
                            Not having an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
