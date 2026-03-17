import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/LADDER 7 LOGO.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCareersClick = (e) => {
    if (location.pathname === "/careers") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
    setDropdownOpen(false);
  };

  const menuData = {
    services: [
      { name: "Web and App Development", path: "/services#web-app-dev" },
      { name: "Product Development & Innovation", path: "/services#product-dev" },
      { name: "IT Consultancy", path: "/services#it-consultancy" },
      { name: "Digital Marketing", path: "/services#digital-marketing" },
      { name: "Hyper Automation", path: "/services#hyper-automation" },
      { name: "Remote Workforce Solutions", path: "/services#remote-workforce" },
      { name: "Skill Development and Training", path: "/services#skill-development" }
    ],
    products: [
      { name: "My Ladder", path: "/program/1" },
      { name: "Mind gym", path: "/program/2" },
      { name: "Mirror me", path: "/program/3" },
      { name: "Fill Dots", path: "/program/4" },
      { name: "Amiu", path: "#programs" }
    ],
    programs: [
      { name: "Take off", path: "#our-programs" },
      { name: "Experience The First job", path: "#our-programs" },
      { name: "Earn more", path: "#our-programs" },
      { name: "Best pick", path: "#our-programs" }
    ]
  };

  const handleLinkClick = (e, path) => {
    if (path.startsWith("#")) {
      handleHashClick(e, path);
    } else {
      navigate(path);
      setDropdownOpen(false);
      setOpen(false);
    }
  };

  return (
    <nav className="bg-[#000000] text-white w-full z-50 fixed top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Ladder7 Logo" className="h-10 w-auto object-contain mr-2" />
          <span className="text-xl font-bold tracking-tight text-white">Ladder7</span>
        </Link>

        {/* Right Section: Menu items and Action buttons Grouped */}
        <div className="flex items-center gap-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/about" className="hover:text-gray-400 transition py-2 whitespace-nowrap">Who we are</Link>
            <div
              ref={dropdownRef}
              className="relative group/menu"
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center hover:text-gray-400 transition focus:outline-none py-2 whitespace-nowrap"
              >
                What we do
                <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {dropdownOpen && (
                <div
                  className="fixed left-0 w-full bg-[#121212] backdrop-blur-2xl border-b border-white/10 shadow-2xl z-40 animate-fadeIn"
                  style={{ top: '72px' }}
                >


                  <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                    <div className="grid grid-cols-3 gap-x-20 justify-items-center text-center">
                      {/* Our Services */}
                      <div className="w-full max-w-[250px]">
                        <h4
                          className="text-white font-bold text-lg mb-8 flex items-center justify-center gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header"
                          onClick={(e) => handleLinkClick(e, "/services")}
                        >
                          <span className="w-1.5 h-6 bg-blue-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Our services
                        </h4>
                        <div className="flex flex-col gap-4 items-center">
                          {menuData.services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-400 hover:text-white text-sm transition-all hover:scale-110 hover:underline underline-offset-4"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Products */}
                      <div className="w-full max-w-[250px]">
                        <h4
                          className="text-white font-bold text-lg mb-8 flex items-center justify-center gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header"
                          onClick={(e) => handleLinkClick(e, "#programs")}
                        >
                          <span className="w-1.5 h-6 bg-purple-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Products
                        </h4>
                        <div className="flex flex-col gap-4 items-center">
                          {menuData.products.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-400 hover:text-white text-sm transition-all hover:scale-110"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Our Programs */}
                      <div className="w-full max-w-[250px]">
                        <h4
                          className="text-white font-bold text-lg mb-8 flex items-center justify-center gap-2 cursor-pointer hover:underline underline-offset-8 transition-all group/header"
                          onClick={(e) => handleLinkClick(e, "#our-programs")}
                        >
                          <span className="w-1.5 h-6 bg-green-500 rounded-full group-hover/header:scale-110 transition-transform"></span>
                          Our Programs
                        </h4>
                        <div className="flex flex-col gap-4 items-center">
                          {menuData.programs.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-gray-400 hover:text-white text-sm transition-all hover:scale-110"
                              onClick={(e) => handleLinkClick(e, item.path)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/" className="hover:text-gray-400 transition py-2 whitespace-nowrap" onClick={(e) => handleLinkClick(e, "/")}>What we think</Link>
            <Link to="/careers" onClick={handleCareersClick} className="hover:text-gray-400 transition py-2 whitespace-nowrap">Careers</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-5 py-2 rounded-md border border-white text-sm font-medium hover:bg-white hover:text-[#1a365d] transition-all whitespace-nowrap">
              Login
            </Link>
            <Link to="/signup" className="px-5 py-2 rounded-md border border-white text-sm font-medium hover:bg-white hover:text-[#1a365d] transition-all whitespace-nowrap">
              Signup
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#121212] border-t border-gray-800 px-6 py-4 space-y-4 shadow-xl relative z-50 max-h-[85vh] overflow-y-auto">
          <Link to="/about" className="block hover:text-gray-400 py-2 border-b border-white/5" onClick={() => setOpen(false)}>Who we are</Link>

          <div className="space-y-4">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full hover:text-gray-400 py-2 focus:outline-none font-bold"
            >
              What we do
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {mobileDropdownOpen && (
              <div className="pl-4 space-y-6 border-l border-gray-800 ml-1 pb-4">
                {/* Services Section */}
                <div>
                  <h5
                    className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all"
                    onClick={(e) => handleLinkClick(e, "/services")}
                  >
                    Our Services
                  </h5>
                  <div className="space-y-2">
                    {menuData.services.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-400 text-sm hover:text-white hover:underline underline-offset-4 transition-all" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <h5
                    className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all"
                    onClick={(e) => handleLinkClick(e, "#programs")}
                  >
                    Products
                  </h5>
                  <div className="space-y-2">
                    {menuData.products.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-400 text-sm hover:text-white hover:underline underline-offset-4 transition-all" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>

                {/* Programs Section */}
                <div>
                  <h5
                    className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 cursor-pointer hover:underline underline-offset-4 transition-all"
                    onClick={(e) => handleLinkClick(e, "#our-programs")}
                  >
                    Our Programs
                  </h5>
                  <div className="space-y-2">
                    {menuData.programs.map(item => (
                      <Link key={item.name} to={item.path} className="block text-gray-400 text-sm hover:text-white hover:underline underline-offset-4 transition-all" onClick={(e) => handleLinkClick(e, item.path)}>{item.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>


          <Link to="/" className="block hover:text-gray-400 py-2" onClick={() => setOpen(false)}>What we think</Link>
          <Link to="/careers" className="block hover:text-gray-400 py-2" onClick={(e) => { handleCareersClick(e); setOpen(false); }}>Careers</Link>
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
