import React, { useState } from 'react';

function AddProject() {
  const [formData, setFormData] = useState({
    title: '',
    cover: null,
    pictures: [],
    description: '',
    tags: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // Utilisez le premier fichier sélectionné
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
    // Envoyez les données du nouveau projet au backend ici
    console.log('Données soumises :', formData);
  };

  return (
    <div>
      <h1>Ajouter un Projet</h1>
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
        <button type="submit">Ajouter le Projet</button>
      </form>
    </div>
  );
}

export default AddProject;