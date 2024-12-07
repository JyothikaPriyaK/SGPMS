import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log('Signed out');
    navigate('/');
  };

  const [projects, setProjects] = useState([
    {
      projectName: 'AI Chatbot',
      instructor: 'Dr. Jane Smith',
      students: 'John Doe, Jane Doe'
    },
    {
      projectName: 'E-commerce Platform',
      instructor: 'Prof. Alice Brown',
      students: 'Alice Lee, Bob Johnson'
    }
  ]);

  const [newProject, setNewProject] = useState({
    projectName: '',
    instructor: '',
    students: ''
  });

  const handleAddProject = () => {
    if (newProject.projectName && newProject.instructor && newProject.students) {
      setProjects([...projects, newProject]);
      setNewProject({ projectName: '', instructor: '', students: '' });
    } else {
      alert('Please fill in all fields before adding a project.');
    }
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="admin-dashboard">
      <header>
        <div className="left-corner">Teammates</div>
        <nav className="right-corner">
          <ul>
            <li onClick={() => navigate('/admindashboard/instructormanagement')}>INSTRUCTOR</li>
            <li onClick={() => navigate('/admindashboard/studentmanagement')}>STUDENT</li>
            <li onClick={() => navigate('/admindashboard/projectmanagement')}>PROJECTS</li>
            <li onClick={handleSignOut}>SIGN OUT</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="admin-title">ADMIN HOME</h1>

        <div className="project-status-section">
          <h2>View Project Status</h2>
          <table className="project-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Instructor</th>
                <th>Students</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.projectName}</td>
                  <td>{project.instructor}</td>
                  <td>{project.students}</td>
                  <td>
                    <button onClick={() => handleDeleteProject(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="add-project-form">
            <h3>Add a New Project</h3>
            <input
              type="text"
              placeholder="Project Name"
              value={newProject.projectName}
              onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Instructor Name"
              value={newProject.instructor}
              onChange={(e) => setNewProject({ ...newProject, instructor: e.target.value })}
            />
            <input
              type="text"
              placeholder="Students (comma-separated)"
              value={newProject.students}
              onChange={(e) => setNewProject({ ...newProject, students: e.target.value })}
            />
            <button onClick={handleAddProject}>Add Project</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
