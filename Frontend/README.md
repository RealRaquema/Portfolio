# Portfolio - Design Engineer & Full Stack Developer

A modern, responsive portfolio website built with React, Vite, Framer Motion, and GSAP. Features glassmorphism design, smooth animations, dark/light theme toggle, and beautiful scroll interactions.

## Features

✨ **Modern Design**
- Glassmorphism UI elements
- Smooth animations with Framer Motion and GSAP
- Responsive grid layouts
- Beautiful gradient accents

🌓 **Theme Support**
- Light/Dark mode toggle
- Persistent theme preference (localStorage)
- Smooth theme transitions

🎨 **Sections**
- Hero section with animated text
- About section with skills and tools
- Featured work/projects showcase
- Expertise areas with icons
- Latest articles/blogs
- Contact form with social links

⚡ **Performance**
- Built with Vite for fast development and optimized builds
- Smooth scroll behavior
- Optimized animations
- Mobile responsive

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Work.jsx
│   │   ├── Work.css
│   │   ├── Expertise.jsx
│   │   ├── Expertise.css
│   │   ├── Blogs.jsx
│   │   ├── Blogs.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - React animation library
- **GSAP** - Professional animation library
- **Lucide React** - Beautiful icon library
- **CSS3** - Styling with CSS variables

## Customization

### Change Theme Colors
Edit the CSS variables in `src/styles/globals.css`:
```css
:root {
  --accent-primary: #ff6b35;
  --accent-secondary: #c9184a;
  /* ... other variables ... */
}
```

### Update Content
- **Hero**: Edit `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Projects**: Edit `src/components/Work.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

### Add New Sections
1. Create a new component file in `src/components/`
2. Create corresponding CSS file
3. Import and add to `src/App.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ by Aadi Gupta

## Contact

- Email: hello@aadigupta.com
- Portfolio: https://aadi-portfolio.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Feel free to customize this portfolio to make it your own! 🚀
