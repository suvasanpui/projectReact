import { useState, useEffect, useRef } from "react";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, Radio } from "../components/ui/radio-group";
import { Select } from "../components/ui/select";
import "../components/ui/styles.css"; // Import styles
import { CgProfile } from "react-icons/cg";

const TutorProfile = () => {
  const [medium, setMedium] = useState([]);
  const [tuitionPlace, setTuitionPlace] = useState("tutors_place"); // Set default value
  const [subjects, setSubjects] = useState([]);
  const [board, setBoard] = useState("");
  const [fee, setFee] = useState("");
  const [frequency, setFrequency] = useState("");
  const [standard, setStandard] = useState("");
  const [academy, setAcademy] = useState("");
  const [address, setAddress] = useState({
    state: "",
    street: "",
    pin: "",
    locality: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  const allSubjects = ["Coding", "Mathematics", "Physics", "GRE", "Chemistry", "Biology", "English"];

  const filteredSubjects = allSubjects.filter(subject =>
    subject.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !subjects.includes(subject)
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMediumChange = (value) => {
    setMedium((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value]
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  const removeSubject = (subjectToRemove) => {
    setSubjects(subjects.filter(subject => subject !== subjectToRemove));
  };

  const handleSearchFocus = () => {
    setShowDropdown(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSubjectSelect = (subject) => {
    if (!subjects.includes(subject)) {
      setSubjects([...subjects, subject]);
      setSearchTerm("");
      setShowDropdown(false);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Expand your reach, empower more students.</h2>
      <p className="text-center">We just need a few more details to get your tutor profile started.</p>

      <div className="form-section">
        {/* Profile Picture Upload */}
        <div className="profile-picture-section">
          <div className="profile-picture-container">
            <div className="profile-picture">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-placeholder">
                  <CgProfile size={100} />
                </div>
              )}
              <label className="camera-icon">
                <Input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden-input"
                />
                📸
              </label>
            </div>
          </div>
        </div>

        {/* Medium Selection */}
        <div>
          <h3>Medium</h3>
          <div className="checkbox-group">
            <Checkbox label="Bengali" checked={medium.includes("Bengali")} onChange={() => handleMediumChange("Bengali")} />
            <Checkbox label="English" checked={medium.includes("English")} onChange={() => handleMediumChange("English")} />
            <Checkbox label="Hindi" checked={medium.includes("Hindi")} onChange={() => handleMediumChange("Hindi")} />
          </div>
        </div>

        {/* Tuition Place */}
        <div>
          <h3>Tuition Place</h3>
          <div className="radio-group">
            <Radio
              name="tuitionPlace"
              value="students_home"
              label="Student's Home"
              checked={tuitionPlace === "students_home"}
              onChange={(e) => setTuitionPlace(e.target.value)}
            />
            <Radio
              name="tuitionPlace"
              value="tutors_place"
              label="Tutor's Place"
              checked={tuitionPlace === "tutors_place"}
              onChange={(e) => setTuitionPlace(e.target.value)}
            />
            <Radio
              name="tuitionPlace"
              value="online"
              label="Online"
              checked={tuitionPlace === "online"}
              onChange={(e) => setTuitionPlace(e.target.value)}
            />
          </div>
        </div>

        {/* Tutor Address */}
        {tuitionPlace === "tutors_place" && (
          <div className="address-section">
            <h3>Tutor Address</h3>
            <div>
              <Select 
                options={["State 1", "State 2"]} 
                value={address.state} 
                onChange={(e) => setAddress({ ...address, state: e.target.value })} 
              />
              <Input 
                placeholder="Street Address" 
                value={address.street} 
                onChange={(e) => setAddress({ ...address, street: e.target.value })} 
              />
              <Input 
                placeholder="Pin" 
                value={address.pin} 
                onChange={(e) => setAddress({ ...address, pin: e.target.value })} 
              />
              <Input 
                placeholder="Locality" 
                value={address.locality} 
                onChange={(e) => setAddress({ ...address, locality: e.target.value })} 
              />
            </div>
          </div>
        )}

        {/* Subjects */}
        <div className="subjects-section">
          <h3>Subjects I want to teach</h3>
          <div className="search-container" ref={searchRef}>
            <Input
              type="text"
              placeholder="Search subjects..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              className="subject-search-input"
            />
            
            {showDropdown && filteredSubjects.length > 0 && (
              <div className="subjects-dropdown">
                {filteredSubjects.map(subject => (
                  <div
                    key={subject}
                    onClick={() => handleSubjectSelect(subject)}
                    className="dropdown-item"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            )}
          </div>

          {subjects.length > 0 && (
            <div className="selected-subjects">
              {subjects.map((subject) => (
                <span key={subject} className="subject-tag">
                  {subject}
                  <button 
                    onClick={() => removeSubject(subject)}
                    className="remove-subject"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Board */}
        <h3>Board</h3>
        <RadioGroup name="board-group">
          <Radio label="CBSE" value="CBSE" checked={board === "CBSE"} onChange={(e) => setBoard(e.target.value)} />
          <Radio label="ICSE" value="ICSE" checked={board === "ICSE"} onChange={(e) => setBoard(e.target.value)} />
          <Radio label="West Bengal" value="West Bengal" checked={board === "West Bengal"} onChange={(e) => setBoard(e.target.value)} />
          <Radio label="Others" value="Others" checked={board === "Others"} onChange={(e) => setBoard(e.target.value)} />
        </RadioGroup>

        {/* Fee and Frequency */}
        <div>
          <h3>My Fee</h3>
          <div className="fee-section">
            <Input type="number" placeholder="Enter fee amount" value={fee} onChange={(e) => setFee(e.target.value)} />
            <Select options={["Per Hour", "Per Class", "Per Month"]} value={frequency} onChange={(e) => setFrequency(e.target.value)} />
          </div>
        </div>

        {/* Standard */}
        <h3>Standard</h3>
        <RadioGroup name="standard-group">
          <Radio 
            label="Primary (1st to 5th std)" 
            value="primary" 
            checked={standard === "primary"} 
            onChange={(e) => setStandard(e.target.value)} 
          />
          <Radio 
            label="Secondary (6th to 10th std)" 
            value="secondary" 
            checked={standard === "secondary"} 
            onChange={(e) => setStandard(e.target.value)} 
          />
          <Radio 
            label="Higher Secondary (11th and 12th std)" 
            value="higher_secondary" 
            checked={standard === "higher_secondary"} 
            onChange={(e) => setStandard(e.target.value)} 
          />
          <Radio 
            label="Skill-based" 
            value="skill_based" 
            checked={standard === "skill_based"} 
            onChange={(e) => setStandard(e.target.value)} 
          />
        </RadioGroup>

        {/* Academy Name */}
        <h3>Please mention the name of your academy (if any)</h3>
        <Input type="text" placeholder="Academy Name" value={academy} onChange={(e) => setAcademy(e.target.value)} />
      </div>
    </div>
  );
};

export default TutorProfile;
