# Developer Portfolio Website Instructions

## Project Overview

Create a modern, clean developer portfolio website for **Kynth Anthony Marcaida** (aspiring Full-Stack Web Developer) based on the Memoir Framer template design, adapted for showcasing development projects instead of blog posts.

## Design Requirements

### Color Scheme

- **Primary Background**: `rgb(253, 250, 241)` - 60% usage (warm off-white)
- **Accent/Highlight**: `rgb(4, 11, 6)` - 30% usage (deep forest green)
- **Secondary/Text**: `rgb(84, 84, 84)` - 10% usage (medium gray)

### Layout Structure

1. **Left Sidebar** (fixed position)

   - Profile photo placeholder
   - Name: "Kynth Anthony Marcaida"
   - Title: "Aspiring Full-Stack Web Developer"
   - Navigation menu (Home, About, Projects, Contact)
   - Social links section
   - Newsletter/contact form (optional)

2. **Main Content Area**
   - Hero section with tagline
   - Projects showcase grid
   - Remove filter buttons (All, Audience, Writing, Business, Mindset)
   - Remove search input
   - Focus on project cards layout

## Content Structure

### Hero Section

- **Tagline**: "Building digital solutions for the modern world" or similar
- **Subtitle**: "Full-Stack Development • Clean Code • User Experience"
- **CTA**: Email subscription or contact form

### Project Cards

Replace blog post cards with project showcase cards containing:

- Project thumbnail/screenshot
- Project title
- Brief description (2-3 lines)
- Tech stack badges
- Live demo link
- GitHub repository link
- "Learn More" button

### Navigation Items

- **Home**: Main portfolio view
- **About**: Personal info, skills, experience
- **Projects**: (current page) - project showcase
- **Contact**: Contact form and information

## Technical Specifications

### Typography and Font Specifications

- **Global Font**: Manrope (loaded via Google Fonts)
- **Font Sizes**:
  - Hero tagline: 64px
  - Regular text (profile name, profile placeholder): 16px
  - Small text (subtitle, buttons, navigation, social links, stat labels): 12px
- **Google Fonts Integration**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
  ```

### Responsive Design

- Mobile-first approach
- Sidebar collapses to hamburger menu on mobile
- Project grid adapts: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- Touch-friendly interaction on mobile devices

### Performance Requirements

- Fast loading times
- Optimized images
- Clean, semantic HTML
- Efficient CSS (consider CSS Grid and Flexbox)
- Minimal JavaScript for interactions

### SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Clean URL structure
- Fast loading speed

## Key Features to Implement

### Interactive Elements

- Smooth hover effects on project cards
- Subtle animations (fade-in, slide-up)
- Smooth scrolling between sections
- Loading states for dynamic content

### Project Showcase Features

- Filter by technology (optional for future)
- Project detail modal/page
- Image galleries for project screenshots
- Technology stack visualization
- Live demo and source code links

### Modern Development Practices

- Clean, maintainable code structure
- CSS custom properties for theming
- Responsive images with proper sizing
- Accessibility features (ARIA labels, keyboard navigation)
- Fast loading and optimized assets

## Content Guidelines

### Project Descriptions

- Focus on problem-solving and impact
- Highlight technologies used
- Include challenges overcome
- Show before/after or process
- Link to live demos and code

### About Section

- Professional summary
- Technical skills
- Learning journey
- Goals and aspirations
- Personal interests (briefly)

### Technical Skills to Showcase

- Frontend: HTML, CSS, JavaScript, React, etc.
- Backend: Node.js, Python, databases, etc.
- Tools: Git, Docker, CI/CD, etc.
- Design: UI/UX principles, responsive design

## Implementation Priority

### Phase 1 (MVP)

1. Basic layout with sidebar and main content
2. Color scheme implementation
3. Project cards grid
4. Responsive design basics
5. Navigation functionality

### Phase 2 (Enhanced)

1. Smooth animations and transitions
2. Project detail pages/modals
3. Contact form functionality
4. Performance optimization
5. SEO implementation

### Phase 3 (Advanced)

1. CMS integration for easy project updates
2. Blog section for development insights
3. Advanced filtering and search
4. Analytics integration
5. Progressive Web App features

## Code Structure Recommendations

```
project-root/
├── index.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── components.js
├── images/
│   ├── projects/
│   └── profile/
└── assets/
    ├── icons/
    └── fonts/
```

## Accessibility Considerations

- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1 AA)
- Focus indicators for interactive elements

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- CSS fallbacks for advanced features

## Success Metrics

- Fast loading times (< 3 seconds)
- Mobile-friendly design
- Clear project presentation
- Easy navigation and contact
- Professional appearance
- Effective personal branding

---

**Note**: This portfolio should reflect Kynth's personality and development style while maintaining a professional appearance suitable for potential employers and clients. Focus on showcasing real projects and demonstrating growth as a developer.
