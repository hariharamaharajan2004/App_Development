import React, { useState } from 'react';
import './view1.css'; // Use the same CSS file
import { FaSave } from 'react-icons/fa';
import ApplyForm from './applyform'; // Import the ApplyForm component
import amazonLogo from './amazon-logo.png'; // Make sure this image exists in your project

const jobs = [
    {
        id: 1,
        title: 'Software Development Engineer',
        company: 'Amazon',
        rating: '4.0',
        reviews: '850 Reviews',
        experience: '3-7 Yrs',
        salary: '₹ 15-25 Lakhs',
        location: 'Bengaluru, Hyderabad',
        description: 'Design, develop, and deploy scalable and reliable systems. Experience in Java, C++, or similar languages.',
        tags: ['Software Development', 'Java', 'C++', 'Scalability'],
        date: '5+ Days Ago',
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: 'Amazon',
        rating: '4.1',
        reviews: '720 Reviews',
        experience: '2-5 Yrs',
        salary: '₹ 12-20 Lakhs',
        location: 'Bengaluru, Hyderabad',
        description: 'Analyze and interpret complex data sets using machine learning algorithms and statistical tools.',
        tags: ['Data Analysis', 'Machine Learning', 'Python', 'Statistics'],
        date: '7+ Days Ago',
    },
    {
        id: 3,
        title: 'Product Manager',
        company: 'Amazon',
        rating: '4.2',
        reviews: '900 Reviews',
        experience: '4-8 Yrs',
        salary: '₹ 20-30 Lakhs',
        location: 'Bengaluru',
        description: 'Lead product strategy and roadmap. Experience with product lifecycle management and cross-functional teams.',
        tags: ['Product Management', 'Strategy', 'Leadership', 'Cross-functional'],
        date: '10+ Days Ago',
    },
];

const View5 = () => {
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
                    <h1>Join the Global Leader in E-Commerce and Cloud Computing</h1>
                    <p>Explore exciting opportunities at Amazon</p>
                </div>
                <div className="company-info">
                    <img src={amazonLogo} alt="Amazon Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>Amazon</h2>
                        <p>Delivering Smiles Worldwide</p>
                        <div className="tags">
                            <span>E-Commerce</span>
                            <span>Tech Giant</span>
                            <span>Global Presence</span>
                            <span>B2C</span>
                        </div>
                        <div className="followers">
                            <p>200K followers</p>
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
                                <img src={amazonLogo} alt="Amazon Logo" className="job-logo" />
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

export default View5;
