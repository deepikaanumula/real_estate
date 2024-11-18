import React, { useEffect, useState } from 'react';
import Article1 from '../Images/Article1.jpeg';
import Article2 from '../Images/Article2.jpeg';
import Article3 from '../Images/Article3.jpeg';
import Article4 from '../Images/Article4.jpeg';

const NewsCard = ({ title, content, date, imageUrl }) => {
  return (
    <div className='py-5'>
      <h2 className="text-3xl font-semibold text-center">Recent Articles & News</h2>
      <p className="text-gray-600 text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex border w-full p-8 rounded-lg shadow-md mx-auto"> 
        <div className="flex-1 w-full pr-4">
          <span className="text-red-600 font-semibold text-xs">News</span>
          <h2 className="text-lg font-bold text-gray-900 mt-1 leading-tight">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{content}</p>
          <div className="flex items-center text-xs text-gray-400 mt-2">
            <span>1 MIN READ</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>

        <div className="w-40 h-32"> 
          <img
            src={imageUrl}
            alt="News"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsData = [
    {
      title: "‘Brain drain’ in Mumbai due to ever-rising real estate prices; people earn ₹4.49 lakh to pay ₹5...",
      content: "Renting a 1 BHK in Mumbai costs ₹5.18 lakh annually, surpassing the average salary of junior employees. High rental prices may lead to a 'brain drain' as professionals seek affordable cities like Bengaluru a...",
      date: "18 OCT 2024",
      image: Article1
    },
    {
      title: "Affordable housing demand increases in Tier 2 cities",
      content: "As real estate prices rise in metro areas, more people are looking at Tier 2 cities for affordable housing options, creating a surge in demand.",
      date: "15 OCT 2024",
      image: Article2
    },
    {
      title: "New policy changes affect property investments",
      content: "Recent policy updates are likely to impact property investors, especially in areas with high commercial property concentrations.",
      date: "10 OCT 2024",
      image: Article3
    },
    {
      title: "Real estate market trends to watch in 2024",
      content: "Experts predict a dynamic year for real estate, with trends like green buildings, co-working spaces, and smart homes gaining popularity.",
      date: "05 OCT 2024",
      image: Article4 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [newsData.length]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <NewsCard
        title={newsData[currentIndex].title}
        content={newsData[currentIndex].content}
        date={newsData[currentIndex].date}
        imageUrl={newsData[currentIndex].image}
      />

      
    </div>
  );
};

export default Blogs;
