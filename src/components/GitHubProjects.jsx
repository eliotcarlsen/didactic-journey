import { useState, useEffect } from 'react';
import '../styles/GitHubProjects.css';

function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/eliotcarlsen/repos?sort=updated&direction=desc');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // Filter out forked repositories and sort by stars
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(filteredProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-content">
            <h2>{project.name}</h2>
            <p className="project-description">
              {project.description || 'No description available'}
            </p>
            <div className="project-tech">
              {project.language && (
                <span className="tech-tag">{project.language}</span>
              )}
              <span className="tech-tag">Stars: {project.stargazers_count}</span>
            </div>
            <div className="project-links">
              <a 
                href={project.html_url} 
                className="link-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              {project.homepage && (
                <a 
                  href={project.homepage} 
                  className="link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GitHubProjects; 