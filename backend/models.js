// Import the mongoose module
const mongoose = require('mongoose');
// Import the defined schemas from the schema file
const { userSchema, madhmounSchema } = require('./schema');

// Create a model for the user schema
const User = mongoose.model('User', userSchema);
// Create a model for the madhmoun schema
const Madhmoun = mongoose.model('Madhmoun', madhmounSchema);

// Export the models for use in other parts of the application
module.exports = { User, Madhmoun };
