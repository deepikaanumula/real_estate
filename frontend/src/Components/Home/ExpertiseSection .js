import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalExpertise from '../Images/LocalExpertise.png';

const ExpertiseSection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#204b42] text-white py-12 my-8 px-4 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 lg:px-18">
                <div className="relative">
                    <img 
                        src={LocalExpertise} 
                        alt="Clients" 
                        className="rounded-lg w-full lg:w-[500px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-600 text-sm">Total Clients</p>
                        <p className="text-black font-semibold text-xl">7,000 M</p>
                    </div>
                </div>
                <div className="flex-1 xl:p-32 p-5">
                    <h2 className="text-3xl font-semibold mb-4">Local expertise for<br /> luxury homes</h2>
                    <p className="text-gray-300 mb-6">
                    At MNRealty, we take pride in our deep-rooted local expertise and understanding of the luxury real estate market. When it comes to purchasing or investing in a luxury home, we know that the experience goes far beyond just finding the right property—it's about matching your lifestyle with the perfect location and community.

                    </p>
                    <button 
                        onClick={() => navigate('/learn-more')} 
                        className="bg-yellow-500 text-green-900 py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition"
                    >
                        Learn More
                    </button>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-yellow-400">
                <div>
                    <p className="text-2xl font-bold">$18M</p>
                    <p className="text-gray-400 text-sm">Owned from property transactions</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">26K</p>
                    <p className="text-gray-400 text-sm">Properties for Buy</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">15K</p>
                    <p className="text-gray-400 text-sm">Properties for Sell</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">800</p>
                    <p className="text-gray-400 text-sm">Daily completed transactions</p>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
