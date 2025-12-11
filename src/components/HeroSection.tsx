import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-tagline">
          Building digital solutions for the modern world
        </h1>
        <p className="hero-subtitle">
          Full-Stack Development • Clean Code • User Experience
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="cta-button primary">
            View My Work
          </Link>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">6+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Technologies</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
