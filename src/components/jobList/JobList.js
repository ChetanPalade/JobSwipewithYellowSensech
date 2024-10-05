import React, {useState} from 'react';
import JobCard from '../jobCard/JobCard';
import'./JobList.css'

const JobList = () => {

  const [jobs, setJobs] = useState([
    {id: 1, title: "Frontend Developer", company: "YellowSense Technologies", location: "Remote"},
    {id: 2, title: "Full Stack Developer", company: "YellowSense Technologies", location: "Bengaluru"},
    {id: 3, title: "Backend Developer", company: "YellowSense Technologies", location: "Remote"},
    {id: 4, title: "Frontend Developer", company: "Nxtwave Technologies", location: "Hybrid"},
    {id: 5, title: "Fullstack Developer", company: "YellowSense Technologies", location: "Hyderabad"},
    {id: 6, title: "Frontend Developer", company: "YellowSense Technologies", location: "Work From Home"},
       
  ]);

  const [bookmarkedJobs, setBookmarkedJobs] = useState(JSON.parse(localStorage.getItem('bookmarkedJobs')) || []);
  const [dismissedJobs, setDismissedJobs] = useState([]);


  const handleBookmark = (job) => {
    setBookmarkedJobs([...bookmarkedJobs, job]);
    setJobs(jobs.filter(j => j.id !== job.id));
  }

  const handleDismiss = (job) => {
    setDismissedJobs([...dismissedJobs, job]);
    setJobs(jobs.filter(j => j.id !== job.id));
  }

  return (
    <div className='job-list-container'>
      <div className="swipe-info">
         <p>Swipe right to bookmark, left to dismiss</p>
       </div>
      <h1 className='jobList'>Job Lists</h1>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <JobCard
            key= {job.id}
            className="job-card"
            job={job}
            onBookmark= {handleBookmark}
            onDismiss={handleDismiss}
          />
        ))
      ):(
        <p>Sorry! No more jobs available</p>
      )}
     
      <h1 className="bookmark">Bookmarked Job</h1>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map(job => (
          <div key={job.id} 
            className='bookmarked-job'>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
           
          </div>
        ))
      ):(
        <p>Not Bookmarked Job Yet!!!</p>

      )}
      
   
    </div>
  )
}

export default JobList

// import React, { useState } from 'react';
// import './JobList.css';

// const jobs = [
//   { id: 1, title: 'Frontend Developer', company: 'Google', location: 'San Francisco' },
//   { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'New York' },
//   { id: 3, title: 'Full Stack Engineer', company: 'Facebook', location: 'Austin' },
// ];

// const JobList = () => {
//   const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
//   const [dismissedJobs, setDismissedJobs] = useState([]);

//   const handleSwipeRight = (job) => {
//     setBookmarkedJobs([...bookmarkedJobs, job]);
//     console.log('Bookmarked', job);
//   };

//   const handleSwipeLeft = (job) => {
//     setDismissedJobs([...dismissedJobs, job]);
//     console.log('Dismissed', job);
//   };

//   return (
//     <div className="job-list">
//       {jobs
//         .filter((job) => !dismissedJobs.includes(job))
//         .map((job) => (
//           <div
//             key={job.id}
//             className="job-card"
//             onTouchStart={() => {}}
//             onTouchEnd={(e) => {
//               const swipeDistance = e.changedTouches[0].clientX - e.targetTouches[0]?.clientX;
//               if (swipeDistance > 50) handleSwipeRight(job);
//               if (swipeDistance < -50) handleSwipeLeft(job);
//             }}
//           >
//             <h2>{job.title}</h2>
//             <p>{job.company}</p>
//             <p>{job.location}</p>
//           </div>
//         ))}
//       <div className="swipe-info">
//         <p>Swipe right to bookmark, left to dismiss</p>
//       </div>
//     </div>
//   );
// };

// export default JobList;
