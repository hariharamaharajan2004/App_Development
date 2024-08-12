import React, { useState } from 'react';
import './view1.css'; // Use the same CSS file
import { FaSave } from 'react-icons/fa';
import ApplyForm from './applyform'; // Import the ApplyForm component
import datamanticsLogo from './datamatics-logo.png'; // Make sure this image exists in your project

const jobs = [
    {
        id: 1,
        title: 'Data Scientist',
        company: 'Datamantics',
        rating: '4.2',
        reviews: '320 Reviews',
        experience: '3-5 Yrs',
        salary: '₹ 8-12 Lakhs',
        location: 'Bengaluru',
        description: 'Analyze complex data sets to provide actionable insights. Experience with Python, R, and machine learning algorithms.',
        tags: ['Data Analysis', 'Machine Learning', 'Python', 'R'],
        date: '10+ Days Ago',
    },
    {
        id: 2,
        title: 'Business Intelligence Analyst',
        company: 'Datamantics',
        rating: '4.0',
        reviews: '280 Reviews',
        experience: '2-4 Yrs',
        salary: '₹ 7-10 Lakhs',
        location: 'Bengaluru',
        description: 'Develop and manage BI solutions. Experience with SQL, data warehousing, and visualization tools.',
        tags: ['BI Tools', 'SQL', 'Data Warehousing', 'Visualization'],
        date: '15+ Days Ago',
    },
    {
        id: 3,
        title: 'Data Engineer',
        company: 'Datamantics',
        rating: '4.3',
        reviews: '350 Reviews',
        experience: '4-6 Yrs',
        salary: '₹ 9-13 Lakhs',
        location: 'Bengaluru',
        description: 'Design and build data pipelines and infrastructure. Experience with ETL processes and big data technologies.',
        tags: ['ETL', 'Big Data', 'Data Pipelines', 'Infrastructure'],
        date: '7+ Days Ago',
    },
];

const View4 = () => {
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
                    <h1>Join the Leaders in Data Analytics</h1>
                    <p>Explore exciting opportunities at Datamantics</p>
                </div>
                <div className="company-info">
                    <img src={datamanticsLogo} alt="Datamantics Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>Datamantics</h2>
                        <p>Empowering Data-Driven Decisions</p>
                        <div className="tags">
                            <span>Data Analytics</span>
                            <span>Private</span>
                            <span>Indian MNC</span>
                            <span>B2B</span>
                        </div>
                        <div className="followers">
                            <p>25K followers</p>
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
                                <img src={datamanticsLogo} alt="Datamantics Logo" className="job-logo" />
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

export default View4;
