import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleMenuClick = () => {
    console.log("Hello Musahaf");

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={` ${isOpen ? 'w-64' : 'w-10 p-'} overflow-hidden translate-x bg-white p-2 h-screen transition-all duration-300`}>
      <MdMenu className="text-2xl " onClick={handleMenuClick} />
      {isOpen && (
        <div>
          <div className="filters ml-5 mt-4">
            <span className="font-bold text-lg">Filter by</span>
            <div className="filter-option">
              <input type="checkbox" value="Remote" id="Remote" />
              <label htmlFor="Remote">Remote</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" value="Full-time" id="Full-time" />
              <label htmlFor="Full-time">Full-time</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" value="Part-time" id="Part-time" />
              <label htmlFor="Part-time">Part-time</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" value="Internship" id="Internship" />
              <label htmlFor="Internship">Internship</label>
            </div>
          </div>
          <div className="category ml-5 mt-4">
            <span className="font-bold text-lg block">Category</span>
            <select
              name="category"
              id="category"
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
