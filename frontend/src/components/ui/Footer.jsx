import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Farm Connect</h3>
            <p className="mt-2">
              Bridging the gap between farmers and agricultural experts.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/" className="hover:text-tertiary">
              Home
            </Link>
            <Link to="/about" className="hover:text-tertiary">
              About
            </Link>
            <Link to="/services" className="hover:text-tertiary">
              Services
            </Link>
            <Link to="/contact-us" className="hover:text-tertiary">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 flex justify-center md:justify-between items-center">
          <div className="space-x-4">
          <a
              href="https://github.com/nandwa-j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nandwa-japheth-44115b289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/yukihiraj7?t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="mt-4 md:mt-0">&copy; 2024 Farm Connect</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
