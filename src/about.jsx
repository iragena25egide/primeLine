import React from 'react';

const About = () => {
  return (
    <div className="relative mt-16 px-4 md:px-16">
      {/* About Box Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black bg-opacity-95 p-6 w-11/12 md:w-1/3 animate-[translateY_2s_linear] z-10">
        <div className="flex flex-col justify-center items-center text-center text-white">
          <p className="text-lg mb-4">Scale at speed</p>
          <h4 className="text-2xl font-semibold mb-4">True Scalability, Agility, and Responsiveness</h4>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-800 transition-all">
            Know Me
          </button>
        </div>
      </div>

      {/* About Content Section */}
      <div className="bg-white px-4 py-16 md:py-32 text-center w-11/12 md:w-9/12 mx-auto mt-32">
        <h4 className="text-4xl font-semibold text-gray-900">Scale at Speed</h4>
        <h2 className="text-4xl font-semibold text-red-600 mt-4">With Prime Line</h2>
        <p className="text-lg text-gray-700 mt-6">
          Thriving in the current dynamic landscape demands technological solutions that enable both transformative scale and unparalleled speed.
        </p>
      </div>

      {/* About Image Section */}
      <div className="w-full h-72 md:h-96 clip-path-polygon relative bg-cover bg-center bg-no-repeat mt-8" style={{ backgroundImage: 'url(/public/image/scale.jpg)' }}>
        {/* Optional Overlay (for better text visibility on the background image) */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
  );
};

export default About;
