import "./ProjectGrid.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectGrid = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, shopping cart, and payment integration.",
      image: "/placeholder-project.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder-project.jpg",
      techStack: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather, forecasts, and historical data with interactive charts and maps.",
      image: "/placeholder-project.jpg",
      techStack: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations and optimized performance.",
      image: "/placeholder-project.jpg",
      techStack: ["React", "TypeScript", "Vite", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder">
                <span>{project.title.charAt(0)}</span>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
