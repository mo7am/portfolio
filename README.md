# Portfolio Starter — Mohamed Salah

A clean, animated multi-page portfolio (Home, Projects, Resume, Contact) ready for GitHub Pages.

## Quick Start

1. Edit content inside the HTML files (index.html, projects.html, resume.html, contact.html).
2. Optionally replace `assets/img/profile.svg` with your photo.
3. Push to a public GitHub repository.

## Deploy to GitHub Pages

- Create a repo (e.g., `portfolio`), push these files to branch `main`.
- In **Settings → Pages**, set:
  - **Source**: `Deploy from a branch`
  - **Branch**: `main` / `/root`
- Your site will be available at: `https://<username>.github.io/<repo>/`

## Customizations
- Colors and layout: `assets/css/styles.css`
- Animations: powered by AOS (cdn). Adjust attributes: `data-aos="fade-up"` with optional `data-aos-delay="100"`.
- Email link is obfuscated in `assets/js/main.js` — change `['mo7am','example.com']` to your email.

## Notes
- The contact form is static. Integrate with Netlify Forms or your backend for submissions.
- Add your PDF resume at `assets/resume/Mohamed-Salah-Resume.pdf` to enable the download button.
