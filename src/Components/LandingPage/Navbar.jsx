import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-2xl font-bold text-cyan-600 cursor-pointer hover:text-cyan-700 transition-colors"
          onClick={() => navigate('/')}
        >
          MedCare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.path)}
                className="cursor-pointer hover:text-cyan-600 transition-colors"
              >
                {item.name}
              </button>
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
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="hover:text-cyan-600 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavigation('/login')}
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