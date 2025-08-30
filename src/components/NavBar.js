// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Lanka Milk Foods</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/employees" className="text-white">View Employees</Link>
          </li>
          <li>
            <Link to="/products" className="text-white">View Products</Link>
          </li>
          <li>
            <Link to="/distributions" className="text-white">View Distribution</Link>
          </li>
          <li>
            <Link to="/login" className="text-white">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
