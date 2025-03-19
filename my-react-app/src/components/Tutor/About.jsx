import { useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';

const About = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "With a Bachelor degree in Computer Science from SIEM University, Chemistry and Maths Mentor Sarthak is a dedicated professional with years of experience. He enjoys working closely with students and applying practical knowledge to everyday life. By teaching the foundations and providing application-oriented training, he helps students excel in various academic and competitive exams. His primary focus is to help students build the right mindset to excel in their GRE and GMAT preparation."
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">About</h2>
        {isEditing ? (
          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 text-white md:w-36 hover:text-green-700 bg-green-800 w-30 h-8 rounded-xl justify-center"
          >
            <FaSave size={18} />
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-purple-800 w-30 h-8 rounded-xl justify-center md:w-36 text-white hover:text-gray-100"
          >
            <FaEdit size={18} />
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <textarea
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="6"
        />
      ) : (
        <p>{aboutText}</p>
      )}
    </div>
  );
};

export default About;