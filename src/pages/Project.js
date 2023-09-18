import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';

function Project() {
  const { id } = useParams();

  console.log('ID du projet depuis les paramètres de l\'URL :', id);

  const project = projectData.find(project => project.id === parseInt(id));

  console.log('Projet trouvé dans les données :', project);

  if (!project) {
    console.log('Projet non trouvé, affichage de la page NotFound');
    return (
      <NotFound />
    );
  }

  return (
    <main>
      <Header />
      <div>
        <h2>Détails du Projet</h2>
        <p>ID du Projet : {project.id}</p>
        <p>Titre du Projet : {project.title}</p>
        <p>Description du Projet : {project.description}</p>
      </div>
      <Footer />
    </main>
  );
}

export default Project;
