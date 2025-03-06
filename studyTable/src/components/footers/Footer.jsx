import { FaInstagram, FaWhatsapp, FaStar } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-normal">
            Study<span className="font-bold">table</span>
          </h1>
          <p className="text-sm mt-1">© Copyright 2025 Studytable</p>
        </div>

        {/* Notice Board */}
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
            <FaStar className="text-black" /> Notice Board
          </button>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-lg">Socials</h2>
          <div className="flex flex-col gap-2 mt-2">
            <a href="#" className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaWhatsapp /> What's App
            </a>
          </div>
        </div>

        {/* Blogs */}
        <div>
          <h2 className="font-semibold text-lg">Blogs</h2>
          <ul className="mt-2">
            <li>How we plan learning session?</li>
            <li>How we plan assessment session?</li>
            <li>How we manage student life?</li>
            <li>The effective student</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
