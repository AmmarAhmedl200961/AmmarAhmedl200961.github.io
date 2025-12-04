import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-primary to-secondary text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Ammar Ahmed
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6">
            Data Scientist & AI Developer
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Innovative Computer Science graduate specializing in Data Science, Natural Language Processing, 
            and Machine Learning. Passionate about developing AI solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="https://github.com/AmmarAhm3d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/ammar-ahmed-21964062/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:ammar.ahmed.paki@gmail.com"
            className="flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <MapPin size={18} />
          <span>Lahore, Pakistan</span>
        </div>
        
        <div className="mt-12">
          <a 
            href="#featured" 
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
