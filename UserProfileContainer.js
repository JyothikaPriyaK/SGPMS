// src/components/UserProfileContainer.js
import React, { useState, useEffect } from 'react';
import Profile from './Profile'; // Import the Profile component

const UserProfileContainer = ({ userType }) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Replace with your actual API endpoint or data-fetching logic
                const response = await fetch('/api/getProfileData'); // Your API or static data source
                const data = await response.json();
                setProfileData(data); // Set the fetched data
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false); // End the loading state
            }
        };

        fetchProfileData();
    }, []); // Empty dependency array ensures this runs once on component mount

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    return <Profile userType={userType} profileData={profileData} />; // Pass the fetched data to Profile component
};

export default UserProfileContainer;
