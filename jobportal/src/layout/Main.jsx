import React from 'react';
import { jobsData } from '../data/jobs';
const Main = () => {
  return (
    <a href="#">
        <div className='flex justify-center flex-wrap gap-4 p-4'>
      {
        jobsData.map((job) => (
          <div key={job.id} className='flex   h-40 w-90 gap-4 bg-white p-4 rounded-md  mb-4'>
            <div>
            <h2 className='text-xl font-semibold'>{job.title}</h2>
            <span className=''>{job.company}</span>
            <span className='ml-2 text-gray-600'>{job.location}</span>
            </div>
            <span className='text-gray-600'>{job.type}</span>
          </div>
        ))
      }
    </div>
    </a>
  );
}

export default Main;
