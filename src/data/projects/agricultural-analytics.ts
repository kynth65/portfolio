import type { Project } from '../types';

export const agriculturalAnalytics: Project = {
  id: 4,
  title: "Agricultural Data Analytics Dashboard",
  description: "Transforming days of manual document analysis into minutes — helping agricultural researchers extract insights from complex PDFs using AI to make data-driven environmental decisions.",
  detailedDescription: "A sophisticated web application that leverages artificial intelligence to transform complex PDF documents into organized, interactive datasets. The system automates the extraction of agricultural information including goals, best management practices, quantitative data, implementation timelines, and monitoring protocols. Built for agricultural researchers, government agencies, and environmental consultants who need to process large volumes of agricultural documentation efficiently and accurately.",
  image: "/images/projects/agriculture/landing-page.png",
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "OpenAI API",
    "Tailwind CSS",
    "PDF.js",
    "Recharts",
    "Node.js"
  ],
  liveLink: "",
  githubLink: "https://github.com/kynth65/Agricultural-analytics-ai",
  duration: "2 weeks",
  features: [
    "AI-Powered Data Extraction: Intelligent text recognition and context-aware categorization of agricultural information",
    "Multi-Category Processing: Extracts goals, best management practices, quantitative data, implementation plans, and monitoring protocols",
    "Interactive Dashboard: Color-coded data tables with sorting, searching, and visual analytics with charts and graphs",
    "Quality Assessment: Real-time extraction completeness indicators and confidence scoring for each data point",
    "Document Summary Generation: AI-powered executive summaries with quality metrics and recommendations",
    "Advanced PDF Processing: OCR support for image-based documents and multi-page document processing",
    "Export Capabilities: Multiple format downloads for further analysis and reporting",
    "Responsive Design: Optimized for desktop and mobile devices with modern user interface"
  ],
  challenges: [
    "Complex PDF Layout Recognition: Implemented advanced text extraction algorithms to handle diverse document structures and table formats",
    "AI Model Optimization: Fine-tuned OpenAI integration to accurately categorize agricultural terminology and context-specific information",
    "Real-time Processing Performance: Optimized client-side and server-side processing for large documents while maintaining responsive user experience",
    "Data Relationship Mapping: Developed intelligent algorithms to identify and preserve relationships between goals, practices, and implementation activities",
    "Quality Assurance System: Built comprehensive validation and confidence scoring mechanisms to ensure extraction accuracy",
    "Scalable Architecture: Designed modular component structure to support future enhancements and additional document types"
  ],
  images: [
    "/images/projects/agriculture/landing-page.png",
    "/images/projects/agriculture/dashboard.png",
    "/images/projects/agriculture/goals-section.png",
    "/images/projects/agriculture/bmp-section.png",
    "/images/projects/agriculture/quantitative-data-section.png",
    "/images/projects/agriculture/implementation-section.png",
    "/images/projects/agriculture/monitoring-section.png",
    "/images/projects/agriculture/outreact-section.png",
    "/images/projects/agriculture/grahp.png"
  ]
};