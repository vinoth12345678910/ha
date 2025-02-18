import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#6133b4] text-white">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        {/* Logo */}
        <h1
          className="font-bold text-2xl p-5 hover:scale-90 hover:opacity-90 transition-transform duration-300 ease-in-out cursor-pointer"
          onClick={() => navigateTo('/')}
        >
          Habify
        </h1>

        {/* Hamburger Icon (for mobile) */}
        <div
          className="block lg:hidden ml-auto cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-row items-center space-x-5 ${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-5 lg:block`}
        >
          <span
            onClick={() => navigateTo('/Loginform')}
            className="text-gray-300 p-5 text-lg hover:text-white cursor-pointer"
          >
            Login Form
          </span>
          <span
            onClick={() => navigateTo('/support')}
            className="text-gray-300 p-5 text-lg hover:text-white cursor-pointer"
          >
            Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

