function Footer({ hideSocials }) {
  return (
    <footer className="bg-[#112240] text-white py-12 px-6 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Left: Location */}
        <div className="md:col-span-1">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0 mt-1">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <a href="https://www.google.com/maps/search/Ravipuram,+Ernakulam,+Cochin" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400 transition">
                <h3 className="text-xl font-bold mb-1">Ernakulam</h3>
                <p className="text-gray-300">Ravipuram</p>
                <p className="text-gray-300">Cochin</p>
              </a>
            </div>
          </div>
        </div>

        {/* Center: Job Listings (2 columns) */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-300">
          <div className="space-y-3">
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior Mobile App Developer</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior Web Developer</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Digital Marketing Associate</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior Data Analyst</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Salesforce Developer</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior Data Scientist</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior CyberSecurity Analyst</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Adobe Experience Manager (AEM) Author</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">Junior HR Talent Manager</a>
            <a href="#" className="block hover:text-blue-500 hover:underline transition">UI UX Architect</a>
          </div>
        </div>

        {/* Right: Contact Us */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <a href="mailto:info@ladder7.in" className="text-sm">info@ladder7.in</a>
            </div>

            <div className="flex items-center gap-3 hover:text-gray-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+918137979401" className="text-sm">+91 8137979401</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-gray-900 flex flex-col items-center gap-2 text-sm text-gray-400">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <p>© 2025 Ladder7. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
      </button>

      {/* Floating Social Sidebar */}
      {!hideSocials && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-50">
          <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-3 transition-transform hover:-translate-x-1 relative group" aria-label="Instagram">
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              Follow on Instagram
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="bg-green-500 hover:bg-green-600 text-white p-3 transition-transform hover:-translate-x-1 relative group" aria-label="WhatsApp">
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              Chat on WhatsApp
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
            </svg>
          </a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 transition-transform hover:-translate-x-1 relative group" aria-label="Facebook">
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              Follow on Facebook
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-3 transition-transform hover:-translate-x-1 relative group" aria-label="YouTube">
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              Subscribe us on YouTube
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
          <a href="tel:+918137979401" className="bg-blue-500 hover:bg-blue-600 text-white p-3 transition-transform hover:-translate-x-1 relative group" aria-label="Call">
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              Call Us now
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      )}
    </footer>
  );
}

export default Footer;
