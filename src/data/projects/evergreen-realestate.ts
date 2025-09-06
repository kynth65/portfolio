import type { Project } from '../types';

export const evergreenRealestate: Project = {
  id: 7,
  title: "Evergreen - Real Estate & Land Management Platform",
  description: "A comprehensive real estate management system designed for land development companies, featuring multi-role dashboards, payment tracking, and project management capabilities.",
  detailedDescription: "Evergreen is a full-stack real estate management platform that streamlines operations from land acquisition to client management. Built for land development companies managing subdivision projects, it features role-specific dashboards for Super Admins, Agents, Interns, and Clients. The system handles complete property portfolio management, installment payment tracking with automated scheduling, task assignment with progress monitoring, and centralized document management. With specialized tools like Residential Form System (RFS) and OCS Calculator, plus a public-facing marketing website, Evergreen provides end-to-end solutions for modern real estate operations.",
  image: "/placeholder-project.jpg",
  techStack: ["Laravel 11", "React 18", "MySQL", "PHP 8.2+", "Vite", "Ant Design", "Tailwind CSS", "Laravel Sanctum", "Framer Motion", "Lucide React"],
  liveLink: "",
  githubLink: "https://github.com/kynth65/evergreen",
  features: [
    "Complete Land Management: Property portfolio management with detailed land records and status tracking",
    "Lot Management: Individual lot tracking within development projects with geographic data integration",
    "Client Payment System: Installment payment tracking with automated scheduling and transaction history",
    "Multi-Role Dashboards: Role-specific interfaces for Super Admin, Admin, Agent, Intern, and Client users",
    "Task Management: Project assignment and progress tracking system with role-based visibility",
    "Document Management: Centralized file storage with hierarchical organization and access control",
    "Specialized Tools: Residential Form System (RFS) and Office of City Settlement (OCS) calculator",
    "Payment Transaction History: Complete financial audit trails with reporting capabilities",
    "Notification System: Real-time updates and alerts for system activities",
    "Public Marketing Website: Showcase platform for available properties and company branding"
  ],
  challenges: [
    "Implementing complex multi-role authentication system with granular permissions for 5 different user types",
    "Designing scalable payment tracking system with automated installment scheduling and financial reporting",
    "Building comprehensive task management workflow with role-based assignment and progress monitoring",
    "Creating efficient file management system with hierarchical organization and access control",
    "Integrating geographic data and mapping functionality for land portfolio visualization",
    "Developing specialized calculation tools for real estate forms and settlement processing",
    "Optimizing database performance for large-scale property and transaction data management",
    "Ensuring data security and privacy compliance for sensitive financial and property information"
  ],
  images: [
    "/placeholder-project.jpg",
    "/placeholder-project.jpg",
    "/placeholder-project.jpg"
  ]
};