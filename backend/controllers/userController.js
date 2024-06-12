// Import the User model from the models module
const { User } = require('../models');

// Handler to get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.json(users); // Send the users as a JSON response
    } catch (error) {
        console.error(error); // Log any errors to the console
        res.status(500).json({ message: 'Server error' }); // Send a server error status and message
    }
};

// Handler to get a user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    try {
        const user = await User.findById(id); // Find the user by ID
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Send a 404 error if the user is not found
        }
        res.json(user); // Send the user as a JSON response
    } catch (error) {
        console.error(error); // Log any errors to the console
        res.status(500).json({ message: 'Server error' }); // Send a server error status and message
    }
};

// Handler to create a new user
exports.createUser = async (req, res) => {
    const { name, sur_name, birth_date, gender, birth_adresse, full_father_name, fathers_proffession, full_mother_name, mothers_proffession, civilian_affairs_agent } = req.body; // Extract the user data from the request body
    try {
        const newUser = new User({
            name,
            sur_name,
            birth_date,
            gender,
            birth_adresse,
            full_father_name,
            fathers_proffession,
            full_mother_name,
            mothers_proffession,
            civilian_affairs_agent
        });
        const savedUser = await newUser.save(); // Save the new user to the database
        res.json(savedUser); // Send the saved user as a JSON response
    } catch (error) {
        console.error(error); // Log any errors to the console
        return res.status(500).json({ message: 'Server error' }); // Send a server error status and message
    }
};

// Handler to update a user by ID
exports.updateUser = async (req, res) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    const { name, sur_name, birth_date, gender, birth_adresse, full_father_name, fathers_proffession, full_mother_name, mothers_proffession, civilian_affairs_agent } = req.body; // Extract the updated user data from the request body
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            sur_name,
            birth_date,
            gender,
            birth_adresse,
            full_father_name,
            fathers_proffession,
            full_mother_name,
            mothers_proffession,
            civilian_affairs_agent
        }, { new: true }); // Update the user and return the new version of the document
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' }); // Send a 404 error if the user is not found
        }
        res.json(updatedUser); // Send the updated user as a JSON response
    } catch (error) {
        console.error(error); // Log any errors to the console
        res.status(500).json({ message: 'Server error' }); // Send a server error status and message
    }
};

// Handler to delete a user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params; // Extract the user ID from the request parameters
    try {
        const deletedUser = await User.findByIdAndDelete(id); // Find the user by ID and delete it
        
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' }); // Send a 404 error if the user is not found
        }
        res.json({ message: 'User deleted successfully' }); // Send a success message
    } catch (error) {
        console.error(error); // Log any errors to the console
        res.status(500).json({ message: 'Server error' }); // Send a server error status and message
    }
};
