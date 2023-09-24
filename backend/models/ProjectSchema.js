const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  pictures: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;