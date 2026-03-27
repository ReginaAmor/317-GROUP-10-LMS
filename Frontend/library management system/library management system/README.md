# Library Login Frontend

This is a ready-to-run React + Vite + Tailwind CSS frontend for the login page design.

## Setup

1. Extract the folder.
2. Open the folder in VS Code.
3. Open the terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the localhost link shown in the terminal.

## Main files

- `src/App.jsx` → app entry page
- `src/components/LibraryLoginPage.jsx` → login UI
- `src/index.css` → Tailwind imports and base styles

## Notes

- The left image currently uses an online image URL.
- If you want, replace it with your own local image by putting the file in `src/assets/` and updating the `src` in `LibraryLoginPage.jsx`.

Example:

```jsx
import libraryImage from '../assets/library-tree.jpg'
```

Then use:

```jsx
<img src={libraryImage} alt="Library" />
```
