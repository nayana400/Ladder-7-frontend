import { Link } from "react-router-dom";
import logo from "../../assets/Images/LADDER 7 LOGO.png";

function Footer() {
  return (
    <footer className="bg-[oklch(0.97_0_0)] text-gray-900 pt-16 pb-8 px-6 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-8">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-6 min-w-[180px]">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Ladder7 Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-blue-900">Ladder7</span>
              <span className="text-[10px] text-gray-600 font-medium whitespace-nowrap">NextStep Solutions</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        {/* Links Sections Container */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 2: Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Products</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Amiu</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Mirror Me</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">My Ladder</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Mind Gym</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Fill Dots</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Blogs</Link>
              <Link to="/careers" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Careers</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">Contact Form</Link>
            </div>
          </div>

          {/* Column 4: Our Locations */}
          <div className="flex flex-col gap-4 min-w-[150px]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Our Locations</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <div>
                <p className="font-bold text-gray-800">Cochin</p>
                <p className="text-[12px] leading-relaxed">WEE SPACES Ernakulam</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Trivandrum</p>
                <p className="text-[12px] leading-relaxed">Kinfra Film and IT Park<br/>Trivandrum</p>
              </div>
            </div>
          </div>

          {/* Column 5: Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+918137979401" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">+91 8137979401</a>
              <a href="mailto:info@ladder7.in" className="text-gray-600 hover:text-blue-600 hover:underline transition-all">info@ladder7.in</a>
            </div>
          </div>
        </div>

        {/* Column 6: Internship Card Section (Featured Card) */}
        <div className="lg:max-w-xs w-full">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 flex flex-col gap-4 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-8 -mt-8 -z-0"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Certified Program</span>
            </div>

            <div className="relative z-10">
              <h5 className="text-xl font-bold text-gray-900 mb-2">Internship</h5>
              <p className="text-[12px] leading-relaxed text-gray-500 font-medium">
                Official certification provider for advanced internship and financial technologies.
              </p>
            </div>

            <Link 
              to="/careers" 
              className="relative z-10 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider flex items-center gap-2 group/link"
            >
              Learn More
              <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p className="text-gray-500">
          © 2026 <span className="text-gray-800">Ladder7 NextStep Solutions.</span> All rights reserved.
        </p>
        <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors italic">
          Privacy Policy
        </Link>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-50 bg-blue-700 hover:bg-blue-800 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
