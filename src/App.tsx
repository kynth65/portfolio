import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import ProjectGrid from "./components/ProjectGrid";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectPage from "./components/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine active section based on current route
  const getActiveSection = () => {
    if (path === '/about') return 'about';
    if (path === '/projects' || path.startsWith('/project/')) return 'projects';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  return (
    <div className="app">
      <Sidebar activeSection={getActiveSection()} />
      <main className="main-content">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProjectGrid />
              </>
            } />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectGrid />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
