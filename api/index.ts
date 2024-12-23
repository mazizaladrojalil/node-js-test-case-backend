const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/database');
const programRoutes = require('../routes/programRoutes');

const app = express();

const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', programRoutes);

// Sync database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Failed to sync database:', error);
  });