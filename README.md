# Color Clock (React + Vite)

A small React application that displays a dynamic, colorful digital clock. This project was built for the "Building a Dynamic Color Clock with React and npm" lab and demonstrates a simple React component, the use of the `date-fns` library for date formatting, and responsive styling.

## Live Features

- Current date in a human-friendly format (weekday, month, day, year)
- Live time updated every second (hours:minutes:seconds, AM/PM)
- Time zone / offset display
- Dynamic accent color that changes with the current second to make the widget visually engaging

## Requirements

- Node.js (v16+ recommended) and npm
- Git (optional, for version control)

## Quickstart

1. Clone or copy the repository to your machine.
2. From the project root (this folder), install dependencies and start the dev server:

```bash
cd /home/lude/module3/react/reactproject1
npm install
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`) and confirm the clock is visible and updating.

## Build for Production

To produce an optimized build for deployment:

```bash
npm run build
```

The production-ready files will be placed in the `dist/` directory.

## Implementation Notes

- The main component is `src/App.jsx` which uses React hooks (`useState`, `useEffect`) to update a `Date` object every second.
- Date and time formatting are handled by `date-fns` (`format()`), pinned in `package.json` as `date-fns@^2.30.0`.
- Styling is in `src/App.css` and includes a responsive, card-like layout and a CSS variable `--accent-color` which is set inline from React to produce the dynamic color.

## Project Structure

- `package.json` — npm scripts and dependency list
- `src/` — source files
	- `src/App.jsx` — main clock component
	- `src/App.css` — styles for the clock
	- `src/main.jsx` — application entry
	- `src/assets/` — images used by the starter template
- `index.html` — Vite entry HTML
- `README.md` — this file


## Troubleshooting

- If `npm run dev` reports `Missing script: "dev"`, make sure you are in the project folder that contains `package.json` (this repository places the app in `reactproject1/`).
- If you see peer dependency errors during `npm install`, run `npm install --legacy-peer-deps` to use npm's legacy resolver.


## Author
Edwin Lude

## Lisence
MIT
