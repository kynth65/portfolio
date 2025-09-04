import type { Project } from '../types';

export const taskManagementApp: Project = {
  id: 2,
  title: "Task Management App",
  description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
  detailedDescription: "A modern task management application designed for team collaboration. Built with React and TypeScript for type safety, it leverages Firebase for real-time synchronization and data persistence. The application features intuitive drag-and-drop task organization, real-time collaboration, and comprehensive project management tools.",
  image: "/placeholder-project.jpg",
  techStack: ["React", "TypeScript", "Firebase", "Tailwind"],
  liveLink: "https://example.com",
  githubLink: "https://github.com",
  features: [
    "Real-time collaborative task management",
    "Drag-and-drop task organization",
    "Project boards with customizable columns",
    "Team member assignment and notifications",
    "Due date tracking and reminders",
    "File attachments and comments",
    "Activity timeline and history",
    "Mobile-responsive design"
  ],
  challenges: [
    "Implementing smooth drag-and-drop with real-time sync",
    "Managing complex permission systems for team collaboration",
    "Optimizing real-time updates without performance degradation",
    "Creating intuitive UX for complex project management features"
  ],
  images: ["/placeholder-project.jpg", "/placeholder-project.jpg", "/placeholder-project.jpg"]
};