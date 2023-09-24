const express = require('express');
const projectCtrl = require('../controllers/projet');

const router = express.Router();

router.post('/', projectCtrl.createProject);
router.get('/', projectCtrl.getAllProject);
router.get('/:id', projectCtrl.getOneProject);
router.put('/:id', projectCtrl.updateProject);
router.delete('/:id', projectCtrl.deleteProject);

module.exports = router;