import React from 'react';
import Kondapur from '../Images/Kondapur.jpg'
import Gajularamaram from '../Images/Gajularamaram.jpg'
import  Miami from '../Images/Miami.jpg'
import Florida from '../Images/Florida.jpg'
import Newyork from '../Images/Newyork.jpg'

const properties = [
  { city: 'Kondapur', propertiesCount: 2, imageUrl:Kondapur },
  { city: 'Gajularamaram', propertiesCount: 1, imageUrl:Gajularamaram },
  { city: 'Medchal', propertiesCount: 2, imageUrl: Miami },
  { city: 'Kukatpally', propertiesCount: 3, imageUrl:Florida },
  { city: 'LBNagar', propertiesCount: 8, imageUrl: Newyork }
];

function PropertyCard({ city, propertiesCount, imageUrl }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full h-auto">
      <img src={imageUrl} alt={city} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-start p-4">
        <div className="text-white">
          <h2 className="font-semibold text-lg">{city}</h2>
          <p className="text-sm">{propertiesCount} Property{propertiesCount > 1 ? 'ies' : ''}</p>
        </div>
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <div className="w-full mx-auto p-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
}
