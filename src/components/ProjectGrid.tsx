import { Link } from "react-router-dom";
import "./ProjectGrid.css";
import { projects } from "../data/projects";

const ProjectGrid = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay">
                <div className="project-links">
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

              <Link 
                to={`/project/${project.id}`}
                className="learn-more-btn"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
