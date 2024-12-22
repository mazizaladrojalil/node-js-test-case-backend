const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

// Create a new program
router.post('/programs', programController.createProgram);

// Get all programs
router.get('/programs', programController.getAllPrograms);

// Get a program by ID
router.get('/programs/:id', programController.getProgramById);

// Update a program
router.put('/programs/:id', programController.updateProgram);

// Delete a program
router.delete('/programs/:id', programController.deleteProgram);

module.exports = router;
