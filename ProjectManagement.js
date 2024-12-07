import React, { useState } from 'react';
import './ProjectManagement.css';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'AI for Healthcare', instructor: 'Dr. Smith' },
    { id: 2, title: 'Blockchain in Finance', instructor: 'Prof. Brown' },
  ]);
  const [newProject, setNewProject] = useState({ title: '', instructor: '' });

  const handleAddProject = () => {
    if (newProject.title && newProject.instructor) {
      setProjects([...projects, { id: projects.length + 1, ...newProject }]);
      setNewProject({ title: '', instructor: '' });
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="management-container">
      <h2>Project Management</h2>
      <div className="add-project">
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructor Name"
          value={newProject.instructor}
          onChange={(e) => setNewProject({ ...newProject, instructor: e.target.value })}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Instructor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.instructor}</td>
              <td>
                <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectManagement;
