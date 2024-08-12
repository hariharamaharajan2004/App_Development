import React, { useState } from 'react';
import './view1.css'; // Use the same CSS file
import { FaSave } from 'react-icons/fa';
import ApplyForm from './applyform'; // Import the ApplyForm component
import iciciLogo from './icici-logo.png'; // Make sure this image exists in your project

const jobs = [
    {
        id: 1,
        title: 'Financial Analyst',
        company: 'ICICI Bank',
        rating: '4.0',
        reviews: '200 Reviews',
        experience: '3-5 Yrs',
        salary: '₹ 7-10 Lakhs',
        location: 'Mumbai',
        description: 'Analyze financial data to provide insights and recommendations.',
        tags: ['Finance', 'Analysis', 'Banking', 'Consulting'],
        date: '15+ Days Ago',
    },
    {
        id: 2,
        title: 'Loan Officer',
        company: 'ICICI Bank',
        rating: '3.9',
        reviews: '150 Reviews',
        experience: '2-4 Yrs',
        salary: '₹ 6-8 Lakhs',
        location: 'Mumbai',
        description: 'Evaluate and authorize loans for individuals and businesses.',
        tags: ['Finance', 'Loans', 'Customer Service', 'Banking'],
        date: '20+ Days Ago',
    },
    {
        id: 3,
        title: 'Branch Manager',
        company: 'ICICI Bank',
        rating: '4.1',
        reviews: '250 Reviews',
        experience: '5-7 Yrs',
        salary: '₹ 12-15 Lakhs',
        location: 'Mumbai',
        description: 'Oversee branch operations and ensure excellent customer service.',
        tags: ['Management', 'Finance', 'Banking', 'Leadership'],
        date: '10+ Days Ago',
    },
];

const View3 = () => {
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
                    <h1>Explore Career Opportunities at ICICI Bank</h1>
                    <p>Join a leader in the financial industry</p>
                </div>
                <div className="company-info">
                    <img src={iciciLogo} alt="ICICI Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>ICICI Bank</h2>
                        <p>Empowering Financial Futures</p>
                        <div className="tags">
                            <span>Banking</span>
                            <span>Private</span>
                            <span>Indian MNC</span>
                            <span>B2C</span>
                        </div>
                        <div className="followers">
                            <p>50K followers</p>
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
                                <img src={iciciLogo} alt="ICICI Logo" className="job-logo" />
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

export default View3;
