import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Why KPMG", path: "/why-kpmg" },
    { title: "Practice Areas", path: "/practice-areas" },
    { title: "Entry Careers", path: "/entry-careers" },
    { title: "Experienced", path: "/experienced" },
    { title: "Contractor", path: "/contractor" },
    { title: "Executive", path: "/executive" },
    { title: "Job Search", path: "/job-search" },
  ];

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">KPMG</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="px-3 py-2 text-sm hover:bg-blue-800 rounded-md transition duration-300 flex items-center"
              >
                {link.title}
                {link.title === "Job Search" && <SearchIcon />}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link to="/job-search" className="p-2">
              <SearchIcon />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-white hover:bg-blue-800 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                  {link.title === "Job Search" && <SearchIcon />}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;