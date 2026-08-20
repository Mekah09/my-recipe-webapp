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
      <nav className="sticky top-0 z-50 w-full border-b border-mocha/30 bg-charcoal text-milk shadow-lg shadow-charcoal/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[4.5rem] items-center justify-between gap-5">

            {/* 1. Logo Section */}
            <div className="flex shrink-0 cursor-pointer items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-taupe/60 text-oat">
                <FaFeatherAlt className="text-base" />
              </span>
              <span className="hidden text-xl font-semibold tracking-[0.18em] text-milk sm:inline">Haykay</span>
            </div>

            {/* 2. Desktop Navigation Links */}
            <div className="hidden items-center gap-8 md:flex">
              <NavLink to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="text-sm transition-colors hover:text-milk"
              >
                Home
              </NavLink>

              <NavLink to={"/Recipes"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="text-sm transition-colors hover:text-milk"
              >
                All Recipes
              </NavLink>
              <NavLink to={"/Wishlist"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="text-sm transition-colors hover:text-milk"
              >
                Saved
              </NavLink>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">

              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-24 rounded-full border border-taupe/50 bg-milk/10 py-2 pl-3 pr-8 text-sm text-milk placeholder:text-taupe focus:border-oat focus:outline-none focus:ring-1 focus:ring-oat sm:w-48 lg:w-60"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-taupe transition-colors hover:text-oat sm:right-3">
                  <FaSearch className="text-sm" />
                </button>
              </div>

              {/* Wishlist Button (Beside the hamburger on mobile) */}
              <button className="relative flex items-center justify-center p-1 text-taupe transition-colors hover:text-oat md:hidden">
                <FiHeart className="text-xl sm:text-2xl" />
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span> */}
              </button>

              {/* Mobile Menu Toggle Button (Hamburger) */}
              <button
                onClick={toggleMenu}
                className="pl-1 text-taupe transition-colors hover:text-oat focus:outline-none md:hidden"
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>

          </div>
        </div>

        {/* 5. Mobile Dropdown Menu */}
        <div
          className={`absolute w-full overflow-hidden border-t border-mocha/30 bg-charcoal shadow-xl transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="space-y-4 px-5 pb-5 pt-3">
            {/* Mobile Links ONLY */}
            <div className="flex flex-col space-y-3 pt-2">
              <NavLink to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="border-b border-mocha/20 pb-3 text-sm"
              >
                Home
              </NavLink>

              <NavLink to={"/Recipes"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="border-b border-mocha/20 pb-3 text-sm"
              >
                Recipes
              </NavLink>
              <NavLink to={"/Wishlist"}
                style={({ isActive }) => ({
                  color: isActive ? "#E5DED2" : "#A39382",
                  fontWeight: isActive ? "600" : "400"
                })}
                className="text-sm"
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