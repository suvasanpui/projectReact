import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import '../../styles/Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

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
    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hidden" : ""}`}>
      <div className="navbar-container">
        <div className="nav-content">
          <div>
            <Link to="/" className="brand">KPMG</Link>
          </div>

          <div className="desktop-menu">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="nav-link"
              >
                {link.title}
                {link.title === "Job Search" && <SearchIcon />}
              </Link>
            ))}
          </div>

          <div className="mobile-menu-button">
            <Link to="/job-search">
              <SearchIcon />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
                {link.title === "Job Search" && <SearchIcon />}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;