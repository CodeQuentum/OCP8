import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects.json';
import NotFound from './NotFound';

function EditProject() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    cover: null, 
    pictures: [],
    description: '',
    tags: [],
  });

  useEffect(() => {
    const selectedProject = projectData.find((proj) => proj.id === parseInt(projectId));
  
    if (selectedProject) {
      console.log('Projet sélectionné :', selectedProject);
      setProject(selectedProject);
      setFormData({
        title: selectedProject.title,
        cover: null, 
        pictures: [],
        description: selectedProject.description,
        tags: selectedProject.tags.join(', '),
      });
    } else {
      console.log('Projet non trouvé pour ID :', projectId);
    }
  }, [projectId]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mettez à jour les données du projet avec formData
    // (vous pouvez envoyer les données au backend ici)
    console.log('Données soumises :', formData);
  };

  if (!project) {
    return <div>
        <NotFound />
    </div>;
  }

  return (
    <div>
      <h1>Modifier le Projet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="cover">Image de couverture</label>
          <input
            type="file"
            id="cover"
            name="cover"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="tags">Tags (séparés par des virgules)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="pictures">Images du projet</label>
          <input
            type="file"
            id="pictures"
            name="pictures"
            multiple
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
}

export default EditProject;