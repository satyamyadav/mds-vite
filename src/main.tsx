import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@innovaccer/design-system/css/dist/index.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
