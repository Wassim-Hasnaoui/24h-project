// Import the express module
const express = require('express');
// Create a new router object
const router = express.Router();
// Import the user controller which contains the handler functions for the routes
const userController = require('../controllers/userController');

// Define a GET route to retrieve all users, handled by getUsers function in the controller
router.get('/', userController.getUsers);

// Define a GET route to retrieve a specific user by ID, handled by getUserById function in the controller
router.get('/:id', userController.getUserById);

// Define a PUT route to update a specific user by ID, handled by updateUser function in the controller
router.put('/:id', userController.updateUser);

// Define a DELETE route to delete a specific user by ID, handled by deleteUser function in the controller
router.delete('/:id', userController.deleteUser);

// Define a POST route to create a new user, handled by createUser function in the controller
router.post('/', userController.createUser);

// Export the router object for use in other parts of the application
module.exports = router;
