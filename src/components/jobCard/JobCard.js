import React from 'react'
import {useSwipeable} from 'react-swipeable';
import './JobCard.css'

const JobCard = ({job, onBookmark, onDismiss}) => {
   const handlers = useSwipeable({
    onSwipedLeft: () => onDismiss(job),
    onSwipedRight: () => onBookmark(job),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
   });


  return (
    <div {...handlers} className='job-card'>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  )
}

export default JobCard