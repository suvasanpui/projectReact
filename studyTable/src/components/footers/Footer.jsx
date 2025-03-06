import { FaInstagram, FaWhatsapp, FaStar, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-normal text-white">
              Study
              <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                table
              </span>
            </h1>
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering students with AI-driven personalized learning solutions
              for academic excellence.
            </p>
            <p className="text-sm">© Copyright 2025 Studytable</p>
          </div>

          {/* Notice Board Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Updates</h2>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <FaStar className="text-yellow-300" />
              <span>Notice Board</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Socials Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Connect With Us
            </h2>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <FaInstagram />
                </span>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="bg-gray-800 p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                  <FaWhatsapp />
                </span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Blogs Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Latest Blogs</h2>
            <ul className="space-y-3">
              {[
                "How we plan learning session?",
                "How we plan assessment session?",
                "How we manage student life?",
                "The effective student",
              ].map((blog, index) => (
                <li key={index} className="group cursor-pointer">
                  <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                    {blog}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
      </div>
    </footer>
  );
}
