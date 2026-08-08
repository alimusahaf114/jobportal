import React, { useState } from 'react';
import Header from '../layout/Header';
import SearchBox from '../Components/SearchBox';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
const Home = () => {
  const [search , setSearch] = useState("")
  return (
    <div className='flex'>
      <div>
      <Sidebar/>
      </div>
      <div>
      <Header/>
      <SearchBox setSearch={setSearch} search={search}/> 
      <Main search={search}/>
      </div>

    </div>
  );
}

export default Home;
