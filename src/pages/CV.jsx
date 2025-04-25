import '../styles/CV.css';

function CV() {
  return (
    <div className="cv-container">
      <section className="cv-header">
        <h1>Curriculum Vitae</h1>
        <div className="cv-links">
          <a 
            href="https://www.linkedin.com/in/eliotcarlsen/" 
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on LinkedIn
          </a>
        </div>
      </section>
      <section className="cv-content">
        <div className="cv-section">
          <h2>Professional Experience</h2>
          <div className="experience-item">
            <h3>Software Engineer</h3>
            <p className="company">Amazon</p>
            <p className="duration">2022 - Present</p>
            <ul className="responsibilities">
              <li>Working on AWS services and infrastructure</li>
              <li>Developing scalable cloud solutions</li>
              <li>Collaborating with cross-functional teams</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <h3>Software Development Engineer</h3>
            <p className="company">Amazon</p>
            <p className="duration">2021 - 2022</p>
            <ul className="responsibilities">
              <li>Developed and maintained AWS services</li>
              <li>Implemented new features and improvements</li>
              <li>Participated in code reviews and design discussions</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Software Development Engineer Intern</h3>
            <p className="company">Amazon</p>
            <p className="duration">2020</p>
            <ul className="responsibilities">
              <li>Worked on AWS infrastructure projects</li>
              <li>Developed new features and improvements</li>
              <li>Collaborated with team members on design and implementation</li>
            </ul>
          </div>
        </div>
        
        <div className="cv-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="institution">University of Washington</p>
            <p className="duration">2017 - 2021</p>
            <ul className="achievements">
              <li>Dean's List</li>
              <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems</li>
            </ul>
          </div>
        </div>

        <div className="cv-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Technologies & Tools</h3>
              <ul>
                <li>AWS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CV; 