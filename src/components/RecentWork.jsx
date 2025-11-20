import React, { useEffect, useState } from 'react';
import { getRecentRepos } from '../utils/github';

const RecentWork = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      setLoading(true);
      const data = await getRecentRepos();
      setRepos(data);
      setLoading(false);
    };

    fetchRecent();
  }, []);

  if (loading) {
    return (
      <section id="work" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Recent Work
          </h2>
          <div className="text-center text-gray-400">Loading recent projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="bg-gray-700 rounded-lg p-5 shadow-md hover:shadow-xl transition duration-300 border border-gray-600 hover:border-teal-500"
            >
              <h3 className="text-xl font-bold mb-2 text-teal-300">
                {repo.name}
              </h3>
              <p className="text-gray-300 text-sm mb-3 min-h-[40px]">
                {repo.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between mb-3">
                {repo.language && (
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    {repo.language}
                  </span>
                )}
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🔀 {repo.forks_count}</span>
                </div>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 hover:bg-gray-500 text-white text-sm font-semibold py-2 px-3 rounded transition duration-300"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
