import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Layout from './layout/Layout';
import Jobs from "./Pages/Jobs"
import SavedJobs from './Pages/SavedJobs';
import About from './Pages/About';
import Home from './Pages/Home';
import './App.css';
import { JobProvider } from './context/JobsContext';
const App = () => {
  return (
    <JobProvider>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
        <Route path="savedJobs" element={<SavedJobs/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>

      </BrowserRouter>
    </JobProvider>
  );
}

export default App;
