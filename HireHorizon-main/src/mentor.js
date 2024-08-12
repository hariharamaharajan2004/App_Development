import React from 'react';
import './mentor.css';

const mentors = [
  {
    name: 'Prof. Chuck',
    details: 'Expert in Web Development with 5 years of experience. Has mentored over 100 students.',
    videoLink: 'https://www.youtube.com/embed/xr6uZDRTna0',
    styleClass: 'mentor-chuck',
  },
  {
    name: 'Prof. S. Gaurav Shesh',
    details: 'Specializes in Data Science and machine learning with 7 years of experience.',
    videoLink: 'https://www.youtube.com/embed/csG_qfOTvxw?si=IEwkw66CLQWNTqEj',
    styleClass: 'mentor-gaurav',
  },
  {
    name: 'Prof. M. Aarav Moorthy',
    details: 'UI/UX Design expert with 4 years of experience working on major projects.',
    videoLink: 'https://www.youtube.com/embed/c9Wg6Cb_YlU?si=kQpVo7y8HQDOJMr0',
    styleClass: 'mentor-aarav',
  },
  {
    name: 'Prof. M. Abdul Khaliq',
    details: 'Digital Marketing expert with 6 years of experience known for innovative strategies.',
    videoLink: 'https://www.youtube.com/embed/nU-IIXBWlS4?si=rX2SiFtEEoQHRG89',
    styleClass: 'mentor-abdul',
  },
  {
    name: 'Prof. Khadar Maliq',
    details: 'Cybersecurity expert with 8 years of experience and numerous workshops conducted.',
    videoLink: 'https://www.youtube.com/embed/zMBtvkYRot0?si=vi2n4ye2m9UScD__',
    styleClass: 'mentor-khadar',
  },
  {
    name: 'Prof. Ranjit Roy Chaudhury',
    details: 'Backend Development expert with 4 years of experience in server-side technologies.',
    videoLink: 'https://www.youtube.com/embed/tN6oJu2DqCM?si=QL99_gZXuwnRMy6S',
    styleClass: 'mentor-ranjit',
  },
];

const Mentor = () => {
  return (
    <div className="mentor-container1">
      <h1>Meet Our Mentors</h1>
      <div className="mentor-list">
        {mentors.map((mentor, index) => (
          <div key={index} className={`mentor-section ${mentor.styleClass}`}>
            <h2>{mentor.name}</h2>
            <p>{mentor.details}</p>
            <div className="video-container">
              <iframe
                src={mentor.videoLink}
                title={`${mentor.name}'s Introduction Video`}
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
