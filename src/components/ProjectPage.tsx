import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "0", 10);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const openImageModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!project.images) return;
    
    const validImages = project.images.filter(img => img && img !== "/placeholder-project.jpg");
    if (validImages.length === 0) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % validImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? validImages.length - 1 : currentImageIndex - 1;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(validImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeImageModal();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  return (
    <div className="project-page">
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/projects" className="breadcrumb-link">Projects</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{project.title}</span>
      </nav>

      <div className="project-page-header">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>
        <h1 className="project-page-title">{project.title}</h1>
        <p className="project-page-description">{project.description}</p>

        <div className="project-page-links">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-link primary"
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
                    {image && image !== "/placeholder-project.jpg" ? (
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="gallery-img"
                        onClick={() => openImageModal(image, index)}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <div className="gallery-placeholder">
                        Screenshot {index + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="project-page-sidebar">
          {project.duration && (
            <div className="project-meta-section">
              <h3>Project Details</h3>
              <div className="meta-items">
                {project.duration && (
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{project.duration}</span>
                  </div>
                )}
                
              </div>
            </div>
          )}

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

      {/* Project Navigation */}
      <div className="project-navigation">
        {(() => {
          const currentIndex = projects.findIndex(p => p.id === projectId);
          const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
          const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

          return (
            <>
              {prevProject && (
                <Link to={`/project/${prevProject.id}`} className="project-nav-link prev">
                  <span className="nav-arrow">←</span>
                  <div className="nav-info">
                    <span className="nav-label">Previous Project</span>
                    <span className="nav-title">{prevProject.title}</span>
                  </div>
                </Link>
              )}
              {nextProject && (
                <Link to={`/project/${nextProject.id}`} className="project-nav-link next">
                  <div className="nav-info">
                    <span className="nav-label">Next Project</span>
                    <span className="nav-title">{nextProject.title}</span>
                  </div>
                  <span className="nav-arrow">→</span>
                </Link>
              )}
            </>
          );
        })()}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="image-modal-overlay" 
          onClick={closeImageModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              ×
            </button>
            
            <button className="modal-nav modal-prev" onClick={() => navigateImage('prev')}>
              ‹
            </button>
            
            <img 
              src={selectedImage} 
              alt={`${project.title} screenshot`}
              className="modal-image"
            />
            
            <button className="modal-nav modal-next" onClick={() => navigateImage('next')}>
              ›
            </button>
            
            <div className="modal-caption">
              {`${currentImageIndex + 1} of ${project.images?.filter(img => img && img !== "/placeholder-project.jpg").length || 0}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
