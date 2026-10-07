# React Shop

Learning project: a single-page storefront built while studying React and TypeScript.

## Features

- Product catalog with categories, filters and pagination / "load more"
- Cart with item count and totals, persisted in the browser (localforage)
- Product reviews stored locally
- Client-side routing and per-page SEO tags (react-helmet-async)
- Feature-based folder structure: `app`, `pages`, `features`, `components`, `ui`, `layouts`

## Stack

React 18 · React Router 7 · TypeScript (partly) · Vite · CSS Modules · ESLint

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```

## What I practiced

Component composition, state lifting and context, typed props, routing with nested layouts, and keeping UI logic separate from data.
