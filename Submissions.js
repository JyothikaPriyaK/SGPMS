import React, { useState } from 'react';
import './Submissions.css';

const Submissions = () => {
  // Sample data for submissions
  const [submissions, setSubmissions] = useState([
    { id: 1, studentName: 'John Doe', projectTitle: 'AI for Healthcare', grade: '', submitted: false },
    { id: 2, studentName: 'Jane Smith', projectTitle: 'Blockchain in Finance', grade: '', submitted: false },
    { id: 3, studentName: 'Robert Brown', projectTitle: 'IoT in Agriculture', grade: '', submitted: false }
  ]);

  // Function to handle grade change
  const handleGradeChange = (id, newGrade) => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, grade: newGrade } : submission
    );
    setSubmissions(updatedSubmissions);
  };

  // Function to handle grade submission
  const handleSubmitGrade = (id) => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, submitted: true } : submission
    );
    setSubmissions(updatedSubmissions);
    alert('Grade submitted successfully!');
  };

  // Function to handle editing the grade
  const handleEditGrade = (id) => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, submitted: false } : submission
    );
    setSubmissions(updatedSubmissions);
  };

  return (
    <div className="submissions-container">
      <h2>Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Project Title</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td>{submission.studentName}</td>
              <td>{submission.projectTitle}</td>
              <td>
                <input
                  type="text"
                  value={submission.grade}
                  onChange={(e) => handleGradeChange(submission.id, e.target.value)}
                  placeholder="Enter grade"
                  disabled={submission.submitted} // Disable input if grade is submitted
                />
              </td>
              <td>
                {!submission.submitted ? (
                  <button onClick={() => handleSubmitGrade(submission.id)}>
                    Submit Grade
                  </button>
                ) : (
                  <button onClick={() => handleEditGrade(submission.id)}>
                    Edit Grade
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
