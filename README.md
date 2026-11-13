# Personal Portfolio

My personal portfolio website, styled as a modern take on Frutiger Aero — final project for **IT ELEC 4: Web Systems and Technologies 2**
(La Consolacion University Philippines, 1st Semester, S.Y. 2026–2027).

<!-- EDIT: replace with your real links after deploying -->
- **Live site:** https://your-portfolio.vercel.app
- **Repository:** https://github.com/sioneldaezima/personal-portfolio

## Sections

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Home | Name, short tagline, and professional introduction |
| 2 | About Me | Personal introduction and educational background |
| 3 | Skills | Technical and programming skills |
| 4 | Projects | Projects and activities |
| 5 | Achievements | Certificates, awards, seminars, and accomplishments |
| 6 | Contact Me | Email, contact details, social links, and a message form |

## Built with

- **HTML5** — semantic, single-page layout
- **CSS3** — custom properties, Grid, Flexbox, responsive breakpoints (no framework)
- **JavaScript** — mobile menu, active-link highlighting, scroll reveal, contact form
- **Google Fonts** — Instrument Serif (headings), Lexend (text)
- **Vercel** — hosting and deployment

## Project structure

```
personal-portfolio/
├── index.html            # all page content
├── css/
│   └── style.css         # design tokens + styles for every section
├── js/
│   └── script.js         # interactions
├── assets/
│   ├── images/           # profile photo, project screenshots, favicon
│   └── certificates/     # certificate files linked from Achievements
└── README.md
```

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 4173
```

Then visit http://localhost:4173.

## Deployment

1. Push this folder to a public GitHub repository named `personal-portfolio`.
2. On [Vercel](https://vercel.com), log in with GitHub and import the repository.
3. Keep the defaults (Framework Preset: **Other**, no build command) and click **Deploy**.

Every push to `main` redeploys the site automatically.

## Author

<!-- EDIT -->
**Sean Ashley Reyes** — BS Information Technology, La Consolacion University Philippines
