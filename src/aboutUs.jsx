import React from 'react';
import { TiGroup } from "react-icons/ti";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:px-12">
      {/* About Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="w-full md:w-7/10 px-4 mb-6 md:mb-0">
          <h4 className="text-3xl text-black font-semibold mb-4">Experience the Call Center with PrimeLine</h4>
          <p className="text-lg text-gray-700">
            Conveys the forward-thinking nature of Posinnove's solution, emphasizing its interactive and innovative approach to education. 
            Through this platform, users are offered a glimpse into a future where technology enhances learning outcomes, fosters engagement, 
            and prepares learners for success in a rapidly evolving digital world.
          </p>
        </div>
        <img src="/image/homepage.jpg" alt="Future Background" className="w-full md:w-1/3 h-auto rounded-lg" />
      </div>

      {/* About Content Section */}
      <div className="flex flex-wrap justify-between gap-8 px-4 mb-8">
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-xl text-blue-800 text-center mb-4">Description</h4>
          <p className="text-base text-gray-700 text-center">
            PrimeLine is a groundbreaking online platform transforming education through immersive, hands-on learning experiences that bridge theory with practice, fostering collaboration and readiness for the contemporary world.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-xl text-blue-800 text-center mb-4">Our Mission</h4>
          <p className="text-base text-gray-700 text-center">
            PrimeLine's mission is to revolutionize education by empowering students with hands-on learning experiences, cultivating creativity, critical thinking, and problem-solving skills to inspire lifelong learning and success in the modern era.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-xl text-blue-800 text-center mb-4">Our Vision</h4>
          <p className="text-base text-gray-700 text-center">
            Long-Term Vision Posinnove aspires to be a catalyst for positive change in the African education landscape.
          </p>
        </div>
      </div>

      {/* About Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between px-4 mb-8">
        <img src="/image/aboutus.webp" alt="Graph" className="w-full md:w-2/5 rounded-lg" />
        <div className="w-full md:w-3/5 px-4 mt-6 md:mt-0">
          <h4 className="text-2xl text-blue-800 font-semibold mb-4">Our Story</h4>
          <p className="text-base text-gray-700">
            In Kigali, Rwanda, Bonheur, a driven student, observed the disparity between classroom teachings and practical skills needed for success. Motivated by this gap, he envisioned Posinnove, an online platform to bridge theory with practice in education. With determination and a dedicated team, they overcame challenges to create Posinnove, empowering Rwandan students with hands-on learning experiences.
            Despite hurdles, Posinnove's launch captivated the education sector, inspiring learners and educators alike. Today, Posinnove continues to revolutionize education, embodying the power of student-led innovation in Rwanda and beyond.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center mb-8">
        <h4 className="text-3xl text-blue-800 font-semibold mb-6">Our Core Values</h4>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-xl text-blue-800">Team Work</h2>
                <p className="text-base text-gray-700">
                  Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-xl text-blue-800">Ownership</h2>
                <p className="text-base text-gray-700">
                  Ownership is a key value that drives our commitment to delivering results, fostering a sense of responsibility and pride in our work.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-xl text-blue-800">Accountability</h2>
                <p className="text-base text-gray-700">
                  Accountability means taking ownership of our actions and ensuring that we meet our commitments with integrity and transparency.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-xl text-blue-800">Collaboration</h2>
                <p className="text-base text-gray-700">
                  Collaboration is vital to success. We value the contributions of others, working together to achieve common goals and solve problems creatively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
