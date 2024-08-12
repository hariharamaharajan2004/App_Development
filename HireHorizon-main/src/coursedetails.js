import React, { useState } from 'react';
import './coursedetails.css';
import Navbar from './navbar';

const courseData = [
  {
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch.',
    image: 'https://www.hubspot.com/hs-fs/hubfs/web-development.webp?width=595&height=400&name=web-development.webp',
    duration: '3 months',
    rating: 4.8,
    overview: 'This bootcamp will take you from beginner to advanced in full-stack web development, covering everything from front-end to back-end technologies.',
    learningObjectives: [
      'Understand HTML, CSS, and JavaScript.',
      'Build responsive and interactive websites.',
      'Learn server-side programming with Node.js.',
      'Work with databases and APIs.'
    ],
    requirements: [
      'Basic understanding of computers.',
      'Interest in web technologies.',
      'Willingness to learn and practice.'
    ],
    chapters: [
      { title: 'Introduction to Web Development', videoLink: 'https://www.youtube.com/embed/oJYFRZ4cj2Q?si=fqjpgJT3etnxgjnF' }, 
      { title: 'Front-End Technologies', videoLink: 'https://www.youtube.com/embed/Tef1e9FiSR0?si=YxzNTJy38w7gM15i' },
      { title: 'Back-End Development', videoLink: 'https://www.youtube.com/embed/cbSrsYiRamo?si=UBQNlwwAsgs2M-iv' }
    ]
  },
  {
    title: 'Data Science Mastery',
    description: 'Master data science and machine learning.',
    image: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg',
    duration: '4 months',
    rating: 4.7,
    overview: 'This course will cover data analysis, visualization, and machine learning techniques.',
    learningObjectives: [
      'Understand data analysis and visualization.',
      'Learn machine learning algorithms.',
      'Work with real-world datasets.'
    ],
    requirements: [
      'Basic knowledge of statistics.',
      'Familiarity with Python programming.'
    ],
    chapters: [
      { title: 'Introduction to Data Science', videoLink: 'https://www.youtube.com/embed/KdgQvgE3ji4?si=NT8Y4dlBgVn6_uzn' },
      { title: 'Data Analysis with Python', videoLink: 'https://www.youtube.com/embed/pzo13OPXZS4?si=DW99Fa_4uxweN0zQ' },
      { title: 'Machine Learning Algorithms', videoLink: 'https://www.youtube.com/embed/49ynV_Xk78w?si=26UgbYDVTJJeNu9P' }
    ]
  },
  {
    title: 'Graphic Design Fundamentals',
    description: 'Learn the basics of graphic design and visual communication.',
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/IsGraphic_DesignAGoodCareerb.jpg',
    duration: '2 months',
    rating: 4.6,
    overview: 'This course introduces the principles of graphic design, including typography, color theory, and layout design.',
    learningObjectives: [
      'Understand design principles and elements.',
      'Learn typography and color theory.',
      'Create effective visual communication materials.'
    ],
    requirements: [
      'Basic understanding of design concepts.',
      'Interest in visual arts and design.'
    ],
    chapters: [
      { title: 'Introduction to Graphic Design', videoLink: 'https://www.youtube.com/embed/WONZVnlam6U?si=F0f7oTjq2QUmgv6p' },
      { title: 'Typography and Color Theory', videoLink: 'https://www.youtube.com/embed/N0F4O6gP3VA?si=RgsErlJ7nklOLxn4' },
      { title: 'Layout Design Basics', videoLink: 'https://www.youtube.com/embed/bDZ9QMA2Bdc?si=-qsHkeO_HHXviJtG' }
    ]
  },
  {
    title: 'Introduction to Machine Learning',
    description: 'Get started with machine learning and explore its applications.',
    image: 'https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=444',
    duration: '3 months',
    rating: 4.8,
    overview: 'This course provides a comprehensive introduction to machine learning concepts, algorithms, and real-world applications.',
    learningObjectives: [
      'Understand basic concepts of machine learning.',
      'Implement machine learning algorithms using Python.',
      'Analyze and preprocess data for machine learning models.',
      'Apply machine learning techniques to real-world problems.'
    ],
    requirements: [
      'Basic knowledge of Python programming.',
      'Familiarity with fundamental statistics and algebra.'
    ],
    chapters: [
      { title: 'Introduction to Machine Learning', videoLink: 'https://www.youtube.com/embed/ukzFI9rgwfU?si=gJUB6vix8P_7U5QR' },
      { title: 'Data Preprocessing', videoLink: 'https://www.youtube.com/embed/7IgVGSaQPaw?si=UvC5wmdSRmXgBy7o' },
      { title: 'Supervised Learning Algorithms', videoLink: 'https://www.youtube.com/embed/W01tIRP_Rqs?si=b-m7VWMLN3L4QZyf' }
    ]
  },
];

const Coursedetails = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleTabClick = (index) => {
    setSelectedCourseIndex(index);
    const sectionId = `course-${index}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id ${sectionId} not found.`);
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    alert('Feedback submitted: ' + feedback);
    setFeedback(''); // Clear feedback after submission
  };

  const selectedCourse = courseData[selectedCourseIndex];

  return (
    <div>
      <Navbar />
      <div className="course-details-container">
        <div className="course-tabs1">
          {courseData.map((course, index) => (
            <button
              key={index}
              className={`course-tab1 ${index === selectedCourseIndex ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {course.title}
            </button>
          ))}
        </div>

        <div className="course-details-header">
          <img src={selectedCourse.image} alt={selectedCourse.title} className="course-details-header__image" />
          <div className="course-details-header__info">
            <h1 className="course-details-header__title">{selectedCourse.title}</h1>
            <p className="course-details-header__description">{selectedCourse.description}</p>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            <p><strong>Rating:</strong> {selectedCourse.rating} / 5</p>
          </div>
        </div>

        <div id={`course-${selectedCourseIndex}`} className="course-details-content">
          <button
            className="course-details-explore-button"
            onClick={() => document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </button>
          <br />
          <br />
          <br />

          <hr />
          <br />
          <br />
          <br />

          <div className="course-details-section">
            <h2 className="course-details-section__title">Course Overview</h2>
            <p>{selectedCourse.overview}</p>
          </div>

          <div className="course-details-section">
            <h2 className="course-details-section__title">Learning Objectives</h2>
            <ul className="course-details-list">
              {selectedCourse.learningObjectives.map((objective, index) => (
                <li key={index} className="course-details-list-item">{objective}</li>
              ))}
            </ul>
          </div>

          <div className="course-details-section">
            <h2 className="course-details-section__title">Requirements</h2>
            <ul className="course-details-list">
              {selectedCourse.requirements.map((requirement, index) => (
                <li key={index} className="course-details-list-item">{requirement}</li>
              ))}
            </ul>
          </div>

          <div id="chapters" className="course-details-section">
            <h2 className="course-details-section__title">Course Chapters</h2>
            <ul className="course-details-chapters-list">
              {selectedCourse.chapters.map((chapter, index) => (
                <li key={index} className="course-details-chapters-item">
                  <h3>{chapter.title}</h3>
                  <iframe
                    width="560"
                    height="315"
                    src={chapter.videoLink}
                    title={chapter.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe2"
                  ></iframe>
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Section */}
          <div className="feedback-section">
            <h2 className="feedback-section__title">Feedback</h2>
            <textarea
              className="feedback-textarea"
              placeholder="Your feedback here..."
              value={feedback}
              onChange={handleFeedbackChange}
            />
            <button
              className="feedback-submit-button"
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
