import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "0", 10);
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="project-page">
      <div className="project-page-header">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>
        <h1 className="project-page-title">{project.title}</h1>
        <p className="project-page-description">{project.description}</p>
        
        <div className="project-page-links">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-link primary"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-link secondary"
          >
            Source Code
          </a>
        </div>
      </div>

      <div className="project-page-content">
        <div className="project-page-main">
          <section className="project-section">
            <h2>About This Project</h2>
            <p>{project.detailedDescription}</p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Challenges</h2>
            <ul className="challenge-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          {project.images && project.images.length > 0 && (
            <section className="project-section">
              <h2>Project Screenshots</h2>
              <div className="image-gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="gallery-image">
                    <div className="gallery-placeholder">
                      Screenshot {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="project-page-sidebar">
          <div className="tech-stack-section">
            <h3>Technology Stack</h3>
            <div className="tech-stack-list">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-info-section">
            <h3>Project Links</h3>
            <div className="project-info-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                View Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;