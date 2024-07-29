import React, { useState } from 'react';
import './PostJobForm.css'; // Import the CSS file for styling

const PostJobForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [datePosted, setDatePosted] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, company, location, type, salary, datePosted });
    // Reset form fields
    setTitle('');
    setCompany('');
    setLocation('');
    setType('');
    setSalary('');
    setDatePosted('');
  };

  return (
    <form className="post-job-form" onSubmit={handleSubmit}>
      <h2>Post a New Job</h2>
      <div>
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter job title"
        />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter company name"
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter job location"
        />
      </div>
      <div>
        <label htmlFor="type">Job Type</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter job type (e.g., Full-time)"
        />
      </div>
      <div>
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter salary"
        />
      </div>
      <div>
        <label htmlFor="datePosted">Date Posted</label>
        <input
          type="date"
          id="datePosted"
          value={datePosted}
          onChange={(e) => setDatePosted(e.target.value)}
        />
      </div>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default PostJobForm;
