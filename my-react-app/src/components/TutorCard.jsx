import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TutorCard.css";
import profileLogo from "../assets/profileLogo.svg";
import acharyaGlogo from "../assets/acharyaGlogo.svg";
import MapMarket from "../assets/MapMarker.svg";
import nextArrow from "../assets/nextArrow.svg";
import prevArrow from "../assets/prevArrow.svg";
import Rupee from "../assets/Rupee.svg";
import Training from "../assets/Training.svg";

const TutorCard = ({
  name = "Suva Sanpui",
  distance = "2",
  fee = "200",
  subject = "Mathematics",
  board = "CBSE",
  rating = 4,
  reviews = 2,
  shortBio,
  longBio,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="white-container">
      <div className="tutor-card-container">
        <div className="tutor-card">
          <div className="profile-section">
            <div className="profile-content">
              <div className="profile-image-stats">
                <div className="profile-image">
                  <img src={profileLogo} alt="Profile" />
                </div>
                <div className="stat-item">
                  <img src={prevArrow} alt="prevarrow" />
                </div>
                <div className="stats-container">
                  <div className="stat-item">
                    <img src={MapMarket} alt="MapMarket" />
                    <div className="stat-label">{distance} km</div>
                  </div>
                  <div className="stat-item">
                    <img src={Rupee} alt="Rupee" />
                    <div className="stat-label">{fee} /Month</div>
                  </div>
                  <div className="stat-item">
                    <img src={acharyaGlogo} alt="logo" />
                    <div className="stat-label">{subject}</div>
                  </div>
                  <div className="stat-item">
                    <img src={Training} alt="training" />
                    <div className="stat-label">{board}</div>
                  </div>
                </div>
                <div className="stat-item">
                  <img src={nextArrow} alt="nextarrow" />
                </div>
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
          <p className="bio">{shortBio}</p>

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

          {expanded && <div className="expanded-content">{longBio}</div>}
        </div>
      </div>
    </div>
  );
};

TutorCard.propTypes = {
  name: PropTypes.string,
  distance: PropTypes.string,
  fee: PropTypes.string,
  subject: PropTypes.string,
  board: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  shortBio: PropTypes.string,
  longBio: PropTypes.string,
};

TutorCard.defaultProps = {
  shortBio:
    "5 years of professional SWE experience | 2 years of tutoring experience | Master's in Computer Science from VIT Chennai | Expert in tutoring Mathematics, GRE, GMAT, and Coding at all levels",
  longBio:
    "With a Bachelor's degree in Computer Science from SRM University, Chennai, and a Master's degree in Data Science from the University of Arizona, I bring a solid academic foundation and practical expertise to my teaching. My four years of industry experience, including my role as a Data Engineer at Vodafone, have equipped me with real-world insights into solving complex problems. I am passionate about teaching Mathematics and Computer Programming, and I specialize in guiding students to excel in their GRE and GMAT preparation.",
};

export default TutorCard;
