import type { Project } from '../types';

export const aiInvoiceManagement: Project = {
  id: 5,
  title: "AI Invoice Management System",
  description: "Django-based invoice management system with AI-powered data extraction using OpenAI GPT-4o-mini for automated processing and business analytics.",
  detailedDescription: "A comprehensive Django web application that revolutionizes invoice processing through AI automation. The system handles complete invoice workflows from upload to payment, featuring AI-powered data extraction that automatically reads and processes PDF and image invoices. Built with Django 5.2.6 and Python 3.13, it integrates OpenAI GPT-4o-mini for intelligent document processing, vendor management with duplicate detection, and provides real-time business analytics with expense summaries, budget alerts, and spending trends. The system includes both RESTful APIs and a web interface with AJAX support for seamless user experience.",
  image: "/images/projects/invoice-management/dashboard.png",
  techStack: ["Django", "Python", "OpenAI GPT-4o-mini", "Django REST Framework", "SQLite", "HTML/CSS", "JavaScript", "AJAX"],
  liveLink: "",
  githubLink: "https://github.com/kynth65/ai-invoice-management",
  features: [
    "AI-Powered Data Extraction: OpenAI GPT-4o-mini automatically extracts invoice data from PDFs and images",
    "Intelligent Vendor Management: Automatic vendor detection, normalization, and duplicate prevention",
    "Complete Workflow Tracking: Invoice status management from upload to payment completion",
    "Real-Time Analytics: Pre-calculated expense summaries by daily, weekly, monthly periods",
    "Budget Alert System: Configurable spending thresholds with automated notifications",
    "RESTful API: Comprehensive API endpoints for all system operations",
    "File Upload Support: PDF and image processing with 10MB file size limit",
    "User Data Isolation: Secure multi-user environment with proper data separation",
    "AJAX Integration: Asynchronous file upload with real-time progress tracking"
  ],
  challenges: [
    "OpenAI API Integration: Implementing robust AI data extraction with confidence scoring and error handling",
    "Complex Database Design: Creating efficient models for invoices, vendors, analytics with proper relationships",
    "File Processing Pipeline: Building reliable PDF/image text extraction and AI processing workflow",
    "User Data Security: Implementing proper data isolation and session-based authentication",
    "Performance Optimization: Caching analytics data and implementing efficient database queries",
    "AI Response Validation: Ensuring extracted data accuracy and handling AI processing failures"
  ],
  images: [
    "/images/projects/invoice-management/dashboard.png",
    "/images/projects/invoice-management/login.png",
    "/images/projects/invoice-management/invoices.png",
    "/images/projects/invoice-management/invoices-data.png",
    "/images/projects/invoice-management/analytics-dashboard.png"
  ]
};