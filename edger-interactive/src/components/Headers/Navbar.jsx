import React, { useState } from "react";
import edgar from "../../assets/EDGAR-LOGO.svg";
import Hamburger from "../Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-white md:bg-[#1E7BC2] relative">
      <div className="flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-3 px-6 md:px-12 bg-white relative"
             style={{
               clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)"
             }}>
          <img src={edgar} alt="Logo" className="w-24 h-16 md:w-30 md:h-20" />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-8 text-white text-lg">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Solution</a>
        </div>

        {/* Contact Us Button - Desktop */}
        <button className="hidden md:block bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition mr-6">
          Contact Us
        </button>

        {/* Hamburger Menu - Mobile */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden mr-4 text-[#1E7BC2]">
          <Hamburger/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full md:hidden bg-white shadow-lg z-50 ${
        isMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="flex flex-col space-y-4 p-4">
          <a href="#" className="text-[#1E7BC2] hover:text-blue-600">Home</a>
          <a href="#" className="text-[#1E7BC2] hover:text-blue-600">About Us</a>
          <a href="#" className="text-[#1E7BC2] hover:text-blue-600">Products</a>
          <a href="#" className="text-[#1E7BC2] hover:text-blue-600">Solution</a>
          <button className="bg-[#1E7BC2] text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition w-full">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
