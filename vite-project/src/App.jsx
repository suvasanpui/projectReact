import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import jsonData from "./data.json";
import "./index.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [data] = useState(jsonData);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-white"
            >
              {data.aboutMe.name}
            </motion.h1>
            <div className="flex space-x-6">
              {["about", "skills", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`text-white hover:text-purple-400 transition-colors ${
                    activeSection === item ? "border-b-2 border-purple-500" : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Hero Section */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl font-bold">{data.aboutMe.role}</h2>
            <p className="text-xl text-gray-300">{data.aboutMe.bio}</p>
            <div className="flex space-x-4">
              {Object.entries(data.aboutMe.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-purple-500 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Render other sections */}
          {/* ...existing sections... */}
        </motion.div>
      </main>
    </div>
  );
};

export default App;