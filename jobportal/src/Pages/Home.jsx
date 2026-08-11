import SearchBox from '../Components/SearchBox';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
const Home = () => {
  return (
    <div className='flex'>
      <div>
      <Sidebar/>
      </div>
      <div className='w-screen'>
      <SearchBox/> 
      <Main />
      </div>

    </div>
  );
}

export default Home;
