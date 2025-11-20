import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ammar Ahmed</h3>
            <p className="text-gray-300">
              Data Scientist specializing in NLP, Machine Learning, and AI Development
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#featured" className="text-gray-300 hover:text-primary transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-300 hover:text-primary transition-colors">
                  Recent Work
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/AmmarAhmedl200961" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ammar-ahmed-21964062/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ammar.ahmed.paki@gmail.com"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ammar Ahmed. Made with <Heart size={16} className="text-accent" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
