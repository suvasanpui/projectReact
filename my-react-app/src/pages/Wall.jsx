import { useState } from "react";
import FilterCard from "../components/FilterCard";
import TutorCard from "../components/TutorCard";
import "../styles/Wall.css";

const Wall = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleFilter = () => {
    setShowMobileFilter(!showMobileFilter);
    document.body.style.overflow = !showMobileFilter ? 'hidden' : 'auto';
  };

  return (
    <div className="outer-container">
      {/* Mobile filter overlay */}
      {showMobileFilter && <div className="mobile-filter-overlay" onClick={toggleFilter}></div>}
      
      {/* Desktop filter */}
      <div className="filter-wrapper desktop-filter">
        <FilterCard/>
      </div>

      {/* Mobile filter */}
      <div className={`mobile-filter-wrapper ${showMobileFilter ? 'show' : ''}`}>
        <div className="mobile-filter-header">
          <h3>Filters</h3>
          <button onClick={toggleFilter}>&times;</button>
        </div>
        <FilterCard/>
      </div>

      {/* Tutor cards section */}
      <div className="tutor-card-container">
        <div className="tutor-header">
          <span className="header-title">For You</span>
          <div className="header-tags">
            <span className="header-tag">10 km</span>
            <span className="header-tag">CBSE</span>
            <span className="header-tag">10th</span>
            <span className="header-tag">Mathematics</span>
          </div>
        </div>
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
      </div>

      {/* Mobile filter button */}
      <button className="mobile-filter-button" onClick={toggleFilter}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M7 12H17M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Filters
      </button>
    </div>
  );
};

export default Wall;
