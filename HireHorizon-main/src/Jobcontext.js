import React, { createContext, useState, useEffect, useContext } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [
      // Default jobs if localStorage is empty
      {
        title: 'Front-End Developer',
        company: 'Tech Innovations',
        date: '01 Aug - 30 Aug',
        salary: '₹ 6 - 8 Lacs P.A.',
        location: 'Bangalore',
        experience: '2 - 4 Yrs',
        qualification: 'Bachelor\'s degree in Computer Science',
        tags: ['JavaScript', 'React', 'UI/UX', 'HTML', 'CSS'],
        rating: 4.3,
        reviews: '120 Reviews',
        type: 'Full-time',
        posted: '3 Days ago',
        logo: 'https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg',
      },
      {
        title: 'Project Manager',
        company: 'Global Solutions',
        date: '15 Aug - 15 Sep',
        salary: '₹ 10 - 12 Lacs P.A.',
        location: 'Mumbai',
        experience: '5 - 8 Yrs',
        qualification: 'MBA or equivalent',
        tags: ['Project Management', 'Leadership', 'Agile', 'Scrum'],
        rating: 4.5,
        reviews: '85 Reviews',
        type: 'Full-time',
        posted: '7 Days ago',
        logo: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-global-solutions-logo-free-logo-design-template-png-image_5006935.jpg'
      },
      {
        title: 'Digital Marketing Specialist',
        company: 'Marketing Gurus',
        date: '01 Sep - 30 Sep',
        salary: '₹ 4 - 6 Lacs P.A.',
        location: 'Delhi',
        experience: '2 - 5 Yrs',
        qualification: 'Bachelor\'s degree in Marketing',
        tags: ['SEO', 'Content Marketing', 'Social Media', 'Google Ads'],
        rating: 4.1,
        reviews: '50 Reviews',
        type: 'Contract',
        posted: '10 Days ago',
        logo :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLSg2Oj95Pmymr1fSQ8chPNuFswSkeDFTYg&s'
      },
      {
        title: 'Software Engineer',
        company: 'Code Wizards',
        date: '01 Oct - 31 Oct',
        salary: '₹ 7 - 9 Lacs P.A.',
        location: 'Pune',
        experience: '3 - 6 Yrs',
        qualification: 'Bachelor\'s degree in Software Engineering',
        tags: ['Java', 'Spring Boot', 'Microservices', 'REST API'],
        rating: 4.2,
        reviews: '75 Reviews',
        type: 'Full-time',
        posted: '5 Days ago',
        logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD91qwPU7JeqS1QsFmuUnlklFRevJb56RB4g&s'
      },
      {
        title: 'Graphic Designer',
        company: 'FIS',
        date: '01 Sep - 30 Sep',
        salary: '₹ 3 - 5 Lacs P.A.',
        location: 'Hyderabad',
        experience: '1 - 3 Yrs',
        qualification: 'Bachelor\'s degree in Design',
        tags: ['Adobe Photoshop', 'Illustrator', 'UI/UX Design', 'Branding'],
        rating: 4.0,
        reviews: '60 Reviews',
        type: 'Freelance',
        posted: '8 Days ago',
        logo:'https://logowik.com/content/uploads/images/fis-fidelity-national-information-services-inc-corporate5776.logowik.com.webp'
      },
    ];
  });

  useEffect(() => {
    // Save jobs to localStorage whenever the jobs state changes
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const removeJob = (jobTitle) => {
    setJobs((prevJobs) => prevJobs.filter(job => job.title !== jobTitle));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
