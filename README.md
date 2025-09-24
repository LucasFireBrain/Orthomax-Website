# Orthomax Website

## Overview
Orthomax Website is a static, single-page site that presents key information about Orthomax, a company that collaborates with craniomaxillofacial surgery specialists. The landing page highlights the brand, summarizes its mission, showcases event participation, and provides clear contact information. The site is optimized for desktop and mobile browsers and ships with multi-language support for English, Spanish, Portuguese, and Chinese.

## Features
- **Fixed header with language selector** – Keeps the company logo and language dropdown visible while scrolling so users can quickly switch locales.
- **Hero section** – Uses a prominent background image and tagline to communicate Orthomax's value proposition.
- **About block** – Shares the organization's history and mission statement.
- **Event carousel** – Displays recent participation photos with autoplaying slides, navigation arrows, and pagination dots.
- **Contact grid** – Lists phone, email, and Instagram with tap-friendly links.
- **Internationalization** – Detects the user's browser language on load and updates on-page copy via JSON-powered translations.

## Project Structure
```
Orthomax-Website/
├── index.html          # Main landing page markup
├── css/
│   └── style.css       # Global styling, layout, and carousel visuals
├── js/
│   ├── carousel.js     # Autoplaying image carousel controls
│   └── script.js       # Language detection and content swapping logic
├── lang/
│   └── lang.json       # Translation strings for supported languages
├── img/                # Branding and carousel imagery
├── favicon-16.ico      # Browser favicon (16x16)
└── favicon-32.ico      # Browser favicon (32x32)
```

## Getting Started
Because the project is pure HTML/CSS/JavaScript, you can view it by opening `index.html` in any modern browser. For development, you may prefer to run a lightweight static file server (for example, `npx serve` or `python -m http.server`) to avoid cross-origin restrictions when loading the translation JSON.

## Customization Tips
- Update text and translations inside `lang/lang.json`; each key maps to a `data-i18n` attribute in `index.html`.
- Replace the images in the `img/` directory to showcase new branding or event photos.
- Adjust styling through `css/style.css` to match updated design requirements.
- Modify `js/carousel.js` if you want to change autoplay timing or add additional controls.

## License
This repository does not currently specify a license. If you plan to share or reuse the code, consider adding an appropriate license file.
