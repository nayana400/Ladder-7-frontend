import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#1a365d] text-white w-full z-50 fixed top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Placeholder for Ladder7 Logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center font-bold text-xl italic mr-2">
            L7
          </div>
          <span className="text-xl font-bold tracking-tight">Ladder7</span>
        </Link>

        {/* Right Side Content */}
        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#who-we-are" className="hover:text-gray-400 transition">Who we are</a>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center hover:text-gray-400 transition focus:outline-none"
              >
                What we do
                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a365d]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-3 z-50 animate-fadeIn overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                  <Link to="/program/1" className="block px-5 py-2.5 hover:bg-white/10 text-sm transition-colors relative z-10" onClick={() => setDropdownOpen(false)}>My Ladder</Link>
                  <Link to="/program/2" className="block px-5 py-2.5 hover:bg-white/10 text-sm transition-colors relative z-10" onClick={() => setDropdownOpen(false)}>Mind Gym</Link>
                  <Link to="/program/3" className="block px-5 py-2.5 hover:bg-white/10 text-sm transition-colors relative z-10" onClick={() => setDropdownOpen(false)}>Mirror Me</Link>
                  <Link to="/program/4" className="block px-5 py-2.5 hover:bg-white/10 text-sm transition-colors relative z-10" onClick={() => setDropdownOpen(false)}>Fill Dots</Link>
                </div>
              )}
            </div>
            <Link to="/blog" className="hover:text-gray-400 transition">What we think</Link>
            <a href="#careers" className="hover:text-gray-400 transition">Careers</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/login" className="px-5 py-2 rounded-md border border-white text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="px-5 py-2 rounded-md border border-white  text-sm font-medium">
              Signup
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1a365d] border-t border-gray-800 px-6 py-4 space-y-4 shadow-xl relative z-50">
          <a href="#who-we-are" className="block hover:text-gray-400 py-2" onClick={() => setOpen(false)}>Who we are</a>

          <div className="space-y-2">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full hover:text-gray-400 py-2 focus:outline-none"
            >
              What we do
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {mobileDropdownOpen && (
              <div className="pl-4 space-y-2 border-l border-gray-800 ml-1">
                <Link to="/program/1" className="block hover:text-gray-400 py-1 text-sm text-gray-400" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}>My Ladder</Link>
                <Link to="/program/2" className="block hover:text-gray-400 py-1 text-sm text-gray-400" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}>Mind Gym</Link>
                <Link to="/program/3" className="block hover:text-gray-400 py-1 text-sm text-gray-400" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}>Mirror Me</Link>
                <Link to="/program/4" className="block hover:text-gray-400 py-1 text-sm text-gray-400" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}>Fill Dots</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="block hover:text-gray-400 py-2" onClick={() => setOpen(false)}>What we think</Link>
          <a href="#careers" className="block hover:text-gray-400">Careers</a>
          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/login" className="w-full text-center block px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm">
              Login
            </Link>
            <Link to="/signup" className="w-full text-center block px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm">
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
