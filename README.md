# Rohit Kumar — Portfolio

A personal portfolio built with **React 19**, **Vite**, and plain CSS — no
CSS or UI frameworks, no animation libraries. All animation (typewriter
headline, scroll reveals, hover states, glows) is done with native CSS
keyframes/transitions plus a small IntersectionObserver hook.

## Stack

- React 19 + Vite 6
- Plain CSS: variables, Flexbox, Grid, `@keyframes`
- `react-icons` for icon components only

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
npm run deploy   # publish dist/ to GitHub Pages (gh-pages)
```

## Project structure

```
src/
  assets/        static images
  components/    one folder per section, each with its own .jsx + .css
  data/          content arrays (projects, skills, timeline, social links)
  hooks/         useActiveSection, useScrollReveal
  styles/        variables.css, reset.css, global.css, utilities.css
  App.jsx
  main.jsx
```

Content lives in `src/data/*.js` — update project entries, skills, timeline,
and contact links there without touching component markup.
