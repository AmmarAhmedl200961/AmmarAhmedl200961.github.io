import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'AmmarAhmedl200961';

// Featured repositories list
const FEATURED_REPOS = [
  'weather',
  'News-App',
  'my-first-flutter-app'
];

/**
 * Fetch all public repositories for the user
 * @returns {Promise<Array>} Array of repository objects
 */
export const getAllRepos = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${USERNAME}/repos`, {
      params: {
        per_page: 100,
        sort: 'updated',
        direction: 'desc'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

/**
 * Get the 6 most recent non-forked repositories
 * @returns {Promise<Array>} Array of recent repository objects
 */
export const getRecentRepos = async () => {
  try {
    const repos = await getAllRepos();
    const nonForkedRepos = repos.filter(repo => !repo.fork);
    return nonForkedRepos.slice(0, 6);
  } catch (error) {
    console.error('Error fetching recent repos:', error);
    return [];
  }
};

/**
 * Get featured repositories based on the predefined list
 * Falls back to most starred repos if featured ones don't exist
 * @returns {Promise<Array>} Array of featured repository objects
 */
export const getFeaturedRepos = async () => {
  try {
    const repos = await getAllRepos();
    const nonForkedRepos = repos.filter(repo => !repo.fork);
    
    // Try to find the featured repos
    const featured = [];
    FEATURED_REPOS.forEach(name => {
      const repo = nonForkedRepos.find(r => r.name.toLowerCase() === name.toLowerCase());
      if (repo) {
        featured.push(repo);
      }
    });
    
    // If we don't have enough featured repos, fill with most starred repos
    if (featured.length < 3) {
      const sortedByStars = nonForkedRepos
        .filter(r => !featured.find(f => f.id === r.id))
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
      
      while (featured.length < 3 && sortedByStars.length > 0) {
        featured.push(sortedByStars.shift());
      }
    }
    
    return featured.slice(0, 3);
  } catch (error) {
    console.error('Error fetching featured repos:', error);
    return [];
  }
};

/**
 * Get user profile information
 * @returns {Promise<Object>} User profile object
 */
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${USERNAME}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};
