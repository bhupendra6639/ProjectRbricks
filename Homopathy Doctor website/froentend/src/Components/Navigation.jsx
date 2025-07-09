// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <ul className="flex space-x-6 text-white font-medium">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
            <li><Link to="/Event" className="hover:text-yellow-300">Event</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
