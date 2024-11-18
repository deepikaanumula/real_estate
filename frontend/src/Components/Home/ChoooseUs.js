
import React from 'react';
import { FaHandsHelping, FaBuilding, FaLightbulb, FaExchangeAlt } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-[#e7c973] p-8 sm:p-10 md:p-36 rounded-lg mx-5">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-2">Why Choose Us</h2>
      <p className="text-center text-sm sm:text-base md:text-lg mb-6 md:mb-8">We provide unparalleled real estate services with a focus on quality and client satisfaction.</p>

      <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">

        <div className="flex flex-col items-center">
          <FaHandsHelping size={40} />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Personalized Custom Service</h3>
          <p className="text-xs sm:text-sm">Tailored solutions to fit your unique needs</p>
        </div>

        <div className="flex flex-col items-center">
          <FaBuilding size={40} />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Extensive Property Selection</h3>
          <p className="text-xs sm:text-sm">A vast array of properties to suit every budget</p>
        </div>

        <div className="flex flex-col items-center">
          <FaLightbulb size={40} />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Expert Guidance</h3>
          <p className="text-xs sm:text-sm">Leveraging our market knowledge for informed decisions</p>
        </div>

        <div className="flex flex-col items-center">
          <FaExchangeAlt size={40} />
          <h3 className="text-base sm:text-lg font-semibold mb-1">Efficient Transactions</h3>
          <p className="text-xs sm:text-sm">Streamlined process for hassle-free property deals</p>
        </div>
        
      </div>
    </div>
  );
};

export default App;
