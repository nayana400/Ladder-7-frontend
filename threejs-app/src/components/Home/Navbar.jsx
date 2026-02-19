import { useState } from "react";
<<<<<<< HEAD
import { Link, useLocation, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> adarsh-feature

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCareersClick = (e) => {
    if (location.pathname === "/careers") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleHashClick = (e, hash) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + hash);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <nav className="bg-[#1a365d] text-white w-full z-50 fixed top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
          <svg width="40" height="40" viewBox="0 0 100 100" className="mr-2">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b026ff" />
                <stop offset="50%" stopColor="#0047ff" />
                <stop offset="100%" stopColor="#00c2ff" />
              </linearGradient>
            </defs>
            <path
              d="M 25 0 L 100 0 L 75 100 L 0 100 Z M 50 20 L 90 20 L 70 50 L 85 50 L 55 80 L 10 80 L 30 50 L 15 50 Z"
              fill="url(#logoGradient)"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight">Ladder7</span>
        </Link>

        {/* Right Side Content */}
        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/about" className="hover:text-gray-400 transition">Who we are</Link>
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
<<<<<<< HEAD
            <Link to="/careers" onClick={handleCareersClick} className="hover:text-gray-400 transition">Careers</Link>
=======
            <a href="#careers" className="hover:text-gray-400 transition">Careers</a>
>>>>>>> adarsh-feature
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/login" className="px-5 py-2 rounded-md border border-white text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="px-5 py-2 rounded-md border border-white text-sm font-medium">
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
<<<<<<< HEAD
        <div className="md:hidden bg-[#1a365d] border-t border-gray-800 px-6 py-4 space-y-4 shadow-xl relative z-50">
          <Link to="/about" className="block hover:text-gray-400 py-2" onClick={() => setOpen(false)}>Who we are</Link>

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
          <Link to="/careers" className="block hover:text-gray-400 py-2" onClick={(e) => { handleCareersClick(e); setOpen(false); }}>Careers</Link>
=======
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 shadow-xl relative z-50">
          <a href="#who-we-are" className="block hover:text-gray-400">Who we are</a>
          <a href="#what-we-do" className="block hover:text-gray-400">What we do</a>
          <Link to="/blog" className="block hover:text-gray-400">What we think</Link>
          <a href="#careers" className="block hover:text-gray-400">Careers</a>
>>>>>>> adarsh-feature
          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/login" className="w-full text-center block px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="w-full text-center block px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm" onClick={() => setOpen(false)}>
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
