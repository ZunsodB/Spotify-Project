import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './assets/css/index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {BrowserRouter as Router} from 'react-router-dom'

<<<<<<< HEAD
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
=======
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Router>
        <App />
      </Router>
    </ClerkProvider>
  </React.StrictMode>,
)
>>>>>>> ecae11c36e3e7debaf4024379e6a7aa7e0693bce
