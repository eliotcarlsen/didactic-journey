import '../styles/Bio.css';

function Bio() {
  return (
    <div className="bio-container">
      <section className="bio-header">
        <h1>About Me</h1>
        <div className="bio-links">
          <a 
            href="https://www.linkedin.com/in/eliotcarlsen/" 
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
      <section className="bio-content">
        <div className="bio-section">
          <h2>Professional Journey</h2>
          <p>
            Over the past 7+ years, I've progressed from Frontend Intern to Software Engineer II, 
            developing expertise in front-end development, APIs, and cross-team collaboration. 
            My career has been marked by continuous growth and significant contributions to 
            innovative projects.
          </p>
        </div>
        <div className="bio-section">
          <h2>Key Achievements</h2>
          <ul className="achievements-list">
            <li>
              <strong>iSpot.tv Growth:</strong> Became the number one contributor to iSpot's core 
              TV Ad Measurement Analytics web application
            </li>
            <li>
              <strong>Code Contributions:</strong> Over 250,000 lines of code written across 2,000+ 
              commits and 400+ production pull requests
            </li>
            <li>
              <strong>Product Leadership:</strong> Led front-end development for multiple iSpot product 
              launches including:
              <ul className="sub-list">
                <li>TV Conversions</li>
                <li>Unified Measurement</li>
                <li>Streaming Measurement</li>
                <li>Streaming Audience</li>
              </ul>
            </li>
            <li>
              <strong>Experience:</strong> 7+ years of SaaS Application Development experience
            </li>
            <li>
              <strong>Continuous Learning:</strong> Completed over 100 hours of Udemy for Business courses
            </li>
          </ul>
        </div>
        <div className="bio-section">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <ul>
                <li>Web Development</li>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>jQuery</li>
                <li>React</li>
                <li>API Development</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Professional Skills</h3>
              <ul>
                <li>Cross-team Collaboration</li>
                <li>Cooperation & Communication</li>
                <li>Product Management</li>
                <li>Project Organization</li>
                <li>Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bio-section">
          <h2>Career Aspirations</h2>
          <p>
            I am well-prepared to pursue roles such as Senior Frontend Engineer, Senior Software Engineer, 
            or entry-level Engineering Manager. My software development prowess, combined with my ability 
            to lead and inspire others, makes me a strong candidate for these positions. I am particularly 
            interested in roles that allow me to leverage my extensive experience in front-end development 
            while continuing to grow as a technical leader.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Bio; 