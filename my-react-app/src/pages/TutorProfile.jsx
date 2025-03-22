import { useState } from "react";
import { FaCamera, FaUserAlt } from "react-icons/fa";
import About from "../components/Tutor/About";
import Bio from "../components/Tutor/Bio";
import Board from "../components/Tutor/Board";
import ClientFeedback from "../components/Tutor/ClientFeedback";
import Contact from "../components/Tutor/contact";
import Standard from "../components/Tutor/Standard";
import Subjects from "../components/Tutor/Subjects";
import TutionLocation from "../components/Tutor/TutionLocation";
import Attach from '../assets/Attach file.svg'
import Link1 from '../assets/Link.svg'

const TutorProfilePage = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  
  const [resumeUrl, setResumeUrl] = useState(null);

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
     
      setResumeUrl(URL.createObjectURL(file));
    }
  };

  const getComponentClass = (id) => {
    switch(id) {
      case 1: return 'md:pt-8';
      case 3: return '';
      case 7: return 'md:pb-5';
      case 8: return 'col-span-1 md:col-span-2'; // ClientFeedback spans full width
      default: return 'gap-0';
    }
  };

  const components = [
    { id: 1, Component: Bio, title: 'Bio' },
    { id: 2, Component: About, title: 'About' },
    { id: 3, Component: TutionLocation, title: 'Tution Location' },
    { id: 4, Component: Board, title: 'Board' },
    { id: 5, Component: Subjects, title: 'Subjects' },
    { id: 6, Component: Contact, title: 'Contact' },
    { id: 7, Component: Standard, title: 'Standard' },
    { id: 8, Component: ClientFeedback, title: 'Client Feedback' }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div 
        className="relative h-56 rounded-t-xl bg-gray-300"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundUpload}
          className="absolute top-4 right-4 hidden"
          id="bg-upload"
        />
        <label
          htmlFor="bg-upload"
          className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          Upload Cover
        </label>
        <div className="absolute top-40 left-1/5 md:left-1/11 transform -translate-x-1/2">
          <div className="relative group">
            <div 
              className={` bg-[#90949C] w-32 h-32 rounded-full border-4 border-white overflow-hidden 
                transition-transform duration-300 group-hover:opacity-90 flex items-center justify-center
                ${!profileImage ? 'bg-gradient-to-br from-purple-500 to-purple-700' : ''}`}
              style={{
                backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {!profileImage && (
                <FaUserAlt className="text-black/90 " size={40} />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              className="hidden"
              id="profile-upload"
            />
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-purple-600 p-3 rounded-full cursor-pointer 
                shadow-lg hover:bg-purple-700 transition-all duration-300 
                border-2 border-white transform translate-y-1 translate-x-1
                hover:scale-110 hover:shadow-xl"
            >
            
              <FaCamera className="text-white" size={16} />
              <div className="absolute -top-8 right-0 bg-white px-2 py-1 rounded-md text-xs 
                text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity 
                duration-300 whitespace-nowrap">
                Change photo
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-20 md:flex md:items-center md:justify-between md:px-8">
        <div className="text-start md:text-left">
          <h1 className="text-3xl font-bold">Sarthak Haldar</h1>
        </div>
        <div className="flex justify-start space-x-4 mt-4 md:mt-0">
          <div className="relative">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 
                transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <img src={Attach} alt="attach" className="w-5 h-5" />
              Upload Resume
            </label>
          </div>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 
                transition-colors inline-flex items-center gap-2"
            >
              <img src={Link1} alt="link" className="w-5 h-5" />
              View Resume
            </a>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {components.map(({ id, Component }) => (
          <div key={id} className={getComponentClass(id)}>
            <Component />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default TutorProfilePage;
