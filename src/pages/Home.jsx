import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Personal Website</h1>
        <p>Software Developer | Problem Solver | Creative Thinker</p>
      </section>
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="link-cards">
          <Link to="/bio" className="card">
            <h3>About Me</h3>
            <p>Learn more about my background and interests</p>
          </Link>
          <Link to="/cv" className="card">
            <h3>My CV</h3>
            <p>View my professional experience and skills</p>
          </Link>
          <Link to="/projects" className="card">
            <h3>Projects</h3>
            <p>Explore my recent work and contributions</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 