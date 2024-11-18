import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const ARegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    education: '',
    brokerage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Form submitted successfully!');
        setFormData({ name: '', age: '', email: '', education: '', brokerage: '' }); 
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        alert('Failed to send the email. Please try again later.');
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5  shadow-lg">
      <NavLink to='/mnrealty' >
        <FaRegArrowAltCircleLeft className="size-8 fixed top-6 left-6"/>
      </NavLink>
      <h2 className="text-2xl font-bold mb-5">Become a Real Estate Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="education">Education</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="brokerage">Preferred Brokerage</label>
          <input
            type="text"
            id="brokerage"
            name="brokerage"
            value={formData.brokerage}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ARegister;
