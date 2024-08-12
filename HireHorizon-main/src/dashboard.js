import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './navbar.js';
import Footer from './footer.js';

import './dashboard.css';
import tcsLogo from './tcs-logo.png';
import iciciLogo from './icici-logo.png';
import wellsFargoLogo from './wellsfargo-logo.png';
import datamaticsLogo from './datamatics-logo.png';
import amazonLogo from './amazon-logo.png';
import actelent from './actalent-logo.png';
import airtelLogo from './airtel-logo.png';
import capegeminiLogo from './capegemini-logo.png';
import profilePic1 from './profile-pic1.png';
import profilePic2 from './profile-pic2.png';
import profilePic3 from './profile-pic3.png';

const Dashboard = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [followedCompanies, setFollowedCompanies] = useState({});

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlecomRedirect = () => {
    navigate('/companies');
  };

  const handleFollowClick = (company) => {
    setFollowedCompanies((prev) => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  const companies = [
    { logo: tcsLogo, name: 'Tata Consultancy Services', rating: '3.8', reviews: '78K+ reviews', description: 'Explore challenging and exciting opportunities at TCS' },
    { logo: iciciLogo, name: 'ICICI Bank', rating: '4.0', reviews: '34.5K+ reviews', description: 'Leading private sector bank in India.' },
    { logo: wellsFargoLogo, name: 'Wells Fargo', rating: '4.0', reviews: '5.5K+ reviews', description: 'Start your future now' },
    { logo: datamaticsLogo, name: 'Datamatics', rating: '3.5', reviews: '1.8K+ reviews', description: 'Global digital solutions & technology company.' },
    { logo: amazonLogo, name: 'Amazon', rating: '4.1', reviews: '60K+ reviews', description: 'World\'s largest e-commerce company.' },
    { logo: actelent, name: 'Actalent', rating: '4.1', reviews: '80K+ reviews', description: 'Global Engineering company.' },
    { logo: airtelLogo, name: 'Airtel', rating: '4.1', reviews: '58K+ reviews', description: 'Largest telecom provider.' },
    { logo: capegeminiLogo, name: 'Capegemini', rating: '4.1', reviews: '108K+ reviews', description: 'Global leader in consulting and digital transformation.' }
  ];

  const successStories = [
    { profilePic: profilePic1, name: 'Wade Wilson', jobTitle: 'Software Engineer at TCS', story: 'Landing my dream job at TCS was a game-changer for my career. Thank you Hirehorizon.' },
    { profilePic: profilePic2, name: 'Sarah Smith', jobTitle: 'Data Analyst at ICICI Bank', story: 'HireHorizon provided me with the platform to grow and excel in my career.' },
    { profilePic: profilePic3, name: 'John Vooslo', jobTitle: 'Product Manager at Amazon', story: 'HireHorizon has been a fantastic place to create my career.' }
  ];

  const carouselSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true
        }
      }
    ]
  };

  return (
    <div className="dashboard">
      <Navbar />
      <main className="main">
        <div className='hi2'>
          <div className='hi3'>
            <h1 className='jk'>Welcome to our Shigoto!</h1>
            <h2>"Find your dream job now"</h2>
            <p className='jk1'>5 lakh+ jobs for you to explore</p>
          </div>
          {/* <div className="search-bar">
            <input type="text" placeholder="Job titles, key words or company" />
            <select>
              <option value="">Choose Location</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="chennai">Chennai</option>
              <option value="erode">Erode</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
              <option value="salem">Salem</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
            <button className="search-button">Search</button>
          </div> */}
          <div className="promotion">
            <h3>Think career, Think Shigoto</h3>
            <p className='jk1'>A comprehensive collection of tools, services, and resources designed to accelerate your professional growth and success.</p>
            <button className="explore-button" onClick={handleExploreClick}>Start exploring</button>
          </div>
        </div>
        <div ref={sectionRef} className="featured-companies">
          <h3>Featured companies actively hiring</h3>
          <div className="company-cards">
            {companies.map((company, index) => (
              <div className="company-card" key={index}>
                <img src={company.logo} alt={company.name} />
                <h4>{company.name}</h4>
                <p className="rating">{company.rating} <span>{company.reviews}</span></p>
                <p>{company.description}</p>
                <button className="view-jobs" onClick={() => handleFollowClick(company.name)}>
                  {followedCompanies[company.name] ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
          <button className="view-all-companies" onClick={handlecomRedirect}>View all companies</button>
        </div>
        <div className="sponsored-companies">
          <h3>Sponsored Companies</h3>
          <div className="sponsored-company-cards">
            {companies.map((company, index) => (
              <div className="sponsored-company-card" key={index}>
                <img src={company.logo} alt={company.name} />
                <h4>{company.name}</h4>
                <p>{company.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div><hr></hr><br></br></div>
        <div className="carousel">
          <h3>Success Stories</h3>
          <Slider {...carouselSettings}>
            {successStories.map((story, index) => (
              <div className="success-card" key={index}>
                <img src={story.profilePic} alt={story.name} width="100" height="100" />
                <h4>{story.name}</h4>
                <p>{story.jobTitle}</p>
                <p>{story.story}</p>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
