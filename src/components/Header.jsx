import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ammar Ahmed
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Data Scientist | Machine Learning Engineer | AI Developer
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
          Innovative Computer Science graduate specializing in Data Science, with expertise in 
          Natural Language Processing, Machine Learning, and AI development. Passionate about 
          building intelligent solutions that solve real-world problems.
        </p>
        <a 
          href="#projects" 
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
