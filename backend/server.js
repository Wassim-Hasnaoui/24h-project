// Import necessary modules
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

// Initialize the express application
const app = express();
// Define the port the server will listen on, either from the environment variable or default to 5000
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Connect to the database
connectDB();

// Define the route for user-related API endpoints
app.use('/api/users', userRoutes);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server listening on port ${port}`));
