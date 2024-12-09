import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mt-24">
      {/* Footer Top Section */}
      <div className="bg-black bg-opacity-80 py-16 px-6 md:px-12 flex justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl text-white font-medium">Careers</h2>
          <p className="text-lg text-white my-4">Gain a heritage. Leave a legacy.</p>
          <button className="w-2/3 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
            JOIN US
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl text-white font-medium">Contact Us</h2>
          <p className="text-lg text-white my-4">What can we help you achieve.</p>
          <button className="w-2/3 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
            SPEAK WITH US
          </button>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="bg-black text-white py-16 px-6 md:px-12 flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-4xl font-medium">Prime Line</h4>
        </div>

        {/* Brand Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-2xl font-medium">Our Brand</h4>
          <p className="text-gray-400 my-2 cursor-pointer">Sustainability</p>
          <p className="text-gray-400 my-2 cursor-pointer">Corporate Citizenship</p>
          <p className="text-gray-400 my-2 cursor-pointer">Investor Relations</p>
          <p className="text-gray-400 my-2 cursor-pointer">Contact Us</p>
        </div>

        {/* News Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-2xl font-medium">News</h4>
          <p className="text-gray-400 my-2 cursor-pointer">Events</p>
          <p className="text-gray-400 my-2 cursor-pointer">Careers</p>
          <p className="text-gray-400 my-2 cursor-pointer">Alumni</p>
          <p className="text-gray-400 my-2 cursor-pointer">Sitemap</p>
          <p className="text-gray-400 my-2 cursor-pointer">Cookie Preferences</p>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4 flex justify-between items-center space-x-4">
          <FaFacebook color="#FEFEFE" size={26} />
          <FaInstagram color="#FEFEFE" size={26} />
          <RiTwitterXFill color="#FEFEFE" size={26} />
          <FaLinkedin color="#FEFEFE" size={26} />
          <FaYoutube color="#FEFEFE" size={26} />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-black py-4 text-center border-t border-gray-600">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} PrimeLine. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
