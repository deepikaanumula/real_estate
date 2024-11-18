import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const QueryForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !contact || !email || !query) {
      alert('Please fill in all fields before submitting.');
      return; 
    }

    const templateParams = {
      to_name: 'MNReality',
      client_name: name,
      client_contact: contact,
      client_email: email,
      client_query: query,
    };

    emailjs.send('service_ncss5k8', 'template_gqgggx3', templateParams, 'CvGQOYaaJc0-HusFM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your query has been sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('There was an error sending your query. Please try again later.');
      });

    setName('');
    setContact('');
    setEmail('');
    setQuery('');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Write your Query</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Type your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Enter your contact number</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your contact number"
                className="w-full border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Enter your Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter your Query</label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Eg: I need 3BHK with 4 Bathrooms"
              className="w-full h-full border border-gray-300 rounded-lg p-4 resize-none focus:border-gray-500 outline-none"
            ></textarea>
          </div>

          <div className="mt-8 flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:bg-purple-700"
            >
              Submit Now <span className="ml-2">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QueryForm;
