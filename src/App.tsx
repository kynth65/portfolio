import { useState } from "react";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import ProjectGrid from "./components/ProjectGrid";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectGrid />;
      case "contact":
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <ProjectGrid />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="main-content">
        <div className="content-wrapper">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;
