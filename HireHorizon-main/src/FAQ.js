import React, { useState } from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I create a profile?',
    answer: 'To create a profile, click on the "Sign Up" button at the top right of the page and fill in your details.',
  },
  {
    question: 'How do I apply for a job?',
    answer: 'Once you’ve found a job you like, click "Apply" and follow the instructions to submit your application.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on "Forgot Password" on the login page and follow the instructions.',
  },
  {
    question: 'Can I apply for multiple jobs at once?',
    answer: 'Yes, you can apply for multiple jobs at once. Just go to the job listings and apply to each job that interests you.',
  },
  {
    question: 'How can I contact the support team?',
    answer: 'You can contact our support team via the contact form below, or by emailing support@shigoto.com.',
  },
  // Add more FAQs as needed
];
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      question: formData.get('question'),
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/faq/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit question');
      }
  
      const result = await response.json();
      console.log(result);
      // Handle success (e.g., show a message to the user)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  

  return (
    <div>
      <Navbar/>
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>

        <h2>Still Have Questions?</h2>
        <div className="faq-contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="question">Your Question</label>
              <textarea
                id="question"
                name="question"
                rows="4"
                value={formData.question}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;