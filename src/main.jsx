import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // <- aqui

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
