import React from 'react';
import './Profile.css';

const Profile = ({ userType, profileData }) => {
    // Check if profileData is available
    if (!profileData) {
        return <div>Loading...</div>; // Display loading message or fallback content
    }

    const { profilePicture, name, email, phone, address, program, year, projects, department, courses } = profileData;

    return (
        <div className="profile-container">
            <h2>{userType === 'student' ? 'Student Profile' : 'Instructor Profile'}</h2>
            <div className="profile-card">
                {/* Fallback image if profilePicture is not available */}
                <img src={profilePicture || 'default-profile.png'} alt="Profile" className="profile-picture" />
                <div className="profile-details">
                    <h3>{name}</h3>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Role:</strong> {userType === 'student' ? 'Student' : 'Instructor'}</p>
                    {userType === 'student' ? (
                        <>
                            <p><strong>Program:</strong> {program}</p>
                            <p><strong>Year:</strong> {year}</p>
                            <p><strong>Projects:</strong> {projects}</p>
                        </>
                    ) : (
                        <>
                            <p><strong>Department:</strong> {department}</p>
                            <p><strong>Courses Taught:</strong> {courses}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
