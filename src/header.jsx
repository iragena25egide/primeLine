import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <button
            className="block md:hidden text-2xl"
            onClick={() => setMenuActive(!menuActive)}
          >
            &#9776;
          </button>
          <img
            src="/public/image/logo.png"
            alt="Logo"
            className="w-32 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center ${
            menuActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <Link to="/about-us" className="hover:underline">
              <li className="py-2 md:py-0">ABOUT US</li>
            </Link>
            <Link to="/innovation" className="hover:underline">
              <li className="py-2 md:py-0">INNOVATION</li>
            </Link>
            <Link to="/careers" className="hover:underline">
              <li className="py-2 md:py-0">CAREERS</li>
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <li className="py-2 md:py-0 cursor-pointer">LEARN MORE</li>
              <div className="absolute hidden top-full left-0 bg-white shadow-lg group-hover:block">
                <ul className="flex flex-col space-y-2 p-4">
                  <Link to="/emergency-service" className="hover:underline">
                    <li>EMERGENCY SERVICE</li>
                  </Link>
                  <Link to="/customer-care" className="hover:underline">
                    <li>CUSTOMER CARE</li>
                  </Link>
                </ul>
              </div>
            </div>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="md:block">
          <Link
            to="/contact-us"
            className="px-4 py-2 border border-gray-400 rounded-full hover:border-black"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
