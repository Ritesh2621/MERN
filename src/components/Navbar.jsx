import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-700 font-bold text-2xl">Practice</div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-blue-700 hover:text-blue-950 focus:outline-none"
          >
            {isOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li>
              <Link
            to="/"
                className="block font-semibold text-blue-700 hover:text-blue-950 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
            to="/about"
                className="block font-semibold text-blue-700 hover:text-blue-950  "
              >
                About
              </Link>
            </li>
            <li>
              <Link
            to="/contact"
                className="block font-semibold text-blue-700 hover:text-blue-950 "
              >
               Contact
              </Link>
            </li>
            <li>
              <Link
            to="/login"
                className="block font-semibold text-blue-700 hover:text-blue-950 "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
            to="/registration"
                className="block font-semibold text-blue-700 hover:text-blue-950 "
              >
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
