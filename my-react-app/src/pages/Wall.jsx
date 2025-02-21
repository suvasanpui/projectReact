import TutorCard from "../components/TutorCard";
import "../styles/Wall.css";
const Wall = () => {
  return (
    <div className="outer-container">
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
      </div>
    </div>
  );
};

export default Wall;
