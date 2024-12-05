import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './assets/css/index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {BrowserRouter as Router} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Router>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </Router>
    </ClerkProvider>
  </React.StrictMode>,
)