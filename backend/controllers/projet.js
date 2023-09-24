const Project = require('../models/ProjectSchema')

exports.createProject = (req, res) => {
    delete req.body._id;
    const project = new Project({
      ...req.body
    });
    project.save()
    .then(() => res.status(201).json({ message: 'Projet crée !'}))
    .catch(error => res.status(400).json({ error }));
  };

exports.getAllProject = (req, res) => {
      Project.find()
      .then(project => res.status(200).json(project))
      .catch(error => res.status(400).json({ error }))
    };

exports.getOneProject = (req, res) => {
    Project.findOne({_id: req.params.id})
    .then(project => res.status(200).json(project))
    .catch(error => res.status(404).json({ error }))
  };

exports.updateProject = (req, res) => {
    Project.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };