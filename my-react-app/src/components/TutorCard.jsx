// Import necessary dependencies
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TutorCard.css";
import profileLogo from "../assets/profileLogo.svg";
import acharyaGlogo from "../assets/acharyaGlogo.svg";
import MapMarker from "../assets/MapMarker.svg";
import nextArrow from "../assets/nextArrow.svg";
import prevArrow from "../assets/prevArrow.svg";
import Rupee from "../assets/Rupee.svg";
import Training from "../assets/Training.svg";
import Computer from '../assets/Computer.svg'
import Home from '../assets/Home.svg'
import Whatsapp from '../assets/Whatsapp.svg'
import linkedin from '../assets/linkedin.svg'
import message from '../assets/message.svg'
import scanner from '../assets/scanner.svg'
import Call from '../assets/Call.svg'


/**
 * TutorCard Component
 * Displays detailed information about a tutor including their profile, stats, and biography
 * 
 * @param {Object} props
 * @param {string} props.name - Tutor's full name
 * @param {string} props.distance - Distance from student in km
 * @param {string} props.fee - Monthly tutoring fee
 * @param {string} props.subject - Subject taught by tutor
 * @param {string} props.board - Educational board (e.g., CBSE)
 * @param {number} props.rating - Tutor's rating out of 5
 * @param {number} props.reviews - Number of reviews received
 * @param {string} props.shortBio - Brief biography shown initially
 * @param {string} props.longBio - Detailed biography shown when expanded
 */
const TutorCard = ({
  name = "Suva Sanpui",
  distance = "2",
  fee = "200",
  subject = "Mathematics",
  board = "CBSE",
  type="online",
  socialLink1="Linkedin",
  socialLink2="Whatsapp",
  socialLink3="Message",
  communicate="Call",
  bio="Resume",
  home="Home",
  rating = 4,
  reviews = 2,
  shortBio = "5 years of professional SWE experience | 2 years of tutoring experience | Master's in Computer Science from VIT Chennai | Expert in tutoring Mathematics, GRE, GMAT, and Coding at all levels",
  longBio = "With a Bachelor's degree in Computer Science from SRM University, Chennai, and a Master's degree in Data Science from the University of Arizona, I bring a solid academic foundation and practical expertise to my teaching. My four years of industry experience, including my role as a Data Engineer at Vodafone, have equipped me with real-world insights into solving complex problems. I am passionate about teaching Mathematics and Computer Programming, and I specialize in guiding students to excel in their GRE and GMAT preparation.",
}) => {
  // State to manage the expanded/collapsed view of the bio
  const [expanded, setExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const stats = [
    { icon: MapMarker, label: `${distance} km` },
    { icon: Rupee, label: `${fee} /Month` },
    { icon: acharyaGlogo, label: subject },
    { icon: Training, label: board },
    { icon: Computer, label: type },
    { icon: linkedin, label: socialLink1 },
    { icon: scanner, label: bio },
    { icon: Whatsapp, label: socialLink2 },
    { icon: message, label: socialLink3 },
    { icon: Home, label: home },
    { icon: Call, label: communicate }
  ];

  // Add animation timing
  const handleTransition = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Match CSS transition duration
  };

  const handlePrev = () => {
    if (currentSlide > 0 && !isAnimating) {
      handleTransition();
      setCurrentSlide(curr => curr - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < stats.length - 4 && !isAnimating) {
      handleTransition();
      setCurrentSlide(curr => curr + 1);
    }
  };

  // Toggle function for expanding/collapsing the detailed bio
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="tutor-card">
      {/* Profile section with image and statistics */}
      <div className="profile-section">
        <div className="profile-content">
          <div className="profile-image-stats">
            <div className="profile-image">
              <img src={profileLogo} alt="Profile" />
            </div>
            <button 
              className="stat-item" 
              onClick={handlePrev}
              disabled={currentSlide === 0 || isAnimating}
            >
              <img src={prevArrow} alt="Previous" className="arrow-button" />
            </button>
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-item ${
                    index < currentSlide ? 'exiting' :
                    index >= currentSlide + 4 ? 'entering' : ''
                  }`}
                  style={{ '--slide-offset': currentSlide }}
                >
                  <img src={stat.icon} alt={stat.label} />
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <button 
              className="stat-item" 
              onClick={handleNext}
              disabled={currentSlide >= stats.length - 4 || isAnimating}
            >
              <img src={nextArrow} alt="Next" className="arrow-button" />
            </button>
          </div>
          <div className="profile-info">
            <h3 className="tutor-name">{name}</h3>
            <div className="rating">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)} {reviews} Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Short biography section */}
      <p className="bio">{shortBio}</p>

      {/* Expandable button for showing/hiding detailed bio */}
      <button
        onClick={toggleExpanded}
        className="expand-button"
        aria-expanded={expanded}
      >
        About{" "}
        {expanded ? (
          <span className="above-icon"></span>
        ) : (
          <span className="below-icon"></span>
        )}
      </button>

      {/* Expanded biography section - conditionally rendered */}
      {expanded && <div className="expanded-content">{longBio}</div>}
    </div>
  );
};

// PropTypes for type checking
TutorCard.propTypes = {
  name: PropTypes.string,
  distance: PropTypes.string,
  fee: PropTypes.string,
  subject: PropTypes.string,
  board: PropTypes.string,
  type: PropTypes.string,
  socialLink1: PropTypes.string,
  socialLink2: PropTypes.string,
  socialLink3: PropTypes.string,
  communicate: PropTypes.string,
  bio: PropTypes.string,
  home: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  shortBio: PropTypes.string,
  longBio: PropTypes.string,
};

// Default props
TutorCard.defaultProps = {
  shortBio:
    "5 years of professional SWE experience | 2 years of tutoring experience | Master's in Computer Science from VIT Chennai | Expert in tutoring Mathematics, GRE, GMAT, and Coding at all levels",
  longBio:
    "With a Bachelor's degree in Computer Science from SRM University, Chennai, and a Master's degree in Data Science from the University of Arizona, I bring a solid academic foundation and practical expertise to my teaching. My four years of industry experience, including my role as a Data Engineer at Vodafone, have equipped me with real-world insights into solving complex problems. I am passionate about teaching Mathematics and Computer Programming, and I specialize in guiding students to excel in their GRE and GMAT preparation.",
};

export default TutorCard;
