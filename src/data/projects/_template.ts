import type { Project } from '../types';

// TEMPLATE: Copy this file and rename it for your new project
// Remember to update the index.ts file after creating your project

export const templateProject: Project = {
  id: 999, // CHANGE THIS: Use next available ID number
  title: "Project Title", // CHANGE THIS: Your project name
  description: "Brief description that appears on the project card. Keep it concise, 2-3 lines maximum.", // CHANGE THIS
  detailedDescription: "Detailed description that appears in the project modal. Explain your project in depth, what problem it solves, how you built it, and what makes it special. This can be several sentences long.", // CHANGE THIS
  image: "/placeholder-project.jpg", // CHANGE THIS: Path to your main project image
  techStack: ["Tech1", "Tech2", "Tech3"], // CHANGE THIS: Technologies you used
  liveLink: "https://your-demo.com", // CHANGE THIS: Link to live demo
  githubLink: "https://github.com/yourusername/repo", // CHANGE THIS: Link to GitHub repo
  features: [
    "Feature 1: What this feature does",
    "Feature 2: Another key feature",
    "Feature 3: More features",
    // ADD MORE: List all key features of your project
  ],
  challenges: [
    "Technical challenge 1 you overcame",
    "Implementation difficulty you solved", 
    "Performance optimization you achieved",
    // ADD MORE: Describe technical challenges you faced and solved
  ],
  images: [
    "/screenshot1.jpg", // CHANGE THIS: Screenshots for image gallery
    "/screenshot2.jpg",
    "/screenshot3.jpg"
    // ADD MORE: Multiple screenshots showing your project
  ]
};

// REMEMBER: After creating your project file:
// 1. Add import to index.ts: import { yourProject } from './your-project-file';
// 2. Add to projects array in index.ts
// 3. Add export in index.ts: export * from './your-project-file';