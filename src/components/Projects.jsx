import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, GitFork, ExternalLink, Github, Loader } from 'lucide-react';
import { fetchGitHubRepos } from '../utils/github';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Featured project names
  const featuredProjects = ['weather', 'News-App', 'my-first-flutter-app', 'Film-Recommendation-System'];

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchGitHubRepos('AmmarAhmedl200961');
        // Filter and sort to show featured projects first
        const sorted = data.sort((a, b) => {
          const aFeatured = featuredProjects.includes(a.name);
          const bFeatured = featuredProjects.includes(b.name);
          if (aFeatured && !bFeatured) return -1;
          if (!aFeatured && bFeatured) return 1;
          return b.stargazers_count - a.stargazers_count;
        });
        setRepos(sorted.slice(0, 6)); // Show top 6 projects
      } catch (error) {
        console.error('Error loading repos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getProjectGradient = (index) => {
    const gradients = [
      'from-accent to-neon-blue',
      'from-neon-blue to-neon-purple',
      'from-neon-purple to-accent',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-neon-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions through code
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-accent" size={48} />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {repos.map((repo, index) => {
              const isFeatured = featuredProjects.includes(repo.name);
              return (
                <motion.div
                  key={repo.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8
                  }}
                  className="relative group"
                >
                  {/* Featured badge */}
                  {isFeatured && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-accent to-neon-blue rounded-full text-xs font-bold text-white shadow-lg">
                        FEATURED
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] flex flex-col">
                    {/* Header with gradient accent */}
                    <div className={`h-2 w-full rounded-full bg-gradient-to-r ${getProjectGradient(index)} mb-6`}></div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1 group-hover:text-accent transition-colors">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                      {repo.description || 'An innovative project showcasing data science and AI capabilities.'}
                    </p>

                    {/* Topics/Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {repo.topics.slice(0, 3).map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs text-accent font-semibold"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats and Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-accent" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={16} className="text-neon-blue" />
                          <span>{repo.forks_count}</span>
                        </div>
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-neon-purple"></div>
                            <span>{repo.language}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors group/link"
                        >
                          <Github size={18} className="text-white group-hover/link:text-accent transition-colors" />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-lg hover:bg-neon-blue/20 transition-colors group/link"
                          >
                            <ExternalLink size={18} className="text-white group-hover/link:text-neon-blue transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AmmarAhmedl200961?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-neon-blue rounded-full text-white font-semibold hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
