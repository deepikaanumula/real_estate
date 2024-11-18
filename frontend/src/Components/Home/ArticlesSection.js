import React from 'react';
import Article1 from '../Images/Article1.jpeg'
import Article2 from '../Images/Article2.jpeg'
import Article3 from '../Images/Article3.jpeg'
import Article4 from '../Images/Article4.jpeg'
const articles = [
  {
    id: 1,
    category: 'Apartment',
    date: 'March 19, 2024',
    title: 'Housing Markets That Changed the Most This Week',
    image: Article1,
  },
  {
    id: 2,
    category: 'Apartment',
    date: 'March 19, 2024',
    title: 'Read Unveils the Best Canadian Cities for Biking',
    image: Article2,
  },
  {
    id: 3,
    category: 'Office',
    date: 'March 19, 2024',
    title: '10 Walkable Cities Where You Can Live Affordably',
    image: Article3,
  },
  {
    id: 4,
    category: 'Shop',
    date: 'March 19, 2024',
    title: 'New Apartment Nice in the Best Canadian Cities',
    image: Article4,
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-12 bg-gray-100 p-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center">Recent Articles & News</h2>
        <p className="text-gray-600 text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="grid gap-6 sm:grid-cols-2 text-center lg:grid-cols-4">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{article.category} • {article.date}</p>
                <h3 className="text-lg font-medium text-gray-800 mb-3">{article.title}</h3>
                <a href="#" className="text-blue-500 font-semibold  hover:underline flex justify-center items-center">
                  Read More <span className="ml-1 text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
