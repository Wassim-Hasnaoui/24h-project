// Import the mongoose module
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database with the specified connection string
        await mongoose.connect('mongodb://localhost:27017/baladia');
        console.log('MongoDB connected'); // Log a message if the connection is successful
    } catch (error) {
        console.error('MongoDB connection error:', error); // Log an error message if the connection fails
        process.exit(1); // Exit the process with a failure code
    }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
