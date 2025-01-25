import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SplashCursor from '../SplashCursor.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SplashCursor /> */}
  </StrictMode>,
)
