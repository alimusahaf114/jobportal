import React from 'react';

const Header = () => {
  return (
    <div className='sticky top-0 w-auto text-lg px-6 py-3 flex justify-between items-center bg-white border-b-2 border-gray-200'>
      <span>JobBoard</span>
      <ul className='flex gap-4'>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Saved</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button className='px-4 py-1 cursor-pointer border-2 rounded-md border-gray-200'>Sign In</button>
    </div>
  );
}

export default Header;
