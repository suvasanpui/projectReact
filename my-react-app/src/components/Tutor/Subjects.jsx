import { useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';

const Subjects = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [subjectsText, setSubjectsText] = useState("Chess, Mathematics");

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Subjects</h2>
        {isEditing ? (
          <button onClick={() => setIsEditing(false)} className="flex items-center gap-2 text-white md:w-36 hover:text-green-700 bg-green-800 w-30 h-8 rounded-xl justify-center">
            <FaSave size={18} />
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 bg-purple-800 w-30 h-8 rounded-xl justify-center md:w-36 text-white hover:text-gray-100">
            <FaEdit size={18} />
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <textarea
          value={subjectsText}
          onChange={(e) => setSubjectsText(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="2"
        />
      ) : (
        <p>{subjectsText}</p>
      )}
    </div>
  );
};

export default Subjects;
