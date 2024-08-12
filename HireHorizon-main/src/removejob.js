// src/RemoveJobPage.js
import React from 'react';
import { useJobContext } from './Jobcontext';
import './removejob.css'; // Import the CSS file

const RemoveJobPage = () => {
  const { jobs, removeJob } = useJobContext();

  const handleRemove = (jobTitle) => {
    removeJob(jobTitle);
  };

  return (
    <div className="remove-job-page">
      <h1>Remove Job</h1>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div key={index} className="job-card7">
            <h2>{job.title}</h2>
            <button onClick={() => handleRemove(job.title)}>Remove Job</button>
          </div>
        ))
      ) : (
        <p>No jobs available to remove.</p>
      )}
    </div>
  );
};

export default RemoveJobPage;
