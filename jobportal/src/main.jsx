import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JobProvider } from './context/JobsContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <JobProvider>
    <App/>
    </JobProvider>
  </StrictMode>,
)
