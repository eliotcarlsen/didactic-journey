import GitHubProjects from '../components/GitHubProjects';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of my recent projects from GitHub</p>
      </section>
      <GitHubProjects />
    </div>
  );
}

export default Projects; 