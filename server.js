// const mysql = require('mysql2');
const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./db');
// const villageRoutes = require('./routes/village');// Import village-related routes
const villageDetailsController = require("./Controllers/villageDetailsController");
const app = express();

db();
// Middleware to parse JSON requests
app.use(express.json());

// Define a route for the root path ("/") with a welcome message
app.get("/", villageDetailsController.getAllVillage);

app.post("/", villageDetailsController.postData);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
