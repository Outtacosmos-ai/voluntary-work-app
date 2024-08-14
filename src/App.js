import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav className="bg-gray-800 p-4 text-white">
      
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/" className="mr-4">Home</Link>

          

        </nav> */}

        {/* Define Routes */}
        <Routes>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
