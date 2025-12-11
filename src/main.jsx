import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='152511326888-ksfvaoje48j665s49roaij95err9ehvb.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
