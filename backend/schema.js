// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
    name: String,                   // User's first name
    sur_name: String,               // User's surname
    birth_date: String,             // User's birth date
    gender: String,                 // User's gender
    birth_adresse: String,          // User's birth address
    full_father_name: String,       // User's father's full name
    fathers_proffession: String,    // User's father's profession
    full_mother_name: String,       // User's mother's full name
    mothers_proffession: String,    // User's mother's profession
    civilian_affairs_agent: String  // Civilian affairs agent's name
});

// Define the schema for a madhmoun (assuming it's another type of user or related entity)
const madhmounSchema = new mongoose.Schema({
    name: String,                   // Madhmoun's first name
    sur_name: String,               // Madhmoun's surname
    birth_date: String,             // Madhmoun's birth date
    gender: String,                 // Madhmoun's gender
    birth_adresse: String,          // Madhmoun's birth address
    full_father_name: String,       // Madhmoun's father's full name
    fathers_proffession: String,    // Madhmoun's father's profession
    full_mother_name: String,       // Madhmoun's mother's full name
    mothers_proffession: String,    // Madhmoun's mother's profession
    civilian_affairs_agent: String  // Civilian affairs agent's name
});

// Export the defined schemas for use in other parts of the application
module.exports = { userSchema, madhmounSchema };
