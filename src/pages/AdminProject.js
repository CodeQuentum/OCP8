import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/projects.json';
import AddProject from '../components/Addproject';

function AdminProject() {
  const [projets, setProjets] = useState(data);

  const handleDeleteProjet = (id) => {
    const updatedProjets = projets.filter((projet) => projet.id !== id);
    setProjets(updatedProjets);
  };

  return (
    <div>
      <h1>Liste des Projets</h1>
      <div className="projets">
        {projets.map((projet) => (
          <div key={projet.id} className="projet">
            <h3>{projet.title}</h3>
            <Link to={`/edit/${projet.id}`}>Modifier</Link>
            <button onClick={() => handleDeleteProjet(projet.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <h2>Ajouter un projet</h2>
      <AddProject />
    </div>
  );
}

export default AdminProject;