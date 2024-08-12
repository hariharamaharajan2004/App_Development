import React, { useState } from 'react';
import './view1.css'; // Use the same CSS file
import { FaSave } from 'react-icons/fa';
import ApplyForm from './applyform'; // Import the ApplyForm component
import actalentLogo from './actalent-logo.png'; // Make sure this image exists in your project

const jobs = [
    {
        id: 1,
        title: 'Engineering Manager',
        company: 'Actalent',
        rating: '4.0',
        reviews: '320 Reviews',
        experience: '5-10 Yrs',
        salary: '₹ 20-30 Lakhs',
        location: 'Hyderabad, Chennai',
        description: 'Lead engineering teams and manage project delivery. Experience in project management and team leadership required.',
        tags: ['Engineering', 'Leadership', 'Project Management', 'Team Management'],
        date: '3+ Days Ago',
    },
    {
        id: 2,
        title: 'Clinical Research Associate',
        company: 'Actalent',
        rating: '4.2',
        reviews: '280 Reviews',
        experience: '2-6 Yrs',
        salary: '₹ 12-18 Lakhs',
        location: 'Bengaluru',
        description: 'Conduct clinical trials and research studies. Experience with clinical research processes and documentation required.',
        tags: ['Clinical Research', 'Trials', 'Documentation', 'Healthcare'],
        date: '6+ Days Ago',
    },
    {
        id: 3,
        title: 'IT Consultant',
        company: 'Actalent',
        rating: '4.1',
        reviews: '290 Reviews',
        experience: '3-7 Yrs',
        salary: '₹ 15-25 Lakhs',
        location: 'Mumbai',
        description: 'Provide IT solutions and consulting services. Experience in various IT domains and client management required.',
        tags: ['Consulting', 'IT Solutions', 'Client Management', 'Technical Expertise'],
        date: '8+ Days Ago',
    },
];

const View6 = () => {
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
                    <h1>Empower Your Career with Actalent</h1>
                    <p>Explore rewarding opportunities and join our team</p>
                </div>
                <div className="company-info">
                    <img src={actalentLogo} alt="Actalent Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>Actalent</h2>
                        <p>Connecting Talent with Opportunity</p>
                        <div className="tags">
                            <span>Consulting</span>
                            <span>Engineering</span>
                            <span>Healthcare</span>
                            <span>Global Reach</span>
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
                                <img src={actalentLogo} alt="Actalent Logo" className="job-logo" />
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

export default View6;
