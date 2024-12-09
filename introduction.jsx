import React from 'react';

const Introduction = () => {
  return (
    <div className="w-full mt-24 relative">
    {/* Left Blurred Background with Text */}
    <div
      className="w-full md:w-9/10 h-96 md:h-[500px] relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(/public/image/try.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-black/30"
        style={{
          filter: 'blur(8px)',
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
        }}
      ></div>
  
      {/* Text Overlay */}
      <div className="absolute z-10 left-1/4 transform -translate-x-1/4 text-white text-center w-[45%]">
        <h4 className="font-semibold text-4xl md:text-6xl leading-tight">
          Scale at speed
        </h4>
        <p className="text-lg text-gray-200 font-medium mt-4">
          Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.
        </p>
        <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-gray-900 transition">
          Know More
        </button>
      </div>
    </div>
  
    {/* Right Section with Content */}
   
  </div>
  
  );
};

export default Introduction;
