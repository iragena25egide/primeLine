import React from 'react';
import { MdOutlineEmergencyShare, MdRecordVoiceOver } from 'react-icons/md';
import { SiCustomink } from 'react-icons/si';

const Capabilities = () => {
  return (
    <div className="mt-32 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900">Capabilities</h2>
          <p className="text-lg text-gray-700 mt-4">
            We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance customer experiences, and transform industries at scale and with unparalleled speed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Emergency Service Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold text-gray-900">Emergency Service</h4>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-700">
              <MdOutlineEmergencyShare size={22} className="text-blue-700" />
            </div>
          </div>
          <div className="text-gray-700">
            <p>Compassionate support in crisis situations</p>
          </div>
        </div>

        {/* Customer Care Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold text-gray-900">Customer Care</h4>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-700">
              <SiCustomink size={22} className="text-blue-700" />
            </div>
          </div>
          <div className="text-gray-700">
            <p>Scalable call centers adapted to task, brand, and industry</p>
          </div>
        </div>

        {/* Voice-to-cloud Box */}
        <div className="flex flex-col justify-between bg-white border border-blue-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold text-gray-900">Voice-to-cloud</h4>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-700">
              <MdRecordVoiceOver size={22} className="text-blue-700" />
            </div>
          </div>
          <div className="text-gray-700">
            <p>Modernization of traditional telecommunication platforms and applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
