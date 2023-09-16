import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects.json'; // Importez vos données de projet

function Project() {
  const { id } = useParams();

  // Utilisez l'ID du projet pour obtenir les détails du projet depuis votre source de données (par exemple, JSON).
  const project = projectData.find(project => project.id === parseInt(id));

  if (!project) {
    // Gérez le cas où aucun projet correspondant à l'ID n'est trouvé
    return (
      <div>
        <h2>Projet non trouvé</h2>
        <p>Le projet que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Détails du Projet</h2>
      <p>ID du Projet : {project.id}</p>
      <p>Titre du Projet : {project.title}</p>
      <p>Description du Projet : {project.description}</p>
      {/* Affichez d'autres détails du projet en utilisant les données de votre source de données */}
    </div>
  );
}

export default Project;
