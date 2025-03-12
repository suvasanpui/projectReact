import { useState } from 'react';
import '../styles/FilterCard.css';

const FilterCard = () => {
    const [distance, setDistance] = useState(25);

    return (
        <div className="filter-card">
            {/* Subjects */}
            <div className="filter-section">
                <h3 className="filter-title">Subjects</h3>
                <div className="option-list">
                    {["Career", "GMAT/GRE", "Study Abroad", "Psychotherapist", "Scholarships", "Diet & Nutrition", "Defence - NCC / BMT / NDA", "Merchant navy"].map((subject, index) => (
                        <label key={index} className="option-item">
                            <input type="checkbox" className="option-input" />
                            {`Counsellor - ${subject}`}
                        </label>
                    ))}
                </div>
            </div>

            {/* Board */}
            <div className="filter-section">
                <h3 className="filter-title">Board</h3>
                <div className="option-list">
                    {["All", "CBSE", "ICSE", "Others", "West Bengal"].map((board, index) => (
                        <label key={index} className="option-item">
                            <input type="radio" name='board' className="option-input" />
                            {board}
                        </label>
                    ))}
                </div>
            </div>

            {/* Standard */}
            <div className="filter-section">
                <h3 className="filter-title">Standard</h3>
                <div className="option-list">
                    {["Primary (1st to 5th std)", "Secondary (6th to 10th std)", "Higher Secondary (11th and 12th std)", "Skill-based"].map((standard, index) => (
                        <label key={index} className="option-item">
                            <input type="radio" name="standard" className="option-input" />
                            {standard}
                        </label>
                    ))}
                </div>
            </div>

            {/* Counseling Place */}
            <div className="filter-section">
                <h3 className="filter-title">Counseling Place</h3>
                <div className="option-list">
                    {["Client's home", "Counsellor's place", "Online"].map((place, index) => (
                        <label key={index} className="option-item">
                            <input type="radio" name="place" className="option-input" />
                            {place}
                        </label>
                    ))}
                </div>
            </div>

            {/* Distance */}
            <div className="filter-section">
                <h3 className="filter-title">Distance</h3>
                <input
                    type="range"
                    min="1"
                    max="50"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="distance-slider"
                />
                <p className="distance-value">{distance} km</p>
            </div>
        </div>
    );
};

export default FilterCard;
