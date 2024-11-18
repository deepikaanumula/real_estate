import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


function SlotBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    time: '',
    date: '',
    contactNumber: '',
  });

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.time || !formData.date || !formData.contactNumber) {
      alert('Please fill in all the fields.');
      return;
    }

    
    const templateParams = {
      to_name: 'MNReality', 
      from_name: formData.name,
      email: formData.email,
      time: formData.time,
      date: formData.date,
      contactNumber: formData.contactNumber,
    };

    
    emailjs.send('service_ncss5k8', 'template_e4luv8d', templateParams, 'CvGQOYaaJc0-HusFM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Slot booked for ${formData.time} on ${formData.date} by ${formData.name}`);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('There was an error sending your booking information. Please try again later.');
      });

    
    setFormData({ name: '', email: '', time: '', date: '', contactNumber: '' });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <NavLink to='/mnrealty' className='flex'>
        <FaRegArrowAltCircleLeft className="size-8 fixed top-6 left-6"/>
      </NavLink>
      <h1 className="text-3xl font-bold mb-6 text-center">Slot Booking</h1>

      <form onSubmit={handleBooking} className="mb-6 grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Book Slot
        </button>
      </form>
    </div>
  );
}

export default SlotBooking;
