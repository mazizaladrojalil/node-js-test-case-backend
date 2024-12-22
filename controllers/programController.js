const Program = require('../models/Program');

// Create a new program
exports.createProgram = async (req, res) => {
    try {
      const { nama_program } = req.body;
  
      const validPrograms = ['PKH', 'BLT', 'Bansos', 'Lainnya'];
      if (!validPrograms.includes(nama_program)) {
        return res.status(400).json({ error: 'Invalid program name. Valid options are: PKH, BLT, Bansos, Lainnya.' });
      }
  
      // If the validation passes, create the new program
      const program = await Program.create(req.body);
      res.status(201).json(program);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create program' });
    }
  };

// Get all programs
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.findAll();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
};

// Get a single program by ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (program) {
      res.status(200).json(program);
    } else {
      res.status(404).json({ error: 'Program not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch program' });
  }
};

// Update a program
exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.update(req.body, {
      where: { id: req.params.id },
    });
    if (program[0]) {
      res.status(200).json({ message: 'Program updated' });
    } else {
      res.status(404).json({ error: 'Program not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update program' });
  }
};

// Delete a program
exports.deleteProgram = async (req, res) => {
  try {
    const rowsDeleted = await Program.destroy({
      where: { id: req.params.id },
    });
    if (rowsDeleted) {
      res.status(200).json({ message: 'Program deleted' });
    } else {
      res.status(404).json({ error: 'Program not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete program' });
  }
};
