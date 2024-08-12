import React from 'react';
import './services.css';
import Navbar from './navbar';
import Footer from './footer.js';

const services = [
  {
    title: 'Mentor Advice',
    description: 'Get guidance from experienced mentors to navigate your career path.\n\n- One-on-one mentorship sessions\n- Personalized career advice\n- Expert guidance on job search strategies',
    image: 'https://imageio.forbes.com/specials-images/imageserve/6559fd515920a98780928036/Leader-working-with-his-team-member--showing-importance-of-mentoring-/960x0.jpg?format=jpg&width=960',
    link: '/mentor',
  },
  {
    title: 'Skill Development by Courses',
    description: 'Enhance your skills with various online courses tailored to your needs.\n\n- Access to a wide range of courses\n- Flexible learning schedules\n- Certification upon completion',
    image: 'https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg',
    link: '/courses',
  },
  {
    title: 'Job Application Tools',
    description: 'Access tools and resources to streamline your job application process.\n\n- Resume and cover letter templates\n- Application tracking tools\n- Interview preparation resources',
    image: 'https://www.poynter.org/wp-content/uploads/2020/12/shutterstock_1171902040.png',
    link: '/job-application-tools',
  },
  {
    title: 'Internship Opportunities',
    description: 'Find and apply for internships to gain real-world experience.\n\n- Curated internship listings\n- Application tips and guidance\n- Networking opportunities with industry professionals',
    image: 'https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5034286fae0_ABM%20College%20internship%20blog%20main.jpg',
    link: '/internship',
  },
  {
    title: 'Articles About Job Searching',
    description: 'Read articles and tips to improve your job search strategy.\n\n- Latest job search trends\n- Tips for crafting a standout resume\n- Strategies for effective networking',
    image: 'https://www.michaelpage.com.sg/sites/michaelpage.com.sg/files/legacy/16977-tt2-js-article-img1.jpg',
    link: 'https://hbr.org/topic/subject/job-search',
  },
  {
    title: 'User Community',
    description: 'Join a community of job seekers and professionals for networking and support.\n\n- Discussion forums and groups\n- Networking events and meetups\n- Peer support and advice',
    image: 'https://cdn-icons-png.flaticon.com/512/4856/4856041.png',
    link: 'https://www.facebook.com/facebookcommunity/',
  },
];

const Service = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar/>
      <div className='tit99'>
        <h2 className='tit9'>Some of our services we offer!</h2>
      </div>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} className="card-image" />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="go-now-button">Go Now</a>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
