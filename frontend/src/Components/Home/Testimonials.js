import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import profileImage from '../Images/Cameron.png'; 

const Testimonials = () => {

  const testimonials = [
    {
      name: 'Ananya & Vikram Sharma',
      role: 'Homebuyers',
      quote: 'We had an amazing experience working with MNRealty. From the very beginning, the team understood our needs and helped us find the perfect 3BHK flat in a prime location. The process was smooth, and the team was very professional. We are extremely happy with our new home and highly recommend MNRealty for anyone looking to buy a luxury property.',
      rating: 5,
      image: profileImage, 
    },
    {
      name: 'Rajesh & Priya Desai',
      role: 'Homebuyers',
      quote: 'Thanks to MNRealty, we found the perfect villa in a gated community with all the amenities we were looking for. Their team was very knowledgeable about the local market and helped us make an informed decision. We couldn’t be happier with the service we received. The entire transaction was seamless!',
      rating: 5,
      image: profileImage, 
    },
    {
      name: 'Siddharth & Aishwarya Patel',
      role: 'First-time Homebuyers',
      quote: 'As first-time homebuyers, we were nervous about the process, but MNRealty’s team made everything so much easier. They patiently walked us through every step and showed us properties that fit our needs. We found our dream home, and the entire experience was smooth, stress-free, and highly professional.',
      rating: 5,
      image: profileImage, 
    },
    {
      name: 'Manish & Nisha Kumar',
      role: 'Investors',
      quote: 'The team at MNRealty was fantastic in helping us find a perfect investment property. They provided us with great options and helped us secure a deal at a competitive price. Their local market knowledge and dedication to customer satisfaction really stood out. We are very happy with the property we purchased.',
      rating: 5,
      image: profileImage, 
    },
    {
      name: 'Arvind & Sunita Rao',
      role: 'Homebuyers',
      quote: 'MNRealty exceeded our expectations. From the initial consultation to the final paperwork, the process was handled with complete professionalism. They found us an exclusive off-market property in our desired location, and we couldn’t be happier. Highly recommend their services for anyone looking for a luxury home.',
      rating: 5,
      image: profileImage, 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, role, quote, rating, image } = testimonials[currentIndex];

  return (
    <section className="px-4 py-12 md:py-16 lg:py-20">
      <p className="text-center text-gray-500 text-sm mb-4">Thousands of world’s leading companies trust Space</p>
      
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-16 lg:gap-20">
        <div className="text-center md:text-left max-w-xs md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-semibold mb-2">What our customers are saying about us?</h2>
          <p className="text-gray-500 mb-6">
            Our clients rave about our personalised service and commitment to finding the perfect property. Hear what they have to say about their experience with MNRealty.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-8">
            <div>
              <h3 className="text-2xl font-bold">10m+</h3>
              <p className="text-gray-500">Happy People</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">4.88</h3>
              <p className="text-gray-500">Overall rating</p>
              <div className="text-yellow-500 text-lg flex">
                <span>★ ★ ★ ★ ★</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-r border-dotted border-blue-300 h-32"></div>

        <div className="max-w-xs md:max-w-md lg:max-w-lg text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <img src={image} alt="Customer" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            {quote}
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 hover:bg-gray-200"
            >
              &lt;
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-500 hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
