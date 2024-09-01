
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 hover:bg-gray-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-4xl font-semibold flex items-center tracking-wider text-gray-100 hover:text-yellow-300 transition-colors">
          <FaBox className="mr-2 text-yellow-400" />
          Trend Basket
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="flex items-center text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors">
              <FaHome className="mr-2 text-yellow-300" /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors">
              <FaBox className="mr-2 text-yellow-300" /> Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors">
              <FaInfoCircle className="mr-2 text-yellow-300" /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors">
              <FaEnvelope className="mr-2 text-yellow-300" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
