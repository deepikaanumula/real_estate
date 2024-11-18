import React from 'react';
import Bp1 from '../Images/Bp1.jpg';
import Bp2 from '../Images/Bp2.jpg';
import Bp3 from '../Images/Bp3.jpg';

const BestProperties = () => {
  return (
    <div className="px-4 py-12 sm:px-8 md:px-12 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Best Properties</h2>
      <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
      Explore Our Top Real Estate Offerings
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="flex flex-col space-y-4">
        
          <div className="relative h-48 sm:h-60 md:h-full bg-gray-200 rounded-lg overflow-hidden">
            <img src={Bp1} alt="Carousel Image" className="w-full h-full object-cover" />
          </div>

        
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-200 p-4 sm:p-6 rounded-lg text-center flex items-center justify-center aspect-square">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold">280+</h3>
                <p className="text-gray-600 text-sm sm:text-base">Properties</p>
                <p className="text-gray-500 text-xs sm:text-sm">Discover the finest properties that combine luxury, comfort, and investment potential.
                </p>
              </div>
            </div>
            <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-square">
              <img src={Bp3} alt="Additional Property" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      
        <div className="relative h-48 sm:h-60 md:h-full bg-gray-200 rounded-lg overflow-hidden">
          <img src={Bp2} alt="Main Property" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 space-y-1">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">FOR SALE</span>
            <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">FEATURED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProperties;
