# Saif · Portfolio

My personal portfolio site: projects, a bit about me, and how to reach me.

Built with **Vue 3**, **Vite** and **Tailwind CSS v4**, deployed on **Netlify**.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints, usually http://localhost:5173.

## Editing content

All content lives in two files, so you never need to touch the components to update the site:

| File | What's in it |
| --- | --- |
| `src/data/profile.js` | Name, tagline, about text, skills, experience, education, email and links |
| `src/data/projects.js` | Every project card, in display order |

Search the project for `TODO` to find everything that still needs filling in.

- **Add a project:** copy an object in `projects.js` and edit it. Set `featured: true` on the one you want in the large card at the top.
- **Hide something until it's ready:** add `draft: true` to a project, experience entry or education.
- **Add your résumé:** put `resume.pdf` in `public/` and set `links.resume` to `'/resume.pdf'`.
- **Change colours or fonts:** edit the `@theme` block in `src/style.css`.

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml`, so the build settings fill in automatically. Click **Deploy**.
4. Optional: rename the site under **Site configuration → Change site name**, or add a custom domain.

Every push to `main` redeploys the site.

## Structure

```
src/
  App.vue                  page layout
  style.css                Tailwind import and design tokens
  data/
    profile.js             about you
    projects.js            your projects
  components/
    SiteHeader.vue         sticky nav with mobile menu
    HeroSection.vue        intro and "currently building" card
    ProjectsSection.vue    featured project plus grid
    ProjectCard.vue        one project
    AboutSection.vue       bio, experience, skills
    ContactSection.vue     email and links
    SiteFooter.vue
```
