import "./AboutSection.css";

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: "advanced", years: "3+" },
        { name: "CSS3", level: "advanced", years: "3+" },
        { name: "JavaScript", level: "advanced", years: "3+" },
        { name: "React", level: "advanced", years: "2+" },
        { name: "TypeScript", level: "intermediate", years: "1+" },
        { name: "Next.js", level: "intermediate", years: "1+" },
        { name: "Tailwind CSS", level: "advanced", years: "2+" },
        { name: "Ant Design", level: "intermediate", years: "1+" },
        { name: "Framer Motion", level: "beginner", years: "<1" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Laravel", level: "advanced", years: "2+" },
        { name: "PHP", level: "advanced", years: "2+" },
        { name: "Django", level: "intermediate", years: "1+" },
        { name: "Python", level: "intermediate", years: "1+" },
        { name: "Node.js", level: "intermediate", years: "1+" },
        { name: "MySQL", level: "advanced", years: "2+" },
        { name: "PostgreSQL", level: "intermediate", years: "1+" },
        { name: "SQLite", level: "intermediate", years: "1+" },
        { name: "REST APIs", level: "advanced", years: "2+" },
        { name: "Laravel Sanctum", level: "intermediate", years: "1+" },
        { name: "Django REST Framework", level: "intermediate", years: "1+" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: "advanced", years: "3+" },
        { name: "Vite", level: "intermediate", years: "1+" },
        { name: "OpenAI API", level: "intermediate", years: "1+" },
        { name: "Axios", level: "advanced", years: "2+" },
        { name: "PHPUnit", level: "intermediate", years: "1+" },
        { name: "NPM/Yarn", level: "advanced", years: "2+" },
        { name: "PDF.js", level: "beginner", years: "<1" },
        { name: "Recharts", level: "intermediate", years: "1+" },
        { name: "Docling", level: "beginner", years: "<1" },
        { name: "Langchain", level: "beginner", years: "<1" },
      ],
    },
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro-text">
            From debugging my first HTML page at 2am to building full-stack
            platforms that serve real users — my journey in web development has
            been driven by one question: "How can I make this better?"
          </p>
          <p>
            I'm Kynth, a full-stack web developer who believes the best solutions
            come from understanding both the technical challenges and the people
            who'll use what we build. Whether it's crafting intuitive user
            interfaces with React or architecting robust backends with Laravel and
            Django, I approach every project with curiosity and a commitment to
            quality.
          </p>
          <p>
            Each project you'll see in my portfolio represents not just code, but
            problems solved, lessons learned, and real-world impact. From ESL
            education platforms to healthcare management systems, I've had the
            privilege of turning complex requirements into elegant, functional
            solutions.
          </p>

          <div className="goals-section">
            <h3>Current Goals</h3>
            <ul>
              <li>Master modern React patterns and state management</li>
              <li>Deepen my understanding of backend architecture</li>
              <li>Build more projects that can hone my skills</li>
              <li>Contribute to meaningful open-source projects</li>
              <li>Build applications that have positive impact</li>
            </ul>
          </div>
        </div>

        <div className="skills-grid">
          <h3>Technical Skills</h3>
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h4>{skillGroup.category}</h4>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-badge skill-${skill.level}`}
                    data-level={skill.level}
                    title={skill.level}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
