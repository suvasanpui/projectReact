import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import buildingImage from '../assets/image.png';

// Add country and state data
const countries = ["India", "USA", "UK", "Canada", "Australia"];
const statesByCountry = {
  India: ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat"],
  USA: ["California", "Texas", "Florida", "New York", "Illinois"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"]
};

function CreateAccountForm() {
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
  };

  // Add new handler for date change
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
  };

  // Add available states based on selected country
  const availableStates = formData.address.country ? statesByCountry[formData.address.country] : [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-3"
      >
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={buildingImage}
            alt="Building"
            className="w-32 h-32"  // Fixed: removed curly braces
          />
          <h1 className="text-xl font-bold mt-2 text-purple-700">housing.in</h1>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Create Account</h2>

          {/* User Type */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">I am a:</label>
            <div className="flex space-x-4">
              {["Owner", "Manager", "Tenant"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-4 py-2 rounded-lg ${
                    formData.userType === type
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFormData({ ...formData, userType: type })}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="flex mb-3 space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Surname"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Date of Birth:</label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              placeholderText="Select Date of Birth"
              className="border border-gray-300 rounded-lg p-2 w-full"
              maxDate={new Date()}
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Gender:</label>
            <div className="space-x-4">
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

          {/* Other Fields */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="mb-3 border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="mb-3 border border-gray-300 rounded-lg p-2 w-full"
          />

          <div className="flex mb-3 space-x-2">
            <select
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
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
              className="border border-gray-300 rounded-lg p-2 w-full"
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

          <div className="flex mb-3 space-x-2">
            <input
              type="text"
              name="address.pin"
              placeholder="PIN Code"
              value={formData.address.pin}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-1/3"
              maxLength="6"
            />
            <input
              type="text"
              name="address.locality"
              placeholder="Locality"
              value={formData.address.locality}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-2/3"
            />
          </div>

          <div className="mb-3">
            <textarea
              name="address.street"
              placeholder="Residential Address"
              value={formData.address.street}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full resize-none"
              rows="3"
            />
          </div>

          <div className="flex mb-3 space-x-2">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-1.5 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
