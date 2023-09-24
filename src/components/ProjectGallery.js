import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importez Axios
import '../styles/ProjectsGallery.css';

function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des projets:', error);
      });
  }, []);

  return (
    <section id='mes-projets'>
      <div className="project-gallery">
        <h2>Mes projets</h2>
        <ul className='gallery'>
          {projects.map((project) => (
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