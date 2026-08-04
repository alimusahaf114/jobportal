import React from 'react';
import Header from '../layout/Header';
import SearchBox from '../Components/SearchBox';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
const Home = () => {
  return (
    <div>
      <Header/>
      <SearchBox/> 
       <div className='flex '>
        <Main className='w-3/4'/>

       </div>
    </div>
  );
}

export default Home;
