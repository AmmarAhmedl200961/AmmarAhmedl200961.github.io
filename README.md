# Ammar Ahmed - Portfolio Website

A modern, dynamic portfolio website built with React, Vite, and Tailwind CSS. The site automatically fetches and displays projects from GitHub using the GitHub API.

## 🌟 Live Site

Visit the live portfolio at: [http://ammarahmedl200961.github.io/](http://ammarahmedl200961.github.io/)

## 🚀 Technology Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS v4 (with PostCSS)
- **Data Fetching**: Axios for GitHub API integration
- **Deployment**: GitHub Pages
- **Language**: JavaScript (ES6+)

## ✨ Features

### Dynamic Data Fetching
The portfolio automatically pulls repository data from GitHub using the public GitHub API. This ensures that the project listings are always up-to-date without manual intervention.

### Sections

1. **Hero/Header**: Professional introduction with name, title, and a compelling bio
2. **Featured Projects**: Hand-picked showcase of 3 top projects
3. **Recent Work**: Automatically displays the 6 most recent public, non-forked repositories
4. **Contact/Footer**: Social media links (GitHub, LinkedIn) and contact information

### Design Features

- Fully responsive design (mobile, tablet, desktop)
- Modern dark-mode aesthetic
- Smooth animations and transitions
- Fast loading times (optimized with Vite)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/AmmarAhmedl200961/AmmarAhmedl200961.github.io.git
cd AmmarAhmedl200961.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🔧 How Data Fetching Works

### GitHub API Integration

The portfolio uses the GitHub REST API to fetch repository data client-side. The API calls are made from the browser when the page loads, so no API tokens are exposed.

**API Utility**: `src/utils/github.js`

Key functions:
- `getAllRepos()`: Fetches all public repositories for the user
- `getRecentRepos()`: Returns the 6 most recently updated non-forked repositories
- `getFeaturedRepos()`: Returns specific featured repositories from a curated list

### Featured Projects Configuration

The featured projects are defined in `src/utils/github.js`:

```javascript
const FEATURED_REPOS = [
  'weather',
  'News-App',
  'my-first-flutter-app'
];
```

**To update featured projects:**

1. Open `src/utils/github.js`
2. Modify the `FEATURED_REPOS` array with your desired repository names
3. Save the file and rebuild the project

Example:
```javascript
const FEATURED_REPOS = [
  'my-awesome-project',
  'another-cool-app',
  'amazing-tool'
];
```

If a featured repository doesn't exist or is not public, the system automatically falls back to the most starred repositories.

## 🚀 Deployment

This site is deployed to GitHub Pages. The deployment process:

1. Build the project: `npm run build`
2. The `dist/` folder contains the production-ready static files
3. Deploy the contents of `dist/` to the root of the GitHub Pages repository

### GitHub Pages Configuration

- **Repository**: AmmarAhmedl200961.github.io
- **Branch**: main
- **Source**: Root directory (`/`)
- **Base URL**: `/` (configured in `vite.config.js`)

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Hero section
│   │   ├── Featured.jsx     # Featured projects section
│   │   ├── RecentWork.jsx   # Recent repositories section
│   │   └── Footer.jsx       # Footer with contact info
│   ├── utils/
│   │   └── github.js        # GitHub API integration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles (Tailwind)
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Updating Personal Information

1. **Bio and Title**: Edit `src/components/Header.jsx`
2. **Contact Links**: Edit `src/components/Footer.jsx`
3. **Featured Projects**: Edit the `FEATURED_REPOS` array in `src/utils/github.js`

### Styling

The project uses Tailwind CSS v4. You can customize the theme by:
1. Editing `tailwind.config.js` for theme extensions
2. Modifying component classes directly in the JSX files
3. Adding custom CSS in `src/index.css`

## 📄 License

© 2024 Ammar Ahmed. All rights reserved.

## 🤝 Contact

- **Email**: l200961@nu.edu.pk | ammar.ahmed.paki@gmail.com
- **LinkedIn**: [linkedin.com/in/ammar-ahmed-21964062/](https://www.linkedin.com/in/ammar-ahmed-21964062/)
- **GitHub**: [github.com/AmmarAhmedl200961](https://github.com/AmmarAhmedl200961)
- **Location**: Lahore, Pakistan

---

Built with ❤️ using React, Vite, and Tailwind CSS
