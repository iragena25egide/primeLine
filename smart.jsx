import React from 'react';

const Smart = () => {
  return (
    <div className="bg-white py-16 mt-24 px-4 md:px-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-700">
          Smart Technology, Human Support, <br />
          and the Data That <span className="font-caveat text-blue-500">Connects</span> Them
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          For 20 years, PrimeLine has developed network communications solutions that combine the best of both worlds:
        </p>
      </div>

      {/* Item 1 */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <img src="/public/image/2graph.png" alt="Cloud-Based Technology" className="w-full md:w-1/2 h-auto" />
        <div className="item-info w-full md:w-1/2 md:ml-16 mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">Cloud-Based Technology</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our secure and redundant mesh network collects and transmits all forms of data, safely and reliably, to enhance the customer experience and bolster emergency response services.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="item-info w-full md:w-1/2 md:mr-16 mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">Human Element</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our trained and dedicated call center agents can mobilize quickly to provide brand- and industry-specific support, both in crisis and customer care situations.
          </p>
        </div>
        <img src="/public/image/3graph.png" alt="Human Element" className="w-full md:w-1/2 h-auto" />
      </div>
    </div>
  );
};

export default Smart;
