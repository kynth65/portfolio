import type { Project } from '../types';

export const weatherDashboard: Project = {
  id: 3,
  title: "Weather Dashboard",
  description: "A responsive weather application that displays current weather, forecasts, and historical data with interactive charts and maps.",
  detailedDescription: "An interactive weather dashboard that provides comprehensive weather information with beautiful visualizations. Built with Vue.js for reactive UI updates, Chart.js for data visualization, and integrated with the OpenWeather API for accurate weather data. The application features location-based weather tracking, forecast visualization, and historical weather analysis.",
  image: "/placeholder-project.jpg",
  techStack: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
  liveLink: "https://example.com",
  githubLink: "https://github.com",
  features: [
    "Current weather conditions with location detection",
    "7-day weather forecast with hourly breakdowns",
    "Interactive weather maps and radar",
    "Historical weather data and trends",
    "Multiple location tracking and favorites",
    "Weather alerts and notifications",
    "Customizable dashboard widgets",
    "Dark/light theme support"
  ],
  challenges: [
    "Handling API rate limits while providing real-time updates",
    "Creating responsive charts that work on all screen sizes",
    "Implementing accurate location detection and geocoding",
    "Optimizing performance with frequent data updates"
  ],
  images: ["/placeholder-project.jpg", "/placeholder-project.jpg"]
};