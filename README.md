# ABAYO Moise - Portfolio

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer and Cybersecurity Expert.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Performance**: Optimized build with code splitting and lazy loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Query

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1400px+

## 🎨 Design System

### Colors
- **Primary**: Blue (#00BFFF)
- **Secondary**: Dark Gray (#1A1B1E)
- **Accent**: Purple (#8B5CF6)
- **Success**: Green (#22C55E)
- **Background**: Dark (#0F1115)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Code**: JetBrains Mono

### Animations
- **Float**: Subtle floating effect for hero elements
- **Glow Pulse**: Pulsing glow effect for CTA buttons
- **Hover Transitions**: Smooth 200ms transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Pport-folio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build & Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Add to package.json:
```json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=ABAYO Moise Portfolio
VITE_APP_DESCRIPTION=Full-Stack Developer & Cybersecurity Expert
```

### Customization
- **Colors**: Modify `src/index.css` CSS variables
- **Content**: Update component files in `src/components/`
- **Styling**: Modify `tailwind.config.ts` for design system changes

## 📱 Performance Optimization

### Build Optimizations
- **Code Splitting**: Automatic chunk splitting for better caching
- **Tree Shaking**: Unused code elimination
- **Minification**: Terser for JavaScript, CSS minification
- **Asset Optimization**: Optimized image loading and compression

### Runtime Optimizations
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React.memo for expensive components
- **Bundle Analysis**: Built-in bundle analyzer

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color ratios
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🧪 Testing

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── Certifications.tsx # Certifications display
│   └── Contact.tsx     # Contact form
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── project.tsx     # Projects page
│   └── certificates.tsx # Certificates page
├── assets/             # Static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles and CSS variables
```

## 🔒 Security

- **HTTPS Only**: Secure connections required
- **Content Security Policy**: XSS protection
- **Input Validation**: Form input sanitization
- **Secure Headers**: Security-focused HTTP headers

## 📊 Analytics & SEO

### Meta Tags
- Open Graph tags for social sharing
- Twitter Card support
- Proper meta descriptions
- Canonical URLs

### Performance Monitoring
- Core Web Vitals tracking
- Lighthouse CI integration
- Bundle size monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: abayomoise950@gmail.com
- **LinkedIn**: [ABAYO Moise](https://rw.linkedin.com/in/abayo-moise-3568b7377)
- **GitHub**: [A2kmoise](https://github.com/A2kmoise)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Vite](https://vitejs.dev/) for fast build tooling

