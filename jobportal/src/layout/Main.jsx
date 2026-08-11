import React, { useContext } from "react";
import { jobsData } from "../data/jobs";
import { JobsContext } from "../context/JobsContext";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
const Main = () => {
  const { location, setLocation, search, typeFilter, category } = useContext(JobsContext);
  const filteredData = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    
      const matchLoc =
      job.location == "" ||
      job.location.toLowerCase().includes(location.toLowerCase());
   
      const matchesType =
      typeFilter.length === 0 ||
      typeFilter.some((filter) =>
        filter == "Remote" ? job.location === "Remote" : job.type === filter,
      );
    const matchesCategory = category === "" || job.category === category;

    return matchesSearch && matchesType && matchesCategory && matchLoc;
  });
  const timeAgo = (dateStr) => {
  const days = Math.floor((new Date() - new Date(dateStr)) / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
};

const typeColors = {
  "Full-time": "bg-blue-100 text-blue-700",
  "Part-time": "bg-purple-100 text-purple-700",
  Internship: "bg-green-100 text-green-700",
};
  return (
    <a href="#">
      <div className="flex justify-center flex-wrap gap-4 p-4">
        {filteredData.map((job) => (
          <div
  key={job.id}
  className="flex flex-col w-90 gap-3 bg-white p-4 rounded-md mb-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
>
  <div className="flex justify-between items-start">
    <div className="flex gap-3">
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold shrink-0">
        {job.logo}
      </div>
      <div>
        <h2 className="text-lg font-semibold leading-tight">{job.title}</h2>
        <span className="text-gray-600 text-sm">{job.company}</span>
      </div>
    </div>

    <button
      onClick={(e) => {
        e.stopPropagation(); // card click se alag rakhne ke liye
        // yahan savedJobs context ka toggle function call hoga
      }}
      className="text-xl text-gray-500 hover:text-blue-600 cursor-pointer"
    >
      <IoBookmarkOutline />
    </button>
  </div>

  {/* Location + type badges */}
  <div className="flex flex-wrap gap-2 text-sm">
    <span className="text-gray-600">📍 {job.location}</span>
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[job.type] || "bg-gray-100 text-gray-700"}`}>
      {job.type}
    </span>
  </div>

  {/* Truncated description */}
  <p className="text-sm text-gray-500 line-clamp-2">{job.description}</p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    {job.tags.map((tag) => (
      <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
        {tag}
      </span>
    ))}
  </div>

  {/* Salary + posted date */}
  <div className="flex justify-between items-center pt-1 border-t border-gray-100">
    <span className="text-sm font-medium text-gray-800">{job.salaryRange}</span>
    <span className="text-xs text-gray-400">{timeAgo(job.postedAt)}</span>
  </div>
</div>
        ))}
      </div>
    </a>
  );
};

export default Main;
