const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // Import the MySQL database connection pool
const villageRoutes = require('./routes/village'); // Import village-related routes

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route for the root path ("/") with a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Village Registration App'); // Customize this response
});

// Use village-related routes
app.use('/villages', villageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
