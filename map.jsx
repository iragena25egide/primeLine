import React from 'react';

const Map = () => {
  return (
    <div className="bg-cover bg-center h-128 py-16" style={{ backgroundImage: "url('public/image/night.png')" }}>
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-medium text-white">
          Mobilize Your Call Center <br /> Operations in a Flash
        </h1>
      </div>


      <div className="mt-8 md:mt-16 px-4 md:w-1/2 mx-auto text-center">
        <h4 className="text-xl md:text-2xl text-white">
          Our cloud-based network lets us CONNECT CALL CENTERS AND AGENTS QUICKLY, without the constraints of hardware and geography.
        </h4>
        <p className="text-lg text-white mt-4">
          Agents are matched to your project based on your needs, whether emergency triage, customer care, operator support, bilingual services or other.
        </p>
      </div>

      <div className="mt-16"></div>
    </div>
  );
};

export default Map;
