import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './JobCard.css';

const JobCard = ({ job, onBookmark, onDismiss }) => {
  const [swipeStyle, setSwipeStyle] = useState({});

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeStyle({ transform: 'translateX(-100%)', transition: 'transform 0.5s ease' });
      setTimeout(() => {
        onDismiss(job); // Call dismiss after animation
        setSwipeStyle({}); // Reset swipe style after
      }, 500);
    },
    onSwipedRight: () => {
      setSwipeStyle({ transform: 'translateX(100%)', transition: 'transform 0.5s ease' });
      setTimeout(() => {
        onBookmark(job); // Call bookmark after animation
        setSwipeStyle({}); // Reset swipe style after
      }, 500);
    },
    onSwiping: ({ deltaX }) => {
      setSwipeStyle({ transform: `translateX(${deltaX}px)` }); // Move with touch
    },
    onSwiped: () => {
      setSwipeStyle({ transform: 'translateX(0)', transition: 'transform 0.3s ease' }); // Reset if no action
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="job-card" style={swipeStyle}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobCard;

// import React from 'react'
// import {useSwipeable} from 'react-swipeable';
// import './JobCard.css'

// const JobCard = ({job, onBookmark, onDismiss}) => {
//    const handlers = useSwipeable({
//     onSwipedLeft: () => onDismiss(job),
//     onSwipedRight: () => onBookmark(job),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//    });


//   return (
//     <div {...handlers} className='job-card'>
//       <h3>{job.title}</h3>
//       <p>{job.company}</p>
//       <p>{job.location}</p>
//     </div>
//   )
// }

// export default JobCard

