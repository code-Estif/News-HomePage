# News homepage

Responsive implementation of the Frontend Mentor "News homepage" challenge using semantic HTML and modern CSS. Matches the provided desktop and mobile designs, color palette, and typography.

![Preview](preview.jpg)

## Live/Usage

- Open `index.html` in your browser.

## Features

- **Responsive layout**: Mobile-first, with a two-column desktop grid.
- **Accessible navigation**: Mobile menu toggle with backdrop; semantic landmarks.
- **Adaptive media**: `picture` element swaps hero images for mobile/desktop.
- **Hover/focus states**: Styled interactions for links and buttons.

## Built with

- HTML5 semantic markup
- Modern CSS (Grid, custom properties, clamp)
- Local fonts (Inter 400/700/800)

## Structure

- `index.html` – page structure, header/nav, hero, sidebar, articles
- `styles.css` – variables, layout grid, components, responsive rules
- `assets/` – fonts and images
- `design/` – JPG design references (desktop/mobile/active states)

## Style guide

- **Font**: Inter (400, 700, 800)
- **Base paragraph size**: 15px
- **Colors** (from `style-guide.md`):
  - Soft orange: hsl(35, 77%, 62%)
  - Soft red: hsl(5, 85%, 63%)
  - Off-white: hsl(36, 100%, 99%)
  - Grayish blue: hsl(233, 8%, 79%)
  - Dark grayish blue: hsl(236, 13%, 42%)
  - Very dark blue: hsl(240, 100%, 5%)

## Notes

- Mobile nav uses a CSS-only checkbox toggle; no JavaScript required.
- Images are optimized and sized per the challenge assets.

## Acknowledgments

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/)
