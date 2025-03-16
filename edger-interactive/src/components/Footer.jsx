import React from "react";
import edgar from '../assets/EDGAR2.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-[#0E4792] to-[#072449] text-[#FFFFFFBD] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={edgar} alt="Logo" className="w-32 mb-3" />
          <p>Transforming Transactions - Empowering Businesses</p>
        </div>

        {/* Useful Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Design Services</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Need Help? */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Policy</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">Facebook</a></li>
            <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">LinkedIn</a></li>
            <li><a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">Whatsapp</a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Address</h3>
          <p>Head office<br />
            Casa Maria, 30/2, K Narayanapura Main Rd,<br />
            Kothanur, Bengaluru, Karnataka 560077<br /><br />
            Branch office<br />
            Mangalore address - Room no.306 3rd Floor,<br />
            Bharathi Building, Opp.Srinivas Hotel,<br />
            K.S.Rao Road, Mangalore-575001<br /><br />
            Mob: +91 9008101767 / +91 7411503007<br />
            sales@edgarinteractive.in<br />
            balaji@edgarinteractive.com
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-400">
        © 2003. Edgar Interactive. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
