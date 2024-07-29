import React, { useState } from 'react';
import successorImage1 from '../assets/imgs/successor1.jpg';
import successorImage2 from '../assets/imgs/successor2.jpg';
import successorImage3 from '../assets/imgs/successor3.jpg';
import successorImage4 from '../assets/imgs/successor4.jpg';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/oursuccessors.css';

const successors = [
  { src: successorImage1, name: 'Successor One', achievements: 'Achievements of Successor One', moreInfo: 'Additional details about Successor One.' },
  { src: successorImage2, name: 'Successor Two', achievements: 'Achievements of Successor Two', moreInfo: 'Additional details about Successor Two.' },
  { src: successorImage3, name: 'Successor Three', achievements: 'Achievements of Successor Three', moreInfo: 'Additional details about Successor Three.' },
  { src: successorImage4, name: 'Successor Four', achievements: 'Achievements of Successor Four', moreInfo: 'Additional details about Successor Four.' },
];

const OurSuccessors = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedSuccessorIndex, setExpandedSuccessorIndex] = useState(null);

  const handleViewAllToggle = () => {
    setShowAll(!showAll);
  };

  const handleViewDetailsClick = (index) => {
    setExpandedSuccessorIndex(expandedSuccessorIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="featured-successors">
        <h3>Our Successors</h3>
        <div className="filters">
          {/* <button className="filter-button active">All</button> */}
          {/* Add more filter buttons if needed */}
        </div>
        <div className="successor-cards">
          {successors.slice(0, showAll ? successors.length : 4).map((successor, index) => (
            <div key={index} className="successor-card">
              <img src={successor.src} alt={successor.name} />
              <h4>{successor.name}</h4>
              <p>{successor.achievements}</p>
              <button className="view-details" onClick={() => handleViewDetailsClick(index)}>
                {expandedSuccessorIndex === index ? 'Hide details' : 'View details'}
              </button>
              {expandedSuccessorIndex === index && (
                <div className="more-info">
                  <p>{successor.moreInfo}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="view-all-successors" onClick={handleViewAllToggle}>
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default OurSuccessors;
