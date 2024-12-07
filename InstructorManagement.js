import React, { useState } from 'react';
import './InstructorManagement.css';

const InstructorManagement = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Dr. Smith', email: 'drsmith@example.com' },
    { id: 2, name: 'Prof. Brown', email: 'profbrown@example.com' },
  ]);
  const [newInstructor, setNewInstructor] = useState({ name: '', email: '' });

  const handleAddInstructor = () => {
    if (newInstructor.name && newInstructor.email) {
      setInstructors([...instructors, { id: instructors.length + 1, ...newInstructor }]);
      setNewInstructor({ name: '', email: '' });
    }
  };

  const handleDeleteInstructor = (id) => {
    setInstructors(instructors.filter(instructor => instructor.id !== id));
  };

  return (
    <div className="management-container">
      <h2>Instructor Management</h2>
      <div className="add-instructor">
        <input
          type="text"
          placeholder="Instructor Name"
          value={newInstructor.name}
          onChange={(e) => setNewInstructor({ ...newInstructor, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Instructor Email"
          value={newInstructor.email}
          onChange={(e) => setNewInstructor({ ...newInstructor, email: e.target.value })}
        />
        <button onClick={handleAddInstructor}>Add Instructor</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map(instructor => (
            <tr key={instructor.id}>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>
                <button onClick={() => handleDeleteInstructor(instructor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructorManagement;
