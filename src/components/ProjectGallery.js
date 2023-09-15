// ProjectGallery.js
import React from 'react';
import projectData from '../data/projects.json';
import '../styles/ProjectsGallery.css';

function ProjectGallery() {
  return (
    <div className="project-gallery">
      <h2>Mes projets</h2>
      <ul className='gallery'>
        {projectData.map((project) => (
          <li key={project.id}>
            <img src={project.cover} alt={project.title} />
            <p>{project.title}</p>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ProjectGallery;