import type { Project } from '../types';

export const evergreenRealestate: Project = {
  id: 7,
  title: "Evergreen - Real Estate & Land Management Platform",
  description: "Streamlining land development operations from acquisition to client management — helping real estate teams track properties, automate payment schedules, and close deals 30% faster.",
  detailedDescription: "Evergreen is a full-stack real estate management platform that streamlines operations from land acquisition to client management. Built for land development companies managing subdivision projects, it features role-specific dashboards for Super Admins, Agents, Interns, and Clients. The system handles complete property portfolio management, installment payment tracking with automated scheduling, task assignment with progress monitoring, and centralized document management. With specialized tools like Residential Form System (RFS) and OCS Calculator, plus a public-facing marketing website, Evergreen provides end-to-end solutions for modern real estate operations.",
  image: "/images/projects/evergreen/LandingPage.png",
  techStack: ["Laravel 11", "React 18", "MySQL", "PHP 8.2+", "Vite", "Ant Design", "Tailwind CSS", "Laravel Sanctum", "Framer Motion", "Lucide React"],
  liveLink: "",
  githubLink: "https://github.com/kynth65/evergreen",
  duration: "2 months",
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
    "/images/projects/evergreen/LandingPage.png",
    "/images/projects/evergreen/Dashboard.png",
    "/images/projects/evergreen/LotManagement.png",
    "/images/projects/evergreen/ClientPayment.png",
    "/images/projects/evergreen/OCSCalculator.png"
  ]
};