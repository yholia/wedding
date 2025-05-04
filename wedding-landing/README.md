# Wedding Landing Page

A beautiful and elegant wedding landing page built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Smooth animations
- Elegant typography
- Romantic color scheme
- Event details and schedule
- Color palette showcase

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/wedding-landing"
   ```

2. Initialize a Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Create a new repository on GitHub and add it as a remote:
   ```bash
   git remote add origin https://github.com/yourusername/wedding-landing.git
   git push -u origin main
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The site will be available at `https://yourusername.github.io/wedding-landing`

## Customization

- Update the couple's names in `src/components/Greetings.tsx`
- Modify the event details in `src/components/EventDetails.tsx`
- Adjust the color scheme in `tailwind.config.js` 