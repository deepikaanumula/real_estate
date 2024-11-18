import React from 'react';
import { FaHome, FaBuilding, FaCity, FaWarehouse, FaHouseUser } from 'react-icons/fa';
import { Link } from 'react-scroll';

const categories = [
  { id: 1, icon: <FaHome size={36} />, title: 'Town House', properties: '2 Properties' },
  { id: 2, icon: <FaHouseUser size={36} />, title: 'Modern Villa', properties: '10 Properties' },
  { id: 3, icon: <FaCity size={36} />, title: 'Apartment', properties: '3 Properties' },
  { id: 4, icon: <FaBuilding size={36} />, title: 'Office', properties: '3 Properties' },
  { id: 5, icon: <FaWarehouse size={36} />, title: 'Single Family', properties: '5 Properties' },
];

const FeaturedCategories = () => {
  return (
    <div className="bg-green-800 py-12 px-6 mx-5">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-white mb-2">Featured Categories</h2>
        <p className="text-gray-300 mb-8">Lorem ipsum dolor sit amet</p>
        <div className="flex justify-end">
          <Link to="homes"
              smooth={true}
              duration={500}
             className="text-white hover:underline flex items-center">
            View All Categories <span className="ml-2">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="text-green-900 mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              <p className="text-gray-600">{category.properties}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
