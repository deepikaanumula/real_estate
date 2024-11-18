
import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaCreditCard, FaTools } from 'react-icons/fa';

const services = [
  {
    title: "Wide Range of 1, 2, and 3 BHK Flats",
    description: "A variety of options for different budgets and preferences to make homeownership achievable for everyone.",
    icon: <FaBuilding size={40} className="text-orange-500" />,
  },
  {
    title: "Prime Locations",
    description: "Properties located in key areas with easy access to amenities, schools, and transport hubs.",
    icon: <FaMapMarkerAlt size={40} className="text-orange-500" />,
  },
  {
    title: "Competitive Pricing",
    description: "Affordable pricing to suit various budgets, making it easier for you to own your dream home.",
    icon: <FaDollarSign size={40} className="text-orange-500" />,
  },
  {
    title: "Easy Payment Plans",
    description: "Flexible payment options to reduce financial stress and simplify the buying process.",
    icon: <FaCreditCard size={40} className="text-orange-500" />,
  },
  {
    title: "Quality Construction and Amenities",
    description: "Built with high standards and attention to detail to ensure a comfortable and modern living experience.",
    icon: <FaTools size={40} className="text-orange-500" />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-center text-2xl font-bold mb-4">Our Services</h2>
      <p className="text-center text-gray-600 mb-8">
        At MNRealty, we are committed to making the dream of homeownership a reality. We offer a diverse range of budget-friendly flats and lands to suit every need and lifestyle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
