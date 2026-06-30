# Personal landing page

A minimal single-page site: hero, about, projects, CV, and contact. Built with
Vite + React (plain JavaScript) and plain CSS — no UI libraries.

## Run locally

```bash
npm install      # one time, installs dependencies
npm run dev      # start the dev server (hot reload)
```

Open the URL it prints (usually http://localhost:5173).

To preview the production build locally:

```bash
npm run build    # outputs to /dist
npm run preview
```

## What to edit (your content)

| File | What's in it |
| --- | --- |
| `index.html` | Browser tab title + meta description |
| `src/components/Hero.jsx` | Name, tagline, intro, CV link |
| `src/components/About.jsx` | About paragraphs + the technologies list |
| `src/projects.js` | **Your projects** — add/edit objects in the array |
| `src/components/CV.jsx` | CV highlight bullets |
| `src/components/Footer.jsx` | Email, GitHub, LinkedIn links |
| `src/styles.css` | Colors/spacing — change the `:root` variables at the top |

Search the project for `[` to find every `[BRACKETED]` placeholder to replace.

### Add a project

Open `src/projects.js` and copy one object in the array:

```js
{
  title: 'My new project',
  description: 'One or two sentences.',
  tech: ['React', 'CSS'],
  demo: 'https://...',   // use "" to hide the Live demo link
  source: 'https://...', // use "" to hide the Source link
},
```

### Asset files to drop in `public/`

| File | Where it's used |
| --- | --- |
| `public/profile.jpg` | Hero photo (optional) |
| `public/cv.pdf` | "Download CV" link |

## Deploy

The build is a static site (`npm run build` → `dist/`), so any static host works.

**Vercel / Netlify (easiest):** push this repo to GitHub, import it in the
dashboard. Build command: `npm run build`. Output directory: `dist`. Done.

**GitHub Pages:**

```bash
npm run build
npx gh-pages -d dist     # publishes the dist/ folder to the gh-pages branch
```

(`base: './'` is already set in `vite.config.js` so it works from a subpath.)
