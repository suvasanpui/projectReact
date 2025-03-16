// src/components/Header/TopHeader.jsx
import React from "react";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";
import whatsappIcon from "../../assets/whatsapp.svg";
import phoneIcon from "../../assets/call.svg";
import email from "../../assets/email.svg";

const ContactInfo = ({ className }) => (
  <div className={`flex items-center ${className}`}>
    <span className="flex items-center gap-2">
      <img src={phoneIcon} alt="Phone" className="h-4 w-4" />
      <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
      +91 741150 3007 / +91 900810 0167
    </span>
    <span className="flex items-center gap-2 ml-8">
      <img src={email} alt="email" className="h-4 w-4" />
      sales@edgarinteractive.in
    </span>
  </div>
);

const SocialLinks = () => (
  <div className='flex gap-4 '>
    <a href="#">
      <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
    </a>
    <a href="#">
      <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
    </a>
  </div>
);


const TopHeader = () => {
  return (
    <div className="hidden md:block bg-white py-2 px-4">
      <div className="hidden md:flex justify-between items-center text-sm">
        <ContactInfo className="justify-end flex-grow pr-8" />
        <SocialLinks />
      </div>
    </div>
  );
};

export default TopHeader;
