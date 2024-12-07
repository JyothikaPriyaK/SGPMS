// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';           // Ensure this file exists
import AdminDashboard from './components/AdminDashboard';     // Ensure this file exists

import InstructorDashboard from './components/InstructorDashboard'; // Ensure this file exists
import './App.css';
import StudentDashboard from './components/StudentDashboard';
import SignIn from './components/SignIn'; // Import your SignIn component
import SignUp from './components/SignUp'; // Import your SignUp component
import About from './components/About'; // Import your About component
import Projects from './components/Projects'; // Import your About component
import Submissions from './components/Submissions'; // Import your About component
import StudentManagement from './components/StudentManagement';
import ProjectManagement from './components/ProjectManagement';
import InstructorManagement from './components/InstructorManagement';
import Profile from './components/Profile';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/studentdashboard" element={<StudentDashboard />} />
                <Route path="/instructordashboard" element={<InstructorDashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/submissions" element={<Submissions />} />
                <Route path="/admindashboard/studentmanagement" element={<StudentManagement />} />
        <Route path="/admindashboard/projectmanagement" element={<ProjectManagement />} />
        <Route path="/admindashboard/instructormanagement" element={<InstructorManagement />} />
        <Route path="/Profile" element={<Profile />} />
        
        
        
        
                
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};



export default App;
