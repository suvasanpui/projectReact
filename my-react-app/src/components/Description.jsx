/**
 * Description Component
 * Form component for property headline and description
 */

// Component for property description form
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Description.css';
import Frame46 from '../assets/Frame 46.svg';
import Frame117 from '../assets/Frame 117.svg';

/**
 * Description component for property details form
 * @returns {JSX.Element} Property description form
 */
const Description = () => {
  // Form state for headline and description
  const [formData, setFormData] = useState({
    headline: '',
    description: ''
  });

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleNextClick = () => {
    console.log('Form Values:', formData);
  };

  return (
    // Form container
    <div className="description-wrapper">
      <div className="description-card">
        <h2 className="card-title">
          Add a Headline and Description
        </h2>
        <p className="card-subtitle">
          Please explain your property details in form of a bio and description
        </p>
        
        <div className="form-group">
          <label className="form-label">Headline</label>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleInputChange}
            placeholder="Enter your headline"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter your description"
            className="form-textarea"
          ></textarea>
        </div>
        
        <div className="navigation-buttons">
          <Link to="/" className="nav-button">
            <img src={Frame46} alt="Previous" />
          </Link>
          <button className="nav-button" onClick={handleNextClick}>
            <img src={Frame117} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;





