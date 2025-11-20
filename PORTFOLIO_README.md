# Ammar Ahmed - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This site dynamically fetches and displays projects from GitHub using the GitHub REST API.

## 🚀 Live Site

Visit the live portfolio at: [https://ammarahmedl200961.github.io](https://ammarahmedl200961.github.io)

## 🛠️ Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Data Fetching:** Axios
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📋 Features

- **Dynamic Content:** Automatically fetches repository data from GitHub API
- **Featured Projects:** Curated selection of highlighted work
- **Recent Work:** Displays the 6 most recently updated repositories
- **Responsive Design:** Fully responsive on desktop, tablet, and mobile
- **Dark Mode Friendly:** Professional dark theme aesthetic
- **Fast Performance:** Optimized for quick loading times

## 🏗️ Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Hero section with introduction
│   │   ├── Featured.jsx       # Featured projects section
│   │   ├── RecentWork.jsx     # Recent work section
│   │   ├── RepoCard.jsx       # Reusable repository card component
│   │   └── Footer.jsx         # Footer with social links
│   ├── utils/
│   │   └── github.js          # GitHub API integration utilities
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles with Tailwind directives
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite build configuration
└── package.json               # Project dependencies and scripts
```

## 🔄 How Data Fetching Works

The portfolio uses client-side data fetching to retrieve repository information from GitHub's public REST API:

1. **API Integration (`src/utils/github.js`):**
   - `getAllRepos()`: Fetches all non-forked repositories for the user
   - `getFeaturedRepos()`: Returns curated featured projects
   - `getRecentRepos()`: Returns the 6 most recently updated repositories
   - `getUserProfile()`: Fetches user profile information

2. **Client-Side Calls:**
   - Components use React's `useEffect` hook to fetch data on mount
   - No authentication tokens required (uses public API)
   - Data is fetched directly from `https://api.github.com/users/AmmarAhmedl200961/repos`

3. **Featured Projects List:**
   The featured projects are defined in `src/utils/github.js`:
   ```javascript
   const FEATURED_REPOS = [
     'CCFD',
     'Transformer-based-model-BERT-MobileBERT-RoBERTa-',
     'Film_Reccomendation_System'
   ];
   ```

## 🎨 Customization

### Updating Featured Projects

To change which projects appear in the featured section:

1. Open `src/utils/github.js`
2. Modify the `FEATURED_REPOS` array with your repository names:
   ```javascript
   const FEATURED_REPOS = [
     'your-repo-1',
     'your-repo-2',
     'your-repo-3'
   ];
   ```
3. Rebuild and redeploy:
   ```bash
   npm run build
   ```

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#2a9d8f',    // Main accent color
      'secondary': '#264653',  // Dark background color
      'accent': '#e76f51',     // Call-to-action color
    },
  },
}
```

### Modifying Content

- **Bio/Tagline:** Edit `src/components/Header.jsx`
- **Social Links:** Update links in `src/components/Header.jsx` and `src/components/Footer.jsx`
- **Contact Info:** Modify email and LinkedIn URLs in the components

## 💻 Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmmarAhmedl200961/AmmarAhmedl200961.github.io.git
   cd AmmarAhmedl200961.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready static files
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code linting

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers a new deployment.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. GitHub Actions will automatically deploy from the `dist/` folder to GitHub Pages

### GitHub Pages Configuration

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - Source: GitHub Actions
3. The workflow in `.github/workflows/deploy.yml` handles the rest

## 📊 Performance

The site is optimized for performance:
- Lighthouse Score Target: 90+
- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle size
- CSS purging via Tailwind

## 📝 License

This project is open source and available under the MIT License.

## 👤 Contact

**Ammar Ahmed**
- GitHub: [@AmmarAhmedl200961](https://github.com/AmmarAhmedl200961)
- LinkedIn: [Ammar Ahmed](https://www.linkedin.com/in/ammar-ahmed-21964062/)
- Email: ammar.ahmed.paki@gmail.com

---

Built with ❤️ using React, Vite, and Tailwind CSS
