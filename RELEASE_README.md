# Xiang Li Academic Portfolio - Release Package

## Overview
This is a complete, production-ready academic portfolio website for Xiang Li, redesigned in the minimalist style of dingjiansw101.github.io. The site showcases research, publications, news, honors, and academic services.

## Technology Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Routing**: Wouter (lightweight client-side routing)
- **Build Tool**: Vite
- **Server**: Express.js (Node.js)
- **Package Manager**: pnpm

## Project Structure
```
xiangli-portfolio/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/          # Page components (Home.tsx, NotFound.tsx)
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts (ThemeContext)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles and design tokens
│   └── index.html          # HTML template
├── server/
│   └── index.ts            # Express server for production
├── shared/
│   └── const.ts            # Shared constants
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Features

### Design
- **Two-Column Layout**: Left sidebar with profile, right content area
- **Color Scheme**: Lime green (#22c55e) accent color with clean white background
- **Typography**: Merriweather serif for headings, Inter sans-serif for body text
- **Visual Elements**: Dashed borders on profile photo, subtle hover effects, professional spacing

### Content Sections
1. **About Me**: Professional biography and research focus
2. **News**: Recent updates and achievements with timestamps
3. **Publications**: 8 featured papers with links to PDF, Code, and Project pages
4. **Honors and Awards**: List of academic achievements and recognitions
5. **Services**: Conference and journal reviewer roles

### Responsive Design
- Mobile-first approach
- Adapts from single column (mobile) to two-column layout (desktop)
- Optimized for all screen sizes

## Installation & Setup

### Prerequisites
- Node.js 18+ (with pnpm package manager)
- Git (optional, for version control)

### Installation Steps

1. **Extract the project**
   ```bash
   unzip xiangli-portfolio-release.zip
   cd xiangli-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Development Server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:5173`

4. **Production Build**
   ```bash
   pnpm build
   ```
   Output will be in the `dist/` directory

5. **Start Production Server**
   ```bash
   pnpm start
   ```

## Customization Guide

### Update Personal Information
Edit `client/src/pages/Home.tsx`:
- Update profile photo URL (line 6)
- Modify contact information (email, location)
- Update social media links
- Edit bio and research description

### Modify Publications
In `client/src/pages/Home.tsx`, update the `publications` array:
```typescript
{
  title: "Paper Title",
  authors: "Author names",
  venue: "Conference/Journal, Year",
  links: { 
    paper: "https://...",
    code: "https://...",
    project: "https://..."
  }
}
```

### Change Colors
Edit `client/src/index.css` to modify the color scheme:
- Primary color: `--primary: #22c55e;` (currently lime green)
- Update all color variables to match your preference

### Update News Items
In `client/src/pages/Home.tsx`, modify the `news` array with new entries:
```typescript
{ date: "MM/YYYY", text: "Your news item here" }
```

### Add/Remove Sections
Modify the navigation and content sections in `Home.tsx` to add or remove sections as needed.

## Deployment Options

### Option 1: Manus Hosting (Built-in)
The project is configured for Manus hosting with automatic deployment. Use the Publish button in the Manus UI.

### Option 2: Self-Hosted (Node.js)
1. Build the project: `pnpm build`
2. Deploy the `dist/` folder to your server
3. Run: `node dist/index.js`

### Option 3: Static Hosting (Vercel, Netlify, GitHub Pages)
1. Build the project: `pnpm build`
2. Deploy the `dist/public/` folder to your static hosting provider

## Environment Variables
The following variables are automatically injected in production:
- `VITE_ANALYTICS_ENDPOINT`: Analytics tracking endpoint
- `VITE_ANALYTICS_WEBSITE_ID`: Website ID for analytics
- Other Manus-specific variables

## Performance Considerations
- Optimized images using CDN URLs
- Lazy-loaded components
- Minified CSS and JavaScript in production
- Responsive images for different screen sizes

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port.

### Build Errors
1. Clear node_modules: `rm -rf node_modules && pnpm install`
2. Clear cache: `rm -rf .vite`
3. Rebuild: `pnpm build`

### Styling Issues
Ensure Tailwind CSS is properly configured in `vite.config.ts` and that `client/src/index.css` is imported in `main.tsx`.

## File Size Notes
The build includes all shadcn/ui components. For production optimization, consider:
- Tree-shaking unused components
- Code splitting for large sections
- Image optimization

## Future Enhancements
Suggested improvements for the portfolio:
1. Add working publication links (PDF, GitHub, project pages)
2. Create a dedicated Teaching page with course information
3. Add a Contact form or message section
4. Implement dark mode toggle
5. Add search functionality for publications
6. Create project showcase pages with detailed descriptions

## License
This project is provided as-is for academic and personal use.

## Support
For issues or questions about the website, refer to the original design inspiration at: https://dingjiansw101.github.io/

---

**Generated**: March 31, 2026
**Version**: 1.0.0
**Last Updated**: March 31, 2026
