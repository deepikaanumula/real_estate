import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

const LearnMorePage = () => {
    return (
        <section className="bg-white text-black py-12 px-4 lg:px-20">
            <NavLink to="/mnrealty" className="fixed top-6 left-6 text-2xl hover:text-gray-500 transition">
                <FaRegArrowAltCircleLeft />
            </NavLink>

            <p className="mb-6">
                Our team of seasoned real estate professionals has extensive knowledge of the most exclusive neighbourhoods and prestigious developments in the area. With years of experience, we understand the nuances of high-end properties and the unique desires of luxury home buyers.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Tailored Recommendations for Discerning Buyers</h3>
            <p className="mb-6">
                We recognize that every luxury homebuyer has different needs, preferences, and aspirations. Whether you're looking for a sprawling villa with panoramic views, an elegant penthouse in the heart of the city, or a private estate with expansive grounds, we offer tailored recommendations that align with your vision. Our team listens carefully to your requirements and ensures that we present only the best properties that suit your lifestyle.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Exclusive Access to Off-Market Listings</h3>
            <p className="mb-6">
                Through our local connections and industry relationships, MNRealty provides exclusive access to off-market properties—homes that aren’t listed publicly but are available for the discerning buyer. This gives you an edge in securing a rare gem before it reaches the wider market.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Deep Knowledge of Luxury Neighbourhoods</h3>
            <p className="mb-6">
                Understanding the dynamics of luxury neighbourhoods is key to finding the perfect home. Our experts are well-versed in the nuances of each luxury community, from privacy and security features to nearby amenities, schools, and lifestyle offerings. Whether you are drawn to the vibrant energy of the city or the tranquillity of a gated community, we can guide you to the right location.
            </p>
            <h3 className="text-2xl font-semibold mb-4">A Seamless Buying Experience</h3>
            <p className="mb-6">
                Purchasing a luxury home requires specialised knowledge, particularly when it comes to paperwork, negotiations, and understanding high-value transactions. Our team is adept at handling the complexities involved in buying and selling luxury real estate. From market valuation to securing financing and ensuring legal compliance, we manage the details, so you can enjoy a smooth and efficient transaction.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Investment Potential</h3>
            <p className="mb-6">
                Luxury homes are not just about lifestyle—they are often astute investment choices. With MNRealty’s local expertise, we help you identify properties with the best long-term appreciation potential. Whether you're purchasing for personal use or as a future investment, we provide you with the insights and data to make informed decisions.
            </p>
        </section>
    );
};

export default LearnMorePage;
