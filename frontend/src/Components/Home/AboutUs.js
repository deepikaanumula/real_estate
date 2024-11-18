import React from "react";
import Aboutus from "../Images/Aboutus.jpg";
import { Link } from "react-scroll";
const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-3">
      <div >
        <h1 className="text-3xl font-bold text-center">AboutUs</h1>
      </div>
      <div className=" p-8 py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src={Aboutus}
            alt="Construction blueprint"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to MN Reality
          </h2>
          <p className="text-gray-600 mb-6">
            We're dedicated to helping you find your dream investment property.
            We focus on providing the best integrity, transparency, and customer
            satisfaction. We strive to make your real estate journey smooth and
            rewarding.
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span className="text-gray-700">
                Completing projects on time & following budget guidelines
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span className="text-gray-700">
                Elevated quality of workmanship
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span className="text-gray-700">
                Meeting diverse supplier requirements
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              <span className="text-gray-700">
                Implementing appropriate safety precautions and procedures
              </span>
            </li>
          </ul>

          <Link to="queryform" smooth duration={300}
            className="text-yellow-600 font-semibold hover:text-yellow-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
