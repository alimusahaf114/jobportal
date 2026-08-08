import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { jobProvider } from './context/jobsContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <jobProvider>
    <App/>
    </jobProvider>
  </StrictMode>,
)
