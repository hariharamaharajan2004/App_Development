import React, { useState } from 'react';
import './view1.css'; // Keep the same CSS file
import { FaSave } from 'react-icons/fa';
import ApplyForm from './applyform'; // Import the ApplyForm component
import wellsFargoLogo from './wellsfargo-logo.png'; // Use Wells Fargo logo

const jobs = [
    {
        id: 1,
        title: 'ReactJS Developer',
        company: 'Wells Fargo',
        rating: '4.0',
        reviews: '512 Reviews',
        experience: '2-6 Yrs',
        salary: '₹ Not disclosed',
        location: 'Bengaluru, Chennai',
        description: '3 - 7 years of experience in React front end development. Experience of building and deploying...',
        tags: ['Front end', 'Cloud', 'Deployment', 'React.js'],
        date: '30+ Days Ago',
    },
    {
        id: 2,
        title: 'C Developer',
        company: 'Wells Fargo',
        rating: '4.2',
        reviews: '456 Reviews',
        experience: '2-6 Yrs',
        salary: '₹ Not disclosed',
        location: 'Bengaluru, Chennai',
        description: 'Programming experience with C / C# or Windows Desktop applications. Memory management...',
        tags: ['Multithreading', 'Networking', 'Debugging', 'Consulting'],
        date: '30+ Days Ago',
    },
    {
        id: 3,
        title: 'Java Developer',
        company: 'Wells Fargo',
        rating: '4.5',
        reviews: '698 Reviews',
        experience: '2-6 Yrs',
        salary: '₹ Not disclosed',
        location: 'Bengaluru, Chennai',
        description: 'Programming experience with Java / Advanced Java or Windows Desktop applications...',
        tags: ['Multithreading', 'Networking', 'Debugging', 'Consulting'],
        date: '30+ Days Ago',
    },
];

const View2 = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [savedJobs, setSavedJobs] = useState({});
    const [appliedJobs, setAppliedJobs] = useState({});
    const [isApplyFormVisible, setIsApplyFormVisible] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
    };

    const handleSaveClick = (jobId) => {
        setSavedJobs((prevSavedJobs) => ({
            ...prevSavedJobs,
            [jobId]: !prevSavedJobs[jobId]
        }));
    };

    const handleApplyClick = (jobTitle) => {
        setSelectedJobTitle(jobTitle);
        setIsApplyFormVisible(true);
    };

    const handleFormSubmit = (jobTitle) => {
        setAppliedJobs((prevAppliedJobs) => ({
            ...prevAppliedJobs,
            [jobTitle]: true
        }));
    };

    const closeApplyForm = () => {
        setIsApplyFormVisible(false);
        setSelectedJobTitle('');
    };

    return (
        <div className="view1-container">
            <section className="content">
                <div className="banner">
                    <h1>We're among the <br /> Top 50 Inspiring Workplaces EMEA</h1>
                    <p>for outstanding work in Culture & Purpose</p>
                </div>
                <div className="company-info">
                    <img src={wellsFargoLogo} alt="Wells Fargo Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>Wells Fargo</h2>
                        <p>Transforming the Future, Now</p>
                        <div className="tags">
                            <span>Banking & Financial Services</span>
                            <span>Public</span>
                            <span>American MNC</span>
                            <span>B2B</span>
                        </div>
                        <div className="followers">
                            <p>79.8K followers</p>
                            <button className="follow-btn" onClick={handleFollowClick}>
                                {isFollowed ? "Following" : "+ Follow"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="job-listings">
                    {jobs.map((job) => (
                        <div key={job.id} className="job-card">
                            <div className="job-info">
                                <h3>{job.title}</h3>
                                <p>{job.company}</p>
                                <p><span>⭐ {job.rating}</span> ({job.reviews})</p>
                                <div className="job-meta">
                                    <span>{job.experience}</span>
                                    <span>{job.salary}</span>
                                    <span>{job.location}</span>
                                </div>
                                <p>{job.description}</p>
                                <div className="job-tags">
                                    {job.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                                <p className="job-date">{job.date}</p>
                            </div>
                            <div className="job-save">
                                <img src={wellsFargoLogo} alt="Wells Fargo Logo" className="job-logo" />
                                <div className="job-actions">
                                    {/* <button
                                        className="save-btn"
                                        onClick={() => handleSaveClick(job.id)}
                                    >
                                        <FaSave className="save-icon" />
                                        {savedJobs[job.id] ? "Saved" : "Save"}
                                    </button> */}
                                    <button
                                        className="apply-btn"
                                        onClick={() => handleApplyClick(job.title)}
                                        disabled={appliedJobs[job.title]}
                                    >
                                        {appliedJobs[job.title] ? "Applied" : "Apply"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {isApplyFormVisible && (
                <ApplyForm
                    jobTitle={selectedJobTitle}
                    onClose={closeApplyForm}
                    onFormSubmit={() => handleFormSubmit(selectedJobTitle)}
                />
            )}
        </div>
    );
};

export default View2;
