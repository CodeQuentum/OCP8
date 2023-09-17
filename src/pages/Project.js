import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects.json';
import NotFound from '../pages/NotFound';

function Project() {
  const { id } = useParams();

  const project = projectData.find(project => project.id === parseInt(id));

  if (!project) {
       return (
      <NotFound />
    );
  }

  return (
    <div>
      <h2>Détails du Projet</h2>
      <p>ID du Projet : {project.id}</p>
      <p>Titre du Projet : {project.title}</p>
      <p>Description du Projet : {project.description}</p>
    </div>
  );
}

export default Project;
