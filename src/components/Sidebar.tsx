import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "./Sidebar.css";

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className={`mobile-menu-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <div className="profile-image">
              <img
                src="/images/projects/profile.jpg"
                alt="Kynth Anthony Marcaida"
              />
            </div>
            <h1 className="profile-name">Kynth Anthony Marcaida</h1>
            <p className="profile-title">Aspiring Full-Stack Web Developer</p>
          </div>

          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`nav-item ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-links">
            <a
              href="https://github.com/kynth65"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kynthanthonymarcaida/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              Email
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
            >
              Resume
            </a>
          </div>

          <div className="theme-toggle-container">
            <DarkModeToggle />
          </div>
        </div>
      </aside>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;
