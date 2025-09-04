import type { Project } from '../types';

export const ecommercePlatform: Project = {
  id: 1,
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, shopping cart, and payment integration.",
  detailedDescription: "This comprehensive e-commerce platform was built to provide a complete online shopping experience. The application features a modern React frontend with a robust Node.js backend, MongoDB for data persistence, and Stripe integration for secure payment processing. The platform supports user registration, product browsing, cart management, and order processing with real-time inventory tracking.",
  image: "/placeholder-project.jpg",
  techStack: ["React", "Node.js", "MongoDB", "Stripe"],
  liveLink: "https://example.com",
  githubLink: "https://github.com",
  features: [
    "User authentication and authorization system",
    "Product catalog with search and filtering",
    "Shopping cart with persistent storage",
    "Secure payment processing with Stripe",
    "Order history and tracking",
    "Admin dashboard for inventory management",
    "Responsive design for mobile and desktop",
    "Email notifications for orders"
  ],
  challenges: [
    "Implementing secure payment processing while maintaining UX",
    "Managing complex state between cart, inventory, and orders",
    "Optimizing database queries for large product catalogs",
    "Creating a scalable authentication system"
  ],
  images: ["/placeholder-project.jpg", "/placeholder-project.jpg"]
};