# Astro Project Template Integration

This repository now includes an Astro-based project page template at:

- `project-template-astro/`

It is based on:

- https://github.com/RomanHauksson/academic-project-astro-template

## Why this is integrated as a module

Your main site is Jekyll-based (`al-folio` style), while this template is Astro/MDX-based.
Keeping Astro in a dedicated subdirectory avoids breaking the existing Jekyll site and lets you choose the right stack per project.

## Root commands

Run these from the repository root:

- `npm run astro:install` - install Astro template dependencies
- `npm run astro:dev` - start Astro dev server
- `npm run astro:build` - build static Astro output
- `npm run astro:preview` - preview built Astro site
- `npm run astro:check` - run Astro type/content checks
- `npm run astro:lint` - run ESLint in Astro template
- `npm run astro:format` - run Prettier in Astro template

## Runtime requirement

- Use Node.js `24+` for the Astro template module.
- Node `23.x` is not supported by parts of the toolchain and may fail during `npm install`.

## Content workflow

1. Edit the Astro project content in `project-template-astro/src/paper.mdx`.
2. Add media files under `project-template-astro/src/assets/` (or `project-template-astro/public/` for static files).
3. Run `npm run astro:dev` for local iteration.
4. Run `npm run astro:build` before deployment.

## Relationship with existing Jekyll project pages

- Existing pages using `layout: project_nerfies` continue to work unchanged.
- Use the Astro template when you need richer MDX/component-based project pages (tabs, advanced media, React components, etc.).
- Use `project_nerfies` when you want lightweight integration directly in the Jekyll site collections.

## Automatic GitHub Pages build

- `.github/workflows/deploy.yml` now builds both Jekyll and Astro on push to `main`/`master`.
- Astro output is deployed under `/project-template-astro/` inside your existing site.
- Example URL:
  - `https://<username>.github.io/project-template-astro/`
  - If this is a project repository (not `<username>.github.io`), use
    `https://<username>.github.io/<repo>/project-template-astro/`

## Updating from upstream template

Because this is vendored (not a submodule), update manually:

1. Pull latest upstream template into a temporary directory.
2. Replace `project-template-astro/` contents.
3. Re-apply any local customizations.
4. Run `npm run astro:build` to verify.
