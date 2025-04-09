import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@innovaccer/design-system/css/dist/index.css';
import App from './App.tsx'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    return worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
