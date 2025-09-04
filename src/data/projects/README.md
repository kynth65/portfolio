# Projects Data Management

This directory contains individual project files that are automatically loaded into the portfolio.

## Adding a New Project

1. Create a new `.ts` file in this directory (e.g., `my-new-project.ts`)
2. Follow this template:

```typescript
import { Project } from '../types';

export const myNewProject: Project = {
  id: 5, // Use next available ID
  title: "My New Project",
  description: "Short description for project card (2-3 lines)",
  detailedDescription: "Longer description for the project detail modal. Explain the project in detail, its purpose, and what makes it special.",
  image: "/path-to-your-image.jpg", // Place images in public/ folder
  techStack: ["Tech1", "Tech2", "Tech3"], // Technologies used
  liveLink: "https://your-live-demo.com",
  githubLink: "https://github.com/your-username/your-repo",
  features: [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description"
    // Add more features as needed
  ],
  challenges: [
    "Challenge 1 you overcame",
    "Challenge 2 you solved",
    "Challenge 3 you tackled"
    // Add technical challenges you faced
  ],
  images: [
    "/screenshot1.jpg",
    "/screenshot2.jpg"
    // Multiple screenshots for the project gallery
  ]
};
```

3. Add your new project to the `index.ts` file:
   - Import your project: `import { myNewProject } from './my-new-project';`
   - Add it to the projects array: `myNewProject,`
   - Export it: `export * from './my-new-project';`

## Project Images

- Place all project images in the `public/` folder
- Use relative paths starting with `/` (e.g., `/my-project-screenshot.jpg`)
- Recommended image sizes: 800x600px for main images, 1200x800px for gallery images

## Tips

- Keep descriptions concise but informative
- Use action-oriented language for features ("User authentication", "Real-time updates")
- Focus on technical challenges you overcame in the challenges array
- Test your project data by running the development server

## File Structure

```
src/data/projects/
├── README.md (this file)
├── index.ts (exports all projects)
├── types.ts (Project interface)
├── ecommerce-platform.ts
├── task-management-app.ts
├── weather-dashboard.ts
├── portfolio-website.ts
└── your-new-project.ts (your new projects)
```