import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-primary fixed top-0 left-0 w-full z-50 h-[8vh]">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <Link to="/" className="font-bold text-3xl cursor-pointer">
          Farm Connect
        </Link>
        <div className="hidden md:flex space-x-4 text-2xl">
          <Link to="/" className="text-primary hover:text-tertiary">
            Home
          </Link>
          <Link to="/about" className="text-primary hover:text-tertiary">
            About
          </Link>
          <Link to="/services" className="text-primary hover:text-tertiary">
            Services
          </Link>
          <a href="/contact-us" className="text-primary hover:text-tertiary">
            Contact
          </a>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" hover:text-secondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-4 space-y-2 bg-white w-full">
          <Link to="/" className="block text-primary hover:text-tertiary">
            Home
          </Link>
          <Link to="/about" className="block text-primary hover:text-tertiary">
            About
          </Link>
          <Link to="/services" className="block text-primary hover:text-tertiary">
            Services
          </Link>
          <a href="/contact-us" className="block text-primary hover:text-tertiary">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
