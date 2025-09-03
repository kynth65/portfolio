import { useState } from "react";
import "./Sidebar.css";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="mobile-menu-toggle"
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
              <div className="profile-placeholder">KAM</div>
            </div>
            <h1 className="profile-name">Kynth Anthony Marcaida</h1>
            <p className="profile-title">Aspiring Full-Stack Web Developer</p>
          </div>

          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-item ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
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
