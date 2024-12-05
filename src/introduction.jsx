import React from 'react';

const Introduction = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full md:w-9/10 bg-white p-5">
        <h4 className="font-semibold text-4xl md:text-6xl leading-tight">Scale at speed</h4>
        <p className="text-lg text-gray-700 font-medium mt-4">
          Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.
        </p>
      </div>
      <div
        className="w-full h-96 md:h-[500px] bg-cover bg-center relative mt-8"
        style={{ backgroundImage: 'url(/public/image/homepage.jpg)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-3xl md:text-5xl mb-4">The Prime Line Promise</h1>
          <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-gray-900 transition">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
