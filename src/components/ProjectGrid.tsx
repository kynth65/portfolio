import { Link } from "react-router-dom";
import "./ProjectGrid.css";
import { projects } from "../data/projects";

const ProjectGrid = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="project-card"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
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

              <span className="learn-more-btn">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
