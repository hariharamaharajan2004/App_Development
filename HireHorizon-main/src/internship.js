import React, { useState } from 'react';
import './internship.css';
import Navbar from './navbar';

const internships = [
  {
    title: 'Software Engineer Intern',
    company: 'Tech Innovations',
    description: 'Work on cutting-edge technology projects and gain valuable industry experience.',
    image: 'https://www.maersk.com/~/media_sc9/maersk/corporate/careers/technology/images/engineering/working-employee_720x405.jpg?w=1325&hash=EFC0272346D20EDAAE8357F786EDD185',
  },
  {
    title: 'Marketing Intern',
    company: 'Creative Solutions',
    description: 'Assist in creating and executing marketing campaigns for various products.',
    image: 'https://www.digitalvidya.com/blog/wp-content/uploads/2015/09/Digital-Marketing-Internship-Sites-in-India-1.jpg',
  },
  {
    title: 'Graphic Design Intern',
    company: 'Design Masters',
    description: 'Help design visuals for web and print media, including social media graphics.',
    image: 'https://cdn.sanity.io/images/mz2hls6g/production/9268f765d8fb0ffe16daca67834def0d0c785e43-5760x3840.jpg?w=3840&q=75&fit=clip&auto=format',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Data Experts',
    description: 'Analyze and interpret complex data to help guide business decisions.',
    image: 'https://miro.medium.com/v2/resize:fit:1024/0*SsD6DNuP3IBf83Hp.jpg',
  },
  {
    title: 'Content Writer Intern',
    company: 'Content Creators',
    description: 'Write and edit content for blogs, websites, and other digital platforms.',
    image: 'https://www.rgbwebtech.com/services/images/uploads/content-writing-internship-and-training.png',
  },
  {
    title: 'Human Resources Intern',
    company: 'HR Solutions',
    description: 'Assist with recruiting, onboarding, and employee engagement activities.',
    image: 'https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/What-is-human-resources.jpg',
  },
];

const Internship = () => {
    const [popupVisible, setPopupVisible] = useState(false);
  
    const handleApplyClick = () => {
      console.log('Apply button clicked'); // Debugging line
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 2000); // Hide popup after 2 seconds
    };
  
    return (
      <div>
        <Navbar />
        <div className='tit99'>
          <h2>Available Internships</h2>
        </div>
        <div className="internship-container">
          {internships.map((internship, index) => (
            <div className="internship-card" key={index}>
              <img src={internship.image} alt={internship.title} className="internship-image" />
              <div className="internship-content">
                <h3>{internship.title}</h3>
                <h4>{internship.company}</h4>
                <p>{internship.description}</p>
                <button onClick={handleApplyClick} className="apply-button77">Apply</button>
              </div>
            </div>
          ))}
        </div>
        {popupVisible && (
          <div className="popup">
            <div className="popup-box">Applied Successfully</div>
          </div>
        )}
      </div>
    );
  };
  
export default Internship;
