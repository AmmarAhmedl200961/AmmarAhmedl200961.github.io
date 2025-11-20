# 🚀 Ammar Ahmed - Portfolio Website

> An astonishingly designed, full-stack personal portfolio showcasing Data Science and AI expertise with 3D visuals, smooth animations, and modern web aesthetics.

## 🎨 Features

### Visual Excellence
- **3D Hero Section**: Floating geometric data node with orbiting particles using React Three Fiber
- **Smooth Animations**: Framer Motion powered scroll-based parallax and entrance animations
- **DataViz Aesthetics**: Dark-mode design with neon-glow accents (electric blue, vibrant green, purple)
- **Modern UI**: Glass-morphism cards, gradient effects, and animated skill tags

### Core Sections
1. **Hero**: 3D floating element with CTA "Transform Your Data"
2. **About Me**: Scroll-reveal bio highlighting Data Science expertise
3. **Skills & Tools**: Dynamic tag system featuring Python/ML/DL, Generative AI, and Cloud tools
4. **Timeline**: Education, work experience, achievements, certificates, and languages
5. **Projects**: GitHub API integration showcasing featured repositories
6. **Contact Footer**: Complete social links and contact information

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: Tailwind CSS (custom DataViz color palette)
- **Motion Library**: Framer Motion (scroll animations, transitions)
- **3D Graphics**: React Three Fiber + Drei (3D hero element)
- **Data Fetching**: Axios (GitHub API integration)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # 3D animated hero with floating data node
│   ├── Hero3D.jsx         # React Three Fiber 3D visualization
│   ├── About.jsx          # About section with scroll animations
│   ├── Skills.jsx         # Dynamic skills cards with infinite scroll
│   ├── Timeline.jsx       # Education, experience, achievements
│   ├── Projects.jsx       # GitHub API powered project showcase
│   └── Footer.jsx         # Enhanced footer with contact info
├── utils/
│   └── github.js          # GitHub API integration
├── App.jsx                # Main app component
└── index.css              # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0a0e27` (Dark background)
- **Secondary**: `#1a1f3a` (Cards, sections)
- **Accent**: `#00ff88` (Neon green - primary CTA)
- **Neon Blue**: `#00d4ff` (Secondary highlights)
- **Neon Purple**: `#b794f6` (Tertiary accents)

### Animations
- **Float**: 6s infinite for 3D elements
- **Glow**: Pulsing neon shadows
- **Slide Up**: Entrance animations
- **Fade In**: Content reveals

## 🚀 Deployment

The site automatically deploys to GitHub Pages on every push to the `main` branch via GitHub Actions.

### Manual Deployment
```bash
npm run build
# The built files are in the dist/ folder
```

### Live URL
[https://ammarahmedl200961.github.io/](https://ammarahmedl200961.github.io/)

## 📝 Content Customization

### Skills (Skills.jsx)
Update the `skillCategories` array to modify:
- Python/ML/DL skills
- Generative AI capabilities
- Tools/Cloud technologies

### Projects (Projects.jsx)
Modify `featuredProjects` array to highlight specific repositories:
```javascript
const featuredProjects = ['weather', 'News-App', 'my-first-flutter-app'];
```

### Timeline (Timeline.jsx)
Update education, experience, achievements, and certificates in their respective arrays.

## 🎓 Educational Content

**Education**:
- BS Data Science (FAST-NUCES, 2021-2025)
- A-Levels Pre-Engineering (Pakistan International School Riyadh, 2018-2020)

**Experience**:
- Business Development Executive at Narsun Studios (2023-2024)

**Skills**:
- Python, Deep Learning, NLP, Computer Vision, Data Visualization
- Generative AI, StableDiffusion, PyTorch, CLIP, RAG, GraphRAG
- AWS (S3, Redshift, DynamoDB), Web Scraping, Big Data Analytics

## 🌟 Key Highlights

- **3D Visuals**: Interactive floating data node with orbital particles
- **Smooth Scrolling**: Parallax effects and staggered animations
- **GitHub Integration**: Real-time repository data
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized bundle with code-splitting
- **Accessibility**: Semantic HTML and ARIA labels

## 📧 Contact

- **Email**: ammar.ahmed.paki@gmail.com
- **LinkedIn**: [linkedin.com/in/ammar-ahmed-](https://www.linkedin.com/in/ammar-ahmed-)
- **GitHub**: [github.com/AmmarAhmedl200961](https://github.com/AmmarAhmedl200961)
- **Location**: Lahore, Pakistan

## 📄 License

© 2025 Ammar Ahmed. All rights reserved.

---

**Built with ❤️ using React, Vite, Three.js, and Framer Motion**
