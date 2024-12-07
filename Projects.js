import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project Management System',
      instructor: 'Prof. John Doe',
      about: 'A web-based platform for managing student group projects.'
    },
    {
      name: 'AI Chatbot',
      instructor: 'Dr. Jane Smith',
      about: 'An AI-based chatbot system that helps automate customer support.'
    },
    {
      name: 'E-commerce Website',
      instructor: 'Prof. Alice Brown',
      about: 'A full-stack e-commerce application for buying and selling products.'
    }
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    instructor: '',
    about: ''
  });

  // Function to handle adding a new project
  const handleAddProject = () => {
    if (newProject.name && newProject.instructor && newProject.about) {
      setProjects([...projects, newProject]);
      setNewProject({ name: '', instructor: '', about: '' }); // Clear input fields
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to handle removing a project
  const handleRemoveProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="add-project-form">
        <h3>Add a New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructor Name"
          value={newProject.instructor}
          onChange={(e) => setNewProject({ ...newProject, instructor: e.target.value })}
        />
        <textarea
          placeholder="About Project"
          value={newProject.about}
          onChange={(e) => setNewProject({ ...newProject, about: e.target.value })}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p><strong>Instructor:</strong> {project.instructor}</p>
            <p><strong>About:</strong> {project.about}</p>
            <button onClick={() => handleRemoveProject(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
