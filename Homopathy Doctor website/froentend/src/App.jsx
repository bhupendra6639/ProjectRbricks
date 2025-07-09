// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa'; // ✅ Import doctor icon
import Navigation from './Components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      {/* Doctor name and icon */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow fixed top-0 w-full z-50">
        <div className="flex items-center space-x-3">
          <FaUserMd className="text-3xl text-blue-600" /> {/* ✅ Icon here */}
          <h1 className="text-xl font-semibold text-gray-800">Dr. Kholhe</h1>
        </div>
      </header>

    <div className="pt-20">
        <Navigation />
        <div className="WeapContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Event" element={<Event />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
