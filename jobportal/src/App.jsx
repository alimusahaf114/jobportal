import React from 'react';
import Home from './Pages/Home';
import { jobProvider } from './context/jobsContext';
import './App.css';
const App = () => {
  return (
    <div>
        <JobProvider>
          <Home/>
        </JobProvider>
    </div>
  );
}

export default App;
