import type { Project } from '../types';

export const summaflowEsl: Project = {
  id: 5,
  title: "SUMMAFLOW - ESL Management System",
  description: "A comprehensive English as Second Language (ESL) management platform that combines AI-powered report generation with complete student and class administration.",
  detailedDescription: "SUMMAFLOW is an innovative ESL management system that revolutionizes how English language instructors manage their students and generate progress reports. The platform seamlessly integrates AI-powered report generation using OpenAI's API with comprehensive student management, scheduling, and payment tracking. Built with modern Laravel and React architecture, it provides educators with powerful tools to upload lesson PDFs, automatically generate personalized student progress summaries, and maintain complete oversight of their teaching business through an intuitive dashboard.",
  image: "/placeholder-project.jpg",
  techStack: ["Laravel", "React", "TypeScript", "OpenAI API", "Tailwind CSS", "SQLite", "Vite", "PHP"],
  liveLink: "https://summaflow-demo.com", 
  githubLink: "https://github.com/kynth/summaflow",
  features: [
    "AI-Powered Report Generation: Upload lesson PDFs and generate personalized student progress summaries",
    "Daily, Monthly, and Comparison Reports: Comprehensive tracking of student progress over time",
    "Complete Student Management: Profiles, contact information, and flexible hourly pricing",
    "Payment Tracking: Monitor due amounts and payment history automatically",
    "Interactive Calendar: Schedule classes with conflict detection and automatic payment calculations",
    "Real-time Dashboard: Student enrollment statistics and upcoming class summaries",
    "PDF Processing: Advanced text extraction and analysis from lesson materials",
    "Modern SPA Experience: Built with Inertia.js for seamless navigation",
    "Dark/Light Theme Support: Responsive UI with modern design patterns",
    "Scalable Architecture: Clean service layer separation for maintainability"
  ],
  challenges: [
    "Integrating OpenAI API for accurate and contextual report generation from PDF content",
    "Building complex PDF text extraction and analysis system for lesson materials", 
    "Implementing real-time payment calculations based on variable class durations and hourly rates",
    "Creating seamless SPA experience with Laravel backend using Inertia.js architecture",
    "Designing flexible student pricing system that adapts to different teaching models",
    "Optimizing database queries for efficient student progress tracking over time",
    "Ensuring responsive calendar interface with conflict detection and schedule management"
  ],
  images: [
    "/placeholder-project.jpg",
    "/placeholder-project.jpg", 
    "/placeholder-project.jpg"
  ]
};