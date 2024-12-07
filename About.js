import React from 'react';
import './About.css'; // Import the CSS file for styling
import image from './image.jpeg'; // Replace with your image path
import { useNavigate } from 'react-router-dom';


const About = () => {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'); // Redirect to the home page
    };
    return (
        <div>
            <button className="back-button" onClick={handleBack}>
                &#8592; Back
            </button>
        <div className="about-container">
            <h1 className="about-title">ABOUT US</h1>
            <div className="about-content">
                <img src={image} alt="TeamMates" className="about-image" />
                <p className="about-description">
                    The TEAMMATES is a platform designed to simplify group projects.<br></br>
                    We provide tools for task management, progress tracking, and collaboration, <br></br>
                    helping students work efficiently while enabling teachers to monitor and guide their progress.
                </p>
            </div>
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-info">
                <p>TeamMates</p>
                <p>Contact: 012-345-6789</p>
                <p>Email: TeamMates@xyz.com</p>
                <p className="social-media">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </div>
        </div>
        </div>
    );
}

export default About;
