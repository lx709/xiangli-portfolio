# Xiang Li Portfolio - Complete Code Documentation

## Project Overview
A production-ready academic portfolio website for Xiang Li, built with React 19, TypeScript, Tailwind CSS, and Vite. The design follows the minimalist style of dingjiansw101.github.io with a two-column layout featuring a profile sidebar and main content area.

## Quick Start

### Installation
```bash
# Extract the project
unzip xiangli-portfolio-release.zip
cd xiangli-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

### Core Files

#### `client/src/pages/Home.tsx` - Main Page Component
The primary page component containing all content sections:
- Profile information and sidebar
- About Me section
- News feed
- Publications list (8 papers)
- Honors and Awards
- Services (conference and journal reviewers)

**Key Data Structures:**
```typescript
// Profile image URL (CDN hosted)
const profileImage = "https://d2xsxph8kpxj0f.cloudfront.net/...";

// Publications array
const publications = [
  {
    title: "Paper Title",
    authors: "Author names",
    venue: "Conference/Journal, Year",
    links: { paper: "#", code: "#", project: "#" }
  }
];

// News items
const news = [
  { date: "MM/YYYY", text: "News item text" }
];

// Services
const services = {
  conferences: ["CVPR", "ICCV", ...],
  journals: ["IJCV", "TITS", ...]
};
```

#### `client/src/index.css` - Global Styles
Contains Tailwind CSS configuration and design tokens:
- Color scheme: Lime green (#22c55e) as primary
- Typography: Merriweather serif for headings, Inter sans-serif for body
- Spacing and layout utilities
- Custom container component

**Key Color Variables:**
```css
--primary: #22c55e;           /* Lime green */
--primary-foreground: #f0fdf4;
--background: oklch(1 0 0);   /* White */
--foreground: oklch(0.235 0.015 65); /* Dark gray */
```

#### `client/src/App.tsx` - Application Root
Main application component with routing setup:
- Uses Wouter for client-side routing
- ThemeProvider for light theme
- TooltipProvider for UI tooltips
- ErrorBoundary for error handling

#### `client/index.html` - HTML Template
Entry point for the application:
- Includes Google Fonts (Merriweather, Inter)
- Analytics script integration
- Root div for React mounting

#### `server/index.ts` - Express Server
Production server configuration:
- Serves static files from `dist/public`
- Handles client-side routing with fallback to index.html
- Runs on port 3000

#### `package.json` - Dependencies
Key dependencies:
- `react@19.2.1` - UI framework
- `tailwindcss@4.1.14` - Styling
- `vite@7.1.7` - Build tool
- `express@4.21.2` - Server
- `wouter@3.3.5` - Routing
- `lucide-react@0.453.0` - Icons

Scripts:
- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm start` - Start production server
- `pnpm preview` - Preview production build

## Customization Guide

### Update Profile Information
Edit `client/src/pages/Home.tsx`:

```typescript
// Line 4: Update profile image
const profileImage = "YOUR_NEW_IMAGE_URL";

// Lines 117-119: Update name and title
<h1>Your Name</h1>
<p>Your Title</p>
<p>Your Institution</p>

// Lines 121-124: Update contact info
<p>📍 Your Location</p>
<p>✉️ your.email@example.com</p>
```

### Add/Update Publications
Modify the `publications` array:

```typescript
const publications = [
  {
    title: "Your Paper Title",
    authors: "Your Name, Co-author Names",
    venue: "Conference/Journal, Year",
    links: { 
      paper: "https://arxiv.org/...",
      code: "https://github.com/...",
      project: "https://project-page.com"
    }
  }
];
```

### Update News Items
Modify the `news` array:

```typescript
const news = [
  { date: "03/2026", text: "Your latest news here" },
  { date: "02/2026", text: "Previous news item" }
];
```

### Change Color Scheme
Edit `client/src/index.css`:

```css
:root {
  --primary: #YOUR_COLOR;
  --primary-foreground: #LIGHT_VARIANT;
}
```

### Update Social Links
In `Home.tsx`, modify the social links section:

```typescript
<a href="mailto:your.email@example.com">
  <Mail size={20} />
</a>
<a href="https://github.com/yourprofile">
  <Github size={20} />
</a>
```

## Component Architecture

### Layout Components
- **Home.tsx**: Main page with all content
- **NotFound.tsx**: 404 error page

### UI Components (shadcn/ui)
Located in `client/src/components/ui/`:
- Button, Card, Dialog, Input, etc.
- Pre-built and ready to use

### Contexts
- **ThemeContext.tsx**: Light/dark theme management

### Hooks
- **useMobile.tsx**: Responsive design helper
- **useComposition.ts**: Composition API utilities
- **usePersistFn.ts**: Function persistence

## Styling System

### Tailwind CSS Classes Used
- Layout: `grid`, `flex`, `gap`, `space-y`
- Sizing: `w-`, `h-`, `max-w-`, `px-`, `py-`
- Colors: `text-`, `bg-`, `border-`, `hover:`
- Typography: `text-`, `font-`, `leading-`
- Effects: `rounded`, `shadow`, `transition`

### Custom Classes
- `.container`: Auto-centered content with responsive padding
- `.flex`: Default flex with min-height/width 0

## Responsive Design

### Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (responsive)
- Desktop: > 1024px (two-column layout)

### Grid System
```typescript
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Left sidebar: 1 column on mobile, 1 column on desktop */}
  <div className="lg:col-span-1">
  
  {/* Right content: full width on mobile, 3 columns on desktop */}
  <div className="lg:col-span-3">
</div>
```

## Build Configuration

### Vite Config (`vite.config.ts`)
- React plugin for JSX transformation
- Tailwind CSS integration
- Environment variable handling
- Production optimization

### TypeScript Config (`tsconfig.json`)
- ES2020 target
- JSX support
- Path aliases for imports

## Deployment

### Build Output
```
dist/
├── public/
│   ├── index.html
│   └── assets/
│       ├── index-*.css
│       └── index-*.js
└── index.js (server)
```

### Environment Variables
Automatically injected in production:
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`
- `VITE_APP_ID`
- `VITE_APP_TITLE`

### Deployment Options
1. **Manus Hosting**: Use Publish button in UI
2. **Node.js**: Run `node dist/index.js`
3. **Static Hosting**: Deploy `dist/public/` to Vercel/Netlify

## Performance Optimization

### Current Optimizations
- Code splitting via Vite
- CSS minification
- JavaScript minification
- Image optimization (CDN hosted)
- Lazy component loading

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Version Information
- **Node.js**: 18+
- **pnpm**: 10.4.1+
- **React**: 19.2.1
- **TypeScript**: 5.6.3
- **Tailwind CSS**: 4.1.14
- **Vite**: 7.1.7

---

**Last Updated**: March 31, 2026
**Version**: 1.0.0
