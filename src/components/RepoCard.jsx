import React from 'react';
import { ExternalLink, Star, GitFork } from 'lucide-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-secondary dark:text-white flex-1">
          {repo.name}
        </h3>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {repo.description || 'No description available'}
      </p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={16} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={16} />
          {repo.forks_count}
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
