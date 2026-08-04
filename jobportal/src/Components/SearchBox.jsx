import React from 'react';

const SearchBox = () => {
  return (
   <div className=' flex justify-center '>
    <div className=' rounded-full bg-white mt-5 w-3/4 border border-gray-300  px-5 py-3 flex justify-center  gap-5 items-center'>
      <input type="text" placeholder='Search job title or Company' className='w-170 bg-white rounded-md py-4 px-4 focus:outline-none '/>
      <input type="text" placeholder='Location' className='w-100 bg-white rounded-md py-4 px-4 focus:outline-none '/>
      <button className='bg-blue-500 text-white py-4 px-6 rounded-full hover:bg-blue-600 focus:outline-none '>Search</button>
    </div>
   </div>
  );
}

export default SearchBox;
