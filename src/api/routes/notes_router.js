const express = require('express');
const router = express.Router(); 
const notesController = require('../controllers/notes_controller');

router
    .get('/', notesController.get )
    .get('/:id', notesController.getById )
    .post('/', notesController.create )
    .put('/:id', notesController.update )
    .delete('/:id', notesController._delete );

module.exports = router;
