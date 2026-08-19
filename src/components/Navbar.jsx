import { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaFeatherAlt } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" bg-charcoal text-milk shadow-md w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* 1. Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <FaFeatherAlt className="text-indigo-600 text-3xl" />
              <span className="font-bold text-xl text-pretty text-milk tracking-wide">Haykay</span>
            </div>

            {/* 2. Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#A39382" : "#FBF7F4",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                Home
              </NavLink>

              <NavLink to={"/Recipes"}
                style={({ isActive }) => ({
                  color: isActive ? "#A39382" : "#FBF7F4",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                All Recipes
              </NavLink>
              <NavLink to={"/Wishlist"}
                style={({ isActive }) => ({
                  color: isActive ? "#A39382" : "#FBF7F4",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                Saved
              </NavLink>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6">

              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-32 sm:w-48 lg:w-64 pl-3 sm:pl-4 pr-8 sm:pr-10 py-1.5 text-sm sm:text-base rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
                <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <FaSearch className="text-sm sm:text-base" />
                </button>
              </div>

              {/* Wishlist Button (Beside the hamburger on mobile) */}
              <button className="md:hidden text-gray-600 hover:text-red-500 transition-colors relative flex items-center justify-center p-1">
                <FiHeart className="text-xl sm:text-2xl" />
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span> */}
              </button>

              {/* Mobile Menu Toggle Button (Hamburger) */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none pl-1"
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>

          </div>
        </div>

        {/* 5. Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-4">
            {/* Mobile Links ONLY */}
            <div className="flex flex-col space-y-3 pt-2">
              <NavLink to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                Home
              </NavLink>

              <NavLink to={"/Recipes"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                Recipes
              </NavLink>
              <NavLink to={"/Wishlist"}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "gray",
                  fontWeight: isActive ? "bold" : "normal"
                })}
              >
                Saved Recipes
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>



  );
};

export default Navbar;