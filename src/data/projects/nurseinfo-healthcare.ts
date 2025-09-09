import type { Project } from "../types";

export const nurseinfoHealthcare: Project = {
  id: 6,
  title: "NurseInfo - Healthcare Management System",
  description:
    "A comprehensive healthcare management system built for nurses and healthcare professionals to efficiently manage patient records, track medical visits, monitor inventory, and conduct risk assessments.",
  detailedDescription:
    "NurseInfo is a full-stack healthcare management system designed specifically for nurses and healthcare professionals. The platform provides complete patient lifecycle management from registration through ongoing care, featuring comprehensive medical history tracking, vital signs monitoring, family medical history management, and automated risk assessments with PDF report generation. Built with Laravel 11 and React, it offers robust inventory management for medicines, appointment scheduling, and detailed visit tracking to ensure healthcare providers have all necessary information at their fingertips for optimal patient care.",
  image: "/images/projects/nurseinfo/LandingPage.png",
  techStack: [
    "Laravel 11",
    "React",
    "PostgreSQL",
    "PHP 8.2+",
    "Vite",
    "Tailwind CSS",
    "Laravel Sanctum",
    "Axios",
    "PHPUnit",
  ],
  liveLink: "",
  githubLink: "https://github.com/kynth65/NurseInfo/tree/master",
  features: [
    "Complete Patient Management: Registration, demographics, medical history, allergies, and medication tracking",
    "Visit Management: Vital signs recording, symptoms documentation, and comprehensive visit history",
    "Medical Records: Detailed medical history, immunization tracking, and family medical history documentation",
    "Inventory Management: Medicine stock tracking with real-time updates and transaction logging",
    "Risk Assessment: Comprehensive patient risk evaluation with automated PDF report generation",
    "Family Management: Group patients by family relationships and track hereditary medical patterns",
    "Event Scheduling: Healthcare appointment scheduling with visit tracking and management",
    "Authentication System: Secure API authentication using Laravel Sanctum",
    "Real-time Updates: Live inventory updates and medicine usage monitoring",
    "Comprehensive API: RESTful API endpoints for all healthcare management operations",
  ],
  challenges: [
    "Designing complex relational database schema for comprehensive patient medical data management",
    "Implementing secure healthcare data handling with proper authentication and authorization systems",
    "Building automated risk assessment algorithms with PDF report generation capabilities",
    "Creating efficient family relationship tracking system for hereditary medical pattern analysis",
    "Developing robust inventory management with real-time stock updates and transaction logging",
    "Ensuring HIPAA compliance considerations for healthcare data privacy and security",
    "Integrating comprehensive vital signs monitoring with historical trend analysis",
    "Optimizing database queries for large-scale patient data retrieval and medical history tracking",
  ],
  images: [
    "/images/projects/nurseinfo/dashboard.png",
    "/images/projects/nurseinfo/Inventory.png",
    "/images/projects/nurseinfo/PatientView.png",
    "/images/projects/nurseinfo/SicknessDashboard.png",
  ],
};
