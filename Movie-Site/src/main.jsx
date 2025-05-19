import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importing the main App component
createRoot(document.getElementById('root')).render(
  // Wrapping the App component with StrictMode for highlighting potential problems in an application
  // and enabling additional checks and warnings for its descendants
  // This is a development tool and does not affect the production build
  // It helps to identify potential problems in an application
  <StrictMode>
    {/* Rendering the App component */}
    <App />
  </StrictMode>,
)
