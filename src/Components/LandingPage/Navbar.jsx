// Navbar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const SCROLL_OFFSET = -80;
const SCROLL_DURATION = 600;

const NavLink = ({ to, children, onClick }) => (
  <ScrollLink
    to={to}
    smooth
    duration={SCROLL_DURATION}
    offset={SCROLL_OFFSET}
    className="cursor-pointer hover:text-cyan-600 transition-colors"
    onClick={onClick}
    activeClass="text-cyan-600"
    spy={true}
  >
    {children}
  </ScrollLink>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ['home', 'services', 'about', 'contact'];

  const handleNavigation = () => {
    setIsOpen(false);
    navigate('/login');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-2xl font-bold text-cyan-600 cursor-pointer hover:text-cyan-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MedCare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink to={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-all hover:shadow-lg"
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded p-2"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink to={item} onClick={closeMenu}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleNavigation}
                className="px-6 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-all"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};