import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';
import '../styles/ProjectsGallery.css';

function ProjectGallery() {
  return (
    <section id='mes-projets'>
    <div className="project-gallery">
      <h2>Mes projets</h2>
      <ul className='gallery'>
        {projectData.map((project) => (
          <li key={project.id}>
            <Link to={`/projet/${project.id}`}>
              <img src={project.cover} alt={project.title} />
              <p>{project.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default ProjectGallery;
