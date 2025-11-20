import axios from 'axios';

const GITHUB_API = 'https://api.github.com';
const USERNAME = 'AmmarAhmedl200961';

// Featured repositories list
const FEATURED_REPOS = [
  'CCFD',
  'Transformer-based-model-BERT-MobileBERT-RoBERTa-',
  'Film_Reccomendation_System'
];

/**
 * Fetch all repositories for the user
 */
export const getAllRepos = async () => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'owner'
      }
    });
    return response.data.filter(repo => !repo.fork);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

/**
 * Fetch GitHub repositories (alias for compatibility)
 */
export const fetchGitHubRepos = async (username = USERNAME) => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'owner'
      }
    });
    return response.data.filter(repo => !repo.fork);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

/**
 * Get the most recent 6 repositories
 */
export const getRecentRepos = async () => {
  const repos = await getAllRepos();
  return repos.slice(0, 6);
};

/**
 * Get featured repositories
 */
export const getFeaturedRepos = async () => {
  const repos = await getAllRepos();
  
  // Find featured repos by name
  const featured = FEATURED_REPOS.map(name => 
    repos.find(repo => repo.name === name)
  ).filter(Boolean);
  
  // If we don't have enough featured repos, add the most recent ones
  if (featured.length < 3) {
    const additional = repos
      .filter(repo => !FEATURED_REPOS.includes(repo.name))
      .slice(0, 3 - featured.length);
    featured.push(...additional);
  }
  
  return featured.slice(0, 3);
};

/**
 * Fetch user profile information
 */
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${USERNAME}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};
