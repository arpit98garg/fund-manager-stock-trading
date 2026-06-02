import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Recommendations from './pages/Recommendations';
import Performance from './pages/Performance';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('auth_token');
    setIsAuthenticated(!!token);
  }, []);

  if (!isAuthenticated) {
    return <div className="text-center mt-10">Please Login</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;
