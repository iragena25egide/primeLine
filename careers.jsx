import React from 'react';

const Careers = () => {
  return (
    <div className="py-16 px-4 md:px-12">

      {/* Career Block 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
        <div className="w-full md:w-2/5 p-4">
          <h4 className="text-2xl text-gray-700 font-semibold mb-4">Why PrimeLine</h4>
          <p className="text-base text-gray-700 mb-6">
            Seeking new frontiers in your career path? Discover how your journey aligns with ours. Explore opportunities at Tech Mahindra, and join a collective of vibrant, creative innovators and technologists.
          </p>
          <button className="w-1/2 py-3 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
            LEARN MORE
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img src="/image/career.webp" alt="Office" className="w-full rounded-lg transform hover:scale-105 transition duration-300" />
        </div>
      </div>

      {/* Career Block 2 */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
        <div className="w-full md:w-2/5">
          <img src="/image/career2.jpg" alt="Office" className="w-full rounded-lg transform hover:scale-105 transition duration-300" />
        </div>
        <div className="w-full md:w-2/5 p-4">
          <h4 className="text-2xl text-gray-700 font-semibold mb-4">Why PrimeLine</h4>
          <p className="text-base text-gray-700 mb-6">
            Seeking new frontiers in your career path? Discover how your journey aligns with ours. Explore opportunities at Tech Mahindra, and join a collective of vibrant, creative innovators and technologists.
          </p>
          <button className="w-1/2 py-3 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Career Block 3 */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
        <div className="w-full md:w-2/5 p-4">
          <h4 className="text-2xl text-gray-700 font-semibold mb-4">Why PrimeLine</h4>
          <p className="text-base text-gray-700 mb-6">
            Seeking new frontiers in your career path? Discover how your journey aligns with ours. Explore opportunities at Tech Mahindra, and join a collective of vibrant, creative innovators and technologists.
          </p>
          <button className="w-1/2 py-3 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
            LEARN MORE
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img src="/image/career4.webp" alt="Office" className="w-full rounded-lg transform hover:scale-105 transition duration-300" />
        </div>
      </div>

    </div>
  );
};

export default Careers;
