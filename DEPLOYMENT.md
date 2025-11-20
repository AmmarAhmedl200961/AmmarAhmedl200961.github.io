# Deployment Instructions

This document provides instructions for deploying the portfolio website to GitHub Pages.

## Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment. When you merge this PR to the `main` branch, the deployment will happen automatically.

### Steps:
1. Merge this PR to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages
3. The site will be live at: https://ammarahmedl200961.github.io/

### GitHub Pages Configuration Required:

Before the automatic deployment works, ensure GitHub Pages is configured:

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Save the configuration

The workflow file is located at `.github/workflows/deploy.yml`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Build the project
npm run build

# 2. The dist/ folder contains all static files needed for deployment

# 3. Option A: Push dist/ contents to a gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# 4. Option B: Configure GitHub Pages to use the main branch
# - Push dist/ contents to the root of main branch
# - Configure Pages to serve from root of main branch
```

## Verification

After deployment, verify the site works correctly:

1. Visit https://ammarahmedl200961.github.io/
2. Check that the header displays correctly
3. Verify that Featured Projects loads (may take a moment for API calls)
4. Verify that Recent Work loads (may take a moment for API calls)
5. Test responsive design on mobile devices
6. Check that all social links work correctly

## Troubleshooting

### API Calls Not Working
- GitHub API has rate limits (60 requests/hour for unauthenticated requests)
- If rate limited, the sections will show "Loading..." indefinitely
- Wait an hour and refresh, or the fallback will show most starred repos

### Build Failures
- Ensure Node.js version 16+ is installed
- Run `npm ci` to install exact dependency versions
- Clear node_modules and reinstall if issues persist

### Styling Issues
- Tailwind CSS requires the PostCSS plugin `@tailwindcss/postcss`
- Ensure `postcss.config.js` is configured correctly
- Run `npm run build` to verify everything compiles

## Performance Notes

The built assets are optimized for production:
- CSS: ~16 KB (gzipped: ~4 KB)
- JavaScript: ~239 KB (gzipped: ~78 KB)
- Total page weight: ~256 KB (very fast!)

## Updating the Site

To update the portfolio:

1. Make changes to the source code
2. Commit and push to main branch
3. GitHub Actions will automatically rebuild and deploy

To update featured projects, edit `src/utils/github.js` and modify the `FEATURED_REPOS` array.
