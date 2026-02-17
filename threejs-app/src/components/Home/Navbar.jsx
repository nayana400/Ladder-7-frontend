import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full z-50 fixed top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* Placeholder for Ladder7 Logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center font-bold text-xl italic mr-2">
            L7
          </div>
          <span className="text-xl font-bold tracking-tight">Ladder7</span>
        </div>

        {/* Right Side Content */}
        <div className="flex items-center gap-8">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#who-we-are" className="hover:text-gray-400 transition">Who we are</a>
            <div className="relative group">
              <button className="flex items-center hover:text-gray-400 transition">
                What we do
                <span className="ml-1 text-xs">▼</span>
              </button>
              {/* Dropdown would go here */}
            </div>
            <Link to="/blog" className="hover:text-gray-400 transition">What we think</Link>
            <a href="#careers" className="hover:text-gray-400 transition">Careers</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="px-5 py-2 rounded-md border border-white text-sm font-medium">
              Login
            </a>
            <a href="#" className="px-5 py-2 rounded-md border border-white  text-sm font-medium">
              Signup
            </a>
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
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 shadow-xl relative z-50">
          <a href="#who-we-are" className="block hover:text-gray-400">Who we are</a>
          <a href="#what-we-do" className="block hover:text-gray-400">What we do</a>
          <Link to="/blog" className="block hover:text-gray-400">What we think</Link>
          <a href="#careers" className="block hover:text-gray-400">Careers</a>
          <div className="pt-4 flex flex-col space-y-3">
            <button className="w-full px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm">
              Login
            </button>
            <button className="w-full px-5 py-2 rounded-full border border-gray-600 hover:border-white transition text-sm">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
