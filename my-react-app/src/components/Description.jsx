import { useState } from 'react';
import '../styles/Description.css';
import Frame46 from '../assets/Frame 46.svg';
import Frame117 from '../assets/Frame 117.svg';

const Description = () => {
  const [formData, setFormData] = useState({
    headline: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextClick = () => {
    console.log('Form Values:', formData);
  };

  return (
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
          <button className="nav-button">
            <img src={Frame46} alt="Previous" />
          </button>
          <button className="nav-button" onClick={handleNextClick}>
            <img src={Frame117} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
