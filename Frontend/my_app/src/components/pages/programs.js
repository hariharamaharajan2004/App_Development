import React, { useState } from 'react';
import programImage1 from '../assets/imgs/program1.jpg';
import programImage2 from '../assets/imgs/program2.jpg';
import programImage3 from '../assets/imgs/program3.jpg';
import programImage4 from '../assets/imgs/program4.jpg';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/programs.css';

const programs = [
  { src: programImage1, name: 'Program One', rating: '4.5', reviews: '120', description: 'Description of Program One', moreInfo: 'Additional details about Program One.' },
  { src: programImage2, name: 'Program Two', rating: '4.2', reviews: '95', description: 'Description of Program Two', moreInfo: 'Additional details about Program Two.' },
  { src: programImage3, name: 'Program Three', rating: '4.7', reviews: '150', description: 'Description of Program Three', moreInfo: 'Additional details about Program Three.' },
  { src: programImage4, name: 'Program Four', rating: '4.8', reviews: '200', description: 'Description of Program Four', moreInfo: 'Additional details about Program Four.' },
];

const Programs = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedProgramIndex, setExpandedProgramIndex] = useState(null);

  const handleViewAllToggle = () => {
    setShowAll(!showAll);
  };

  const handleViewDetailsClick = (index) => {
    setExpandedProgramIndex(expandedProgramIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="featured-programs">
        <h3>Featured Programs</h3>
        <div className="filters">
          {/* <button className="filter-button active">All</button> */}
          {/* Add more filter buttons if needed */}
        </div>
        <div className="program-cards">
          {programs.slice(0, showAll ? programs.length : 4).map((program, index) => (
            <div key={index} className="program-card">
              <img src={program.src} alt={program.name} />
              <h4>{program.name}</h4>
              <p className="rating">{program.rating} <span>{program.reviews} reviews</span></p>
              <p>{program.description}</p>
              <button className="view-details" onClick={() => handleViewDetailsClick(index)}>
                {expandedProgramIndex === index ? 'Hide details' : 'View details'}
              </button>
              {expandedProgramIndex === index && (
                <div className="more-info">
                  <p>{program.moreInfo}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="view-all-programs" onClick={handleViewAllToggle}>
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Programs;
