import React from 'react';
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
const SearchBox = () => {
  return (
   <div className="w-full flex justify-center px-4 mt-5">
  <div className="w-full mt-3  items-center max-w-4xl bg-white border border-gray-300 rounded-md p-3 flex justify-between flex-col md:flex-row gap-4 ">
  <div className='flex items-center flex-1 px-3 py-1 rounded-full focus-within:ring-2 focus-within:ring-blue-300'>
   <IoSearch className='text-gray-500 text-xl'/>
    <input
      type="text"
      placeholder="Search job title or Company"
      className="w-full md:w-64 lg:w-80 md:flex-1 py-4 px-4 rounded-md outline-none"
    />
  </div>
    <div className="h-10 w-px bg-gray-300"></div>
   <div className='flex items-center flex-1 px-3 py-1 rounded-full focus-within:ring-2 focus-within:ring-blue-300'>
     <CiLocationOn className='text-gray-500 text-xl'/>
    <input
      type="text"
      placeholder="Location"
      className="w-full md:w-64 lg:w-80 py-4 px-4 rounded-md outline-none"
    />
   </div>

    <button className="w-full md:w-auto bg-blue-500 text-white py-5 px-10 rounded-full hover:bg-blue-600">
      Search
    </button>

  </div>
  </div>
  );
}

export default SearchBox;
