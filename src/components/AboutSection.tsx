import './AboutSection.css'

const AboutSection = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'Webpack', 'Vite', 'ESLint', 'NPM/Yarn'] }
  ]

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro-text">
            Hi! I'm Kynth, an aspiring full-stack web developer with a passion for creating 
            digital solutions that make a difference. My journey in web development started 
            with curiosity and has evolved into a deep love for clean code and user-centered design.
          </p>
          <p>
            I believe in the power of technology to solve real-world problems and improve 
            people's lives. Every project I work on is an opportunity to learn something new 
            and push the boundaries of what I can create.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or learning about the latest trends in web development. 
            I'm always excited to take on new challenges and collaborate with other developers.
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
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection