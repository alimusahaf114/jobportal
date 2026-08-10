import React, { useContext, useState } from "react";
import { MdMenu } from "react-icons/md";
import { JobsContext } from "../context/JobsContext";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { typeFilter, setTypeFilter, category, setCategory } =
    useContext(JobsContext);
  const handleMenuClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const handleTypeToggle = (value) => {
    setTypeFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  return (
    <div
      className={` ${isOpen ? "w-64" : "w-10 "}  sticky top-0 h-screen overflow-hidden translate-x bg-white p-2  transition-all duration-300`}
    >
      <MdMenu className="text-2xl " onClick={handleMenuClick} />
      {isOpen && (
        <div>
          <div className="filters ml-5 mt-4">
            <span className="font-bold text-lg">Filter by</span>
            <div className="filter-option">
              <input
                type="checkbox"
                value="Remote"
                id="Remote"
                checked={typeFilter.includes("Remote")}
                onChange={() => handleTypeToggle("Remote")}
              />
              <label htmlFor="Remote">Remote</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                value="Full-time"
                id="Full-time"
                checked={typeFilter.includes("Full-time")}
                onChange={() => handleTypeToggle("Full-time")}
              />
              <label htmlFor="Full-time">Full-time</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                value="Part-time"
                id="Part-time"
                checked={typeFilter.includes("Part-time")}
                onChange={() => handleTypeToggle("Part-time")}
              />
              <label htmlFor="Part-time">Part-time</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                value="Internship"
                id="Internship"
                checked={typeFilter.includes("Internship")}
                onChange={() => handleTypeToggle("Internship")}
              />
              <label htmlFor="Internship">Internship</label>
            </div>
          </div>
          <div className="category ml-5 mt-4">
            <span className="font-bold text-lg block">Category</span>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              className="ml-4 mt-4 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
