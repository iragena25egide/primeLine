import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mt-24 p-6 bg-gray-50">
      {/* Contact Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold text-black">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          We would love to hear from you, your feedback is our priority.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Form Section */}
        <form className="w-full md:w-2/3 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Firstname*"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Lastname*"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email*"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Phone*"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Country/Region"
              className="w-full h-12 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="How can we help?"
            className="w-full h-36 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-1/3 mx-auto py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 space-y-6">
          <div>
            <h4 className="text-2xl font-semibold text-black">PrimeLine Communication Inc.</h4>
            <h5 className="text-xl text-gray-700 mt-2">Rwanda Headquarters</h5>
            <p className="text-lg text-gray-600 mt-2">Kigali, Gasabo</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-xl text-blue-600 text-center">Reach Out</h5>
            <div className="flex items-center space-x-3">
              <MdEmail size={22} color="#005ea1" />
              <p className="text-lg text-gray-700">Primeline@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone size={22} color="#005ea1" />
              <p className="text-lg text-gray-700">+250 790 345 345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
