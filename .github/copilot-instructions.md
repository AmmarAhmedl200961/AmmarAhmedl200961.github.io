<!-- Copilot / AI coding agent instructions for AmmarAhm3d.github.io -->
# Quick Agent Guide — AmmarAhm3d.github.io

This repository is a simple personal GitHub Pages site. The guidance below is focused, actionable, and specific to this codebase so an AI coding agent can be immediately productive.

1) Big picture
- Purpose: a static personal site (portfolio/resume) hosted on GitHub Pages.
- Entry point: `index.html` is the canonical site source (full HTML document). Styling is in `styles.css`.
- Jekyll hint: `_config.yml` references a `remote_theme: pages-themes/cayman@v0.2.0`. However, the repo contains a full `index.html` which takes precedence for the site's content.

2) Key files and what to change
- `index.html`: edit content, sections, links, and project entries. Projects live in the `<section id="projects">` list — add `<li>` items there.
- `styles.css`: site styling and color palette. Keep class names and structure consistent with the HTML.
- `_config.yml`: contains the remote theme setting. Avoid changing unless you understand GitHub Pages/Jekyll implications.
- `README.md`: repo description.
- Static assets (images): referenced from the repository root (e.g., `IMG-20191018-WA0004.jpg`). Add images to repo root or update paths accordingly.

3) Developer workflows (how to preview and validate changes)
- Fast static preview (no Jekyll required): run from repo root:
  - `python3 -m http.server 8000` then open `http://localhost:8000`.
- Jekyll preview (optional): `_config.yml` indicates use of a remote theme. There is no `Gemfile` in this repo, so the Jekyll workflow is optional — if you need theme rendering locally, add a `Gemfile` and install bundler, then:
  - `bundle install`
  - `bundle exec jekyll serve --livereload`
  Note: GitHub Pages will build the site on push; local Jekyll preview requires adding the appropriate dependencies.

4) Conventions & patterns to follow
- Keep `index.html` as the single-page source; the repo uses direct HTML rather than templates/partials.
- Use CDN links already present (Bootstrap, shields) unless replacing with local assets — updating CDNs changes load characteristics and should be tested.
- Images are referenced with relative paths from the repo root. Verify file names and case-sensitivity (Linux filesystem).

5) Integration points, external dependencies, and links
- External CDNs: Bootstrap CSS and shields (badges) are loaded from external URLs in `index.html`.
- External projects: project links point to other GitHub repos — do not rewrite those unless intentionally redirecting.

6) Safe, repository-specific edit examples
- Add a project entry (inside `<section id="projects">`):

```html
<li>
  <strong><a href="https://github.com/OWNER/REPO">Project Title</a></strong>
  <p>One-line description. Keep formatting consistent with existing items.</p>
</li>
```

- Add an image: put the image file at repo root (e.g., `assets/my-photo.jpg` or root), then reference `src="assets/my-photo.jpg"` and commit both the HTML and image together.

7) What to avoid or watch for
- Don't remove or alter `_config.yml` remote_theme without validating local builds — it can change theme behavior on GitHub Pages.
- Watch image filenames and paths (case-sensitive). If images show 404 in browser, confirm file is committed and path matches exactly.

8) No tests / CI
- This repository contains no test suite or CI. Validate changes with a local static server and browser checks (console errors, 404s).

9) Commit and PR guidance for agents
- Make small, atomic commits (one logical change per PR). Title PRs clearly (e.g., "Add new project: Film Recommendation System").
- For content changes, include a screenshot or link to a deployed preview in the PR description when possible.

If anything here is unclear or you'd like more examples (e.g., sample PR body, suggested `Gemfile` for Jekyll preview), tell me which part to expand and I will iterate.
