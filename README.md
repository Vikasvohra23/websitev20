# Shree Radhey Relocation — Website README

This repository is a Vite + React single-page site for Shree Radhey Relocation Services. The README below explains how the code is organised, how to run the project, and provides clear, step-by-step instructions (for non-coders) to: add or replace images, edit service/about/article content, update navigation/footer text, and change the website appearance.

---

## Quick start

- Prerequisites: Install Node.js (LTS). Recommended Node >= 20.
- Install dependencies:

```bash
npm install
```

- Run dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

---

## Project structure (short)

- `index.html` — app entry
- `src/main.jsx` — bootstraps React
- `src/App.jsx` — central app / routing logic
- `src/components/` — React components (Navbar, Footer, Services, About, Blog, etc.)
- `src/data/constants.js` — main editable content: nav labels, services, blog posts, contact info
- `src/assets/` — image assets you can add (preferred for local images)
- `public/` — static public files served as-is (recommended for non-coder image uploads)

---

**Where to edit text (non-coder friendly)**

- Change navigation items (labels / order): Open `src/components/Navbar.jsx` and edit the `LINKS` array near the top. Example: change `{ label:'Home', id:'home' }` to the text you want.
- Change footer contact info and quick links: Edit `src/components/Footer.jsx` for layout and `src/data/constants.js` for raw contact constants (`YOUR_WA_NUMBER`, `YOUR_EMAIL`, `CONTACT_INFO`).
- Site-wide copy (services, blog post bodies, project list): Edit `src/data/constants.js`. This file contains `SERVICES`, `ALL_SERVICES`, `SERVICE_PAGES`, `BLOG_POSTS`, `ALL_PROJECTS` and `FAQS`. Change the text fields there; the site reads them at runtime.

Tip for non-coders: Use a plain text editor (Notepad) or VS Code. Save the file and reload the site in the browser.

---

**Add or replace images — simple steps for non-coders**

Recommended approach (no code changes): put images in `public/gallery/` and reference them with `/gallery/your-file.jpg`.

Example (replace an image shown on the homepage About teaser):

1. Copy your image file to `public/gallery/` (example name: `about-hero.jpg`).
2. Open the component that uses the image. For the About teaser open `src/components/AboutTeaser.jsx` and find the `img` tag that contains the `src` attribute (it currently points to an Unsplash URL).
3. Replace the `src` value with the public path: `/gallery/about-hero.jpg`.

Code snippet (how `src` should look after change):

```jsx
// before: src="https://images.unsplash.com/..."
<img src="/gallery/about-hero.jpg" alt="..." />
```

Alternative (preferred for developers): add images to `src/assets/` and import them at the top of the component. Example:

```jsx
import myImg from '../assets/gallery/my-local.jpg'
...
<img src={myImg} alt="..." />
```

**Services images**

- File: `src/components/Services.jsx` — the service cards are defined in the `SERVICE_CARDS` array. Each object has an `img` property. Replace the `img` URL with either a `/gallery/your.jpg` public path or a local import as shown above.

Step-by-step to change a service image (non-coder):

1. Put `new-service.jpg` into `public/gallery/`.
2. Open `src/components/Services.jsx` in an editor.
3. Find the card you want to update in the `SERVICE_CARDS` array and replace the `img:` value with `/gallery/new-service.jpg`.
4. Save and refresh the browser.

**Blog / Article images**

- Blog data is in `src/data/constants.js` (`BLOG_POSTS` array). `src/components/BlogSection.jsx` and `src/components/BlogDetail.jsx` map `post.id` to `POST_IMAGES`. To add a new blog post or image:

1. Add the new blog object inside `BLOG_POSTS` in `src/data/constants.js` (use the same object shape: `id`, `title`, `excerpt`, `category`, `date`, `readTime`, `heroImage`, `body`).
2. Add an entry to the `POST_IMAGES` mapping in both `src/components/BlogSection.jsx` and `src/components/BlogDetail.jsx` with the same key as the post `id` or point `heroImage` to a full URL.
3. Save and refresh.

Example add (very small):

```js
// in src/data/constants.js
BLOG_POSTS.push({ id:'my-new-post', title:'My Title', excerpt:'Short text', category:'Corporate', date:'June 2026', readTime:'3 min read', heroImage:'/gallery/my-post.jpg', body:[{type:'p',text:'Content goes here.'}] })
```

---

**Change appearance (colors, fonts, spacing) — easy & safe**

- The main CSS variables are in `src/index.css` under `:root`. Open `src/index.css` and edit these variables to change the look site-wide:

  - `--sr-blue`, `--sr-red` : primary colors
  - `--gold`, `--gold-lt`  : accent tones
  - `--px`, `--py`         : horizontal / vertical page padding
  - `--radius`             : border radius of cards

Example: to change the primary red, edit `--sr-red: #CC2229;` to your preferred hex.

Fonts: top of `src/index.css` imports Google fonts. Replace or add fonts there, then update font-family values in the CSS if needed.

If you are a non-coder and only want a color change:

1. Open `src/index.css`.
2. Find `:root { ... }` and change the hex value for the variable you want.
3. Save and refresh the browser.

---

**Editing the About & Article sections (step-by-step)**

About (homepage teaser):

1. Open `src/components/AboutTeaser.jsx` to edit the short homepage copy, image and bullet points.
2. For the long About page open `src/components/AboutPage.jsx`.
3. Modify the arrays at the top of `AboutPage.jsx` (e.g., `TIMELINE`, `EQUIPMENT`) to change timeline items and equipment lists.

Articles (Insights):

1. Open `src/data/constants.js` and edit `BLOG_POSTS` to add or update articles.
2. Then update `src/components/BlogSection.jsx` and `src/components/BlogDetail.jsx` `POST_IMAGES` map if you use local images (or set `heroImage` to a full URL in the post object).
3. Save and refresh.

---

**Changing text from Navbar to Footer (full site)**

- Most navigational text and repeated site-wide lists live in `src/data/constants.js` (`NAV_LINKS`, `SERVICES`, `ALL_SERVICES`, `CONTACT_INFO`, `FAQS`). Edit there first.
- Component-specific headings and paragraphs live inside the component files in `src/components/` (for example `Navbar.jsx`, `Footer.jsx`, `AboutTeaser.jsx`, `Services.jsx`). Search the file for the visible sentence/heading and change the string.

Non-coder tip: If you cannot find the text, search the `src` folder for a short phrase from the site (Windows Explorer or your editor has a search box). That will show which file to open.

---

**Deploying to production (Vercel / Static host)**

- Build locally: `npm run build`.
- The `dist/` folder contains the production-ready site. You can upload `dist/` to any static hosting (Vercel, Netlify, GitHub Pages). This repo already includes `vercel.json` for Vercel.

Vercel quick steps:

1. Push the repo to GitHub or GitLab.
2. Import the repo in Vercel (https://vercel.com) and pick the `main` branch.
3. Vercel auto-runs `npm run build` and serves the result.

---

**Developer notes (if you want to hand this to a developer)**

- Components are small and mostly presentational — copying patterns (import image, set state, update arrays in `constants.js`) is the main developer task.
- To switch image sources to local modules: add images into `src/assets/` and `import` them in components.
- To add a CMS later: replace the `constants.js` arrays with fetch calls to the CMS and keep the same data shape.

---

If you'd like, I can:

- Add a small `instructions.html` inside `public/` with screenshots showing how to copy images to `public/gallery/` and where to edit files, or
- Make a simple admin JSON file under `public/content/` so non-coders can edit a single JSON without opening JS files.

Tell me which option you prefer and I will add it.