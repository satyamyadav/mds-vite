import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div style={{ height: 'calc(100vh - 47px)', overflow: 'auto' }} className='bg-secondary-lightest'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
