import React, { useEffect, useState } from 'react';
import { getFeaturedRepos } from '../utils/github';

const Featured = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const data = await getFeaturedRepos();
      setRepos(data);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  if (loading) {
    return (
      <section id="featured" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="text-center text-gray-400">Loading featured projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-3 text-teal-400">
                {repo.name}
              </h3>
              <p className="text-gray-300 mb-4 min-h-[60px]">
                {repo.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between mb-4">
                {repo.language && (
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {repo.language}
                  </span>
                )}
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    🔀 {repo.forks_count}
                  </span>
                </div>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
