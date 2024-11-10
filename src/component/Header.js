// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-semibold">My Website</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
