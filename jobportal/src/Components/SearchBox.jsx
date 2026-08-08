import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { jobsData } from "../data/jobs";
import { jobsContext } from "../context/jobsContext";
const SearchBox = () => {
  const {search , setSearch} = useContext(jobsContext)
  const filteredData = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  });
  console.log(filteredData);

  return (
    <div className="w-full flex justify-center px-4 mt-5">
      <div className="w-full mt-3 items-start md:items-center max-w-6xl bg-white border border-gray-300 rounded-md md:rounded-full p-2 flex justify-between flex-col md:flex-row gap-4 ">
        <div className="flex items-center flex-1 px-3 py-1 rounded-full focus-within:ring-2 focus-within:ring-blue-300">
          <IoSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job title or Company"
            className="w-full items-center flex-1 md:flex-1 py-3 px-4 rounded-md outline-none"
          />
        </div>
        <div className="hidden md:block h-10 w-px bg-gray-300"></div>
        <div className="flex items-center flex-1 px-3 py-1 rounded-full focus-within:ring-2 focus-within:ring-blue-300">
          <CiLocationOn className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Location"
            className="w-full items-center flex-1 py-3 px-4 rounded-md outline-none"
          />
        </div>

        <button className="w-full md:w-auto bg-blue-500 text-white py-3 px-7 rounded-full hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
