// Import statements
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import buildingImage from '../assets/image.png';
import Frame116 from '../assets/Frame 116.svg';
import Frame117 from '../assets/Frame 117.svg';
import "../styles/CreateAccountForm.css";

// Data configurations
const countries = ["India", "USA", "UK", "Canada", "Australia"];
const statesByCountry = {
  India: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat","Kolkata"],
  USA: ["California", "Texas", "Florida", "New York", "Illinois"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"]
};

function CreateAccountForm() {
  // State management
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    userType: "Owner",
    firstName: "",
    lastName: "",
    dateOfBirth: null, // Changed to store Date object
    gender: "",
    email: "",
    phoneCode: "",
    phone: "",
    address: {
      country: "",
      street: "",
      state: "",
      pin: "",
      locality: "",
    },
    password: "",
    confirmPassword: "",
  });

  // Form validation
  const checkFormValidity = () => {
    const { firstName, lastName, dateOfBirth, gender, email, phone, password, confirmPassword, address } = formData;
    return Boolean(
      firstName &&
      lastName &&
      dateOfBirth &&
      gender &&
      email &&
      phone &&
      password &&
      confirmPassword &&
      address.country &&
      address.state &&
      address.pin &&
      address.locality &&
      address.street
    );
  };

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    // Check form validity after state update
    setTimeout(() => {
      setIsFormValid(checkFormValidity());
    }, 0);
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date
    });
    setTimeout(() => {
      setIsFormValid(checkFormValidity());
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
  };

  // Helper calculations
  const availableStates = formData.address.country ? statesByCountry[formData.address.country] : [];

  // Component render
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        {/* Left Section - Logo and Title */}
        <div className="logo-section">
          <img src={buildingImage} alt="Building" className="logo-image" />
          <h1 className="logo-text">housing.in</h1>
        </div>

        {/* Right Section - Form Fields */}
        <div>
          <h2 className="form-title">Create Account</h2>

          {/* User Type Selection */}
          <div className="input-group">
            <label>I am a:</label>
            <div className="input-group">
              {["Owner", "Manager", "Tenant"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`user-type-button ${
                    formData.userType === type ? "active" : "inactive"
                  }`}
                  onClick={() => setFormData({ ...formData, userType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Surname"
              value={formData.lastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label>Date of Birth:</label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              placeholderText="Select Date of Birth"
              className="input-field"
              maxDate={new Date()}
            />
          </div>

          <div className="input-group">
            <label>Gender:</label>
            <div className="input-group">
              {["Male", "Female"].map((gender) => (
                <label key={gender} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                  />
                  <span>{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />

          {/* Address Information */}
          <div className="input-group">
            <select
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            
            <select
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="input-field"
              disabled={!formData.address.country}
            >
              <option value="">Select State</option>
              {availableStates?.map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="address.pin"
              placeholder="PIN Code"
              value={formData.address.pin}
              onChange={handleChange}
              className="input-field"
              maxLength="6"
            />
            <input
              type="text"
              name="address.locality"
              placeholder="Locality"
              value={formData.address.locality}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <textarea
              name="address.street"
              placeholder="Residential Address"
              value={formData.address.street}
              onChange={handleChange}
              className="input-field"
              rows="3"
            />
          </div>

          {/* Password Fields */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="button-group">
            <button 
              type="button" 
              className="nav-button"
              onClick={() => console.log("Previous button clicked")}
            >
              <img src={Frame116} alt="Previous" />
            </button>
            <button
              type="button"
              disabled={!isFormValid}
              onClick={() => {
                console.log("Form submitted:", formData);
                handleSubmit({ preventDefault: () => {} });
              }}
              className={`nav-button ${!isFormValid ? 'disabled' : ''}`}
            >
              <img src={Frame117} alt="Next" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
