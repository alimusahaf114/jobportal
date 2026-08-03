import React from 'react';

const SearchBox = () => {
  return (
    <div className=' px-4 py-2 flex justify-center  gap-5 items-center'>
      <input type="text" placeholder='Search job title or Company' className='w-170 bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none '/>
      <input type="text" placeholder='Location' className='w-100 bg-white border border-gray-300 rounded-md py-3 px-4 focus:outline-none '/>
      <button className='bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none '>Search</button>
    </div>
  );
}

export default SearchBox;
