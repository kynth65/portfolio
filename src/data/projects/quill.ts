import type { Project } from '../types';

export const quill: Project = {
  id: 9,
  title: "Quill",
  description: "A minimalist daily writing and journaling application with AI-powered insights, habit tracking, and offline support. Built to help users form consistent writing habits through a calm, focused, and private writing environment.",
  detailedDescription: "Quill is a feature-complete web application that combines habit tracking, journaling, and AI-powered insights to help users maintain a consistent writing practice. The app provides a distraction-free writing experience with a TipTap-based rich text editor, automatic saving, and offline support. Users can track their writing streaks, monitor word count statistics, and view their writing history in a visual calendar. The app includes AI-powered sentiment analysis and mood tracking, generating weekly or monthly reflections on the user's writing journey. All data is securely stored with Row-Level Security in Supabase, with IndexedDB caching for instant access and offline capability. The app works as a Progressive Web App (PWA) and can be installed on mobile or desktop devices. Key features include comprehensive statistics dashboards, data export functionality in multiple formats (JSON, CSV, Markdown), and background synchronization when connectivity is restored.",
  image: "/images/projects/quill/HomePage.png",
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "TipTap Editor",
    "Supabase",
    "PostgreSQL",
    "OpenAI API",
    "SWR",
    "IndexedDB",
    "Service Workers",
    "PWA"
  ],
  liveLink: "",
  githubLink: "https://github.com/kynth65/daily-writing-app.git",
  duration: "1 week",
  features: [
    "Rich Text Editor: TipTap-based editor with autosave and distraction-free interface",
    "AI-Powered Insights: Automatic sentiment analysis, mood tracking, and AI-generated weekly/monthly reflections",
    "Streak Tracking: Track consecutive writing days with longest streak and current streak metrics",
    "Comprehensive Statistics: Word count analytics, writing frequency, average words per entry",
    "Calendar View: Visual calendar showing writing history with monthly browsing",
    "Offline Support: Write entries without internet connection using IndexedDB and Service Workers",
    "Data Export: Download all entries in JSON, CSV, or Markdown formats",
    "PWA Support: Install as a mobile or desktop app with offline capabilities",
    "Authentication: Email signup/login and Google OAuth integration",
    "Background Sync: Automatic synchronization when connection is restored",
    "Settings Management: Customize reminders, notifications, and account preferences",
    "Responsive Design: Seamless experience across all devices with smooth transitions"
  ],
  challenges: [
    "Implementing offline-first architecture with IndexedDB and Service Workers for reliable data access without internet connectivity",
    "Integrating OpenAI API for real-time sentiment analysis and generating meaningful AI reflections on user writing patterns",
    "Building complex streak calculation logic with accurate date handling across timezones using date-fns",
    "Designing Row-Level Security policies in Supabase to ensure users can only access their own private journal entries",
    "Creating intelligent SWR caching strategy to balance fresh data with performance and offline capability",
    "Implementing TipTap rich text editor with autosave that handles rapid typing without performance degradation",
    "Managing background synchronization to handle conflicts between offline entries and server data",
    "Building responsive calendar views with month navigation and entry preview functionality",
    "Optimizing Next.js 15 with Turbopack for fast development and production builds",
    "Designing minimalist UI with dark sage green color palette (#3A4F41) for calm, focused writing environment"
  ],
  images: [
    "/images/projects/quill/HomePage.png",
    "/images/projects/quill/Write.png",
    "/images/projects/quill/Dashboard.png",
    "/images/projects/quill/Statistics.png",
    "/images/projects/quill/Statistics_2.png",
    "/images/projects/quill/History.png",
    "/images/projects/quill/History_View.png",
    "/images/projects/quill/Insights.png",
    "/images/projects/quill/Settings.png"
  ]
};
