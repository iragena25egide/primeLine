import React from 'react';

const Network = () => {
  return (
    <div className="bg-gray-50 py-16 mt-24 px-4 md:px-16">
      {/* Left Section */}
      <div className="w-full md:w-2/5 mb-12 md:mb-0 px-4">
        <small className="text-4xl font-caveat text-gray-700">Our Network:</small>
        <h1 className="text-4xl font-semibold my-4 text-gray-800">The Foundation for Modern Solutions</h1>
        <p className="text-lg text-gray-700 mt-4">
          Our fully redundant cloud-based mesh network integrates and transports all forms of data from any device to enhance and personalize the end-user experience.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 grid grid-cols-2 gap-8 px-4">
        <div className="item text-center">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text">
            100M
          </h1>
          <p className="text-lg text-gray-700 mt-2">interactions per year</p>
        </div>

        <div className="item text-center">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text">
            24x7
          </h1>
          <p className="text-lg text-gray-700 mt-2">monitoring and data protection</p>
        </div>

        <div className="item text-center">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text">
            500M
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            endpoints able to connect to the PrimeLine cloud through their service providers
          </p>
        </div>

        <div className="item text-center">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text">
            5
          </h1>
          <p className="text-lg text-gray-700 mt-2">call centers in North America and abroad</p>
        </div>
      </div>
    </div>
  );
};

export default Network;
