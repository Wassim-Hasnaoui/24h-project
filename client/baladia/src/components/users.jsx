import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../users.css'; // Import the CSS file

const Users = () => {
    // State variables
    const [users, setUsers] = useState([]); // Store the fetched users
    const [searchQuery, setSearchQuery] = useState(''); // Store the search query
    const [filteredUsers, setFilteredUsers] = useState([]); // Store the filtered users
    const [selectedUser, setSelectedUser] = useState(null); // Store the ID of the selected user
    const [showAddForm, setShowAddForm] = useState(false); // Control the visibility of the add user form
    const [newUser, setNewUser] = useState({ // Store the data of the new user being added
        name: '',
        surname: '',
        birth_date: '',
        gender: '',
        birth_adresse: '',
        full_father_name: '',
        fathers_proffession: '',
        full_mother_name: '',
        mothers_proffession: '',
        civilian_affairs_agent: ''
    });

    // Function to fetch users from the API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    // Fetch users when the component mounts
useEffect(() => {
    fetchUsers();
}, []);

// Update filteredUsers when users change
useEffect(() => {
    setFilteredUsers(users);
}, [users]);

// Handle search input change
const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterUsers(query);
};

// Filter users based on search query
const filterUsers = (query) => {
    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
};
    // Handle click event on a user item
    const handleClick = (id) => {
        setSelectedUser(selectedUser === id ? null : id);
    };

    // Handle input change in the add user form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle adding a new user
    const handleAddUser = async () => {
        try {
            await axios.post('http://localhost:5000/api/users', newUser);
            fetchUsers(); // Fetch users again after adding a new user
            setShowAddForm(false);
            alert('User added successfully');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="users-container">
            <h1>Users:</h1>
            {/* Search input field */}
            <div className='search-form'>
                <input
                    type='text'
                    placeholder='Search by Name'
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            {/* Add user form */}
            {showAddForm && (
                <div className="add-user-form">
                    {/* Input fields for adding a new user */}
                    {/* For each input field, use handleInputChange to update newUser state */}
                    <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Name" />
                    <input type="text" name="surname" value={newUser.surname} onChange={handleInputChange} placeholder="Surname" />
                    <input type="date" name="birth_date" value={newUser.birth_date} onChange={handleInputChange} placeholder="Birth Date" />
                    <input type="text" name="gender" value={newUser.gender} onChange={handleInputChange} placeholder="Gender" />
                    <input type="text" name="birth_adresse" value={newUser.birth_adresse} onChange={handleInputChange} placeholder="Birth Location" />
                    <input type="text" name="full_father_name" value={newUser.full_father_name} onChange={handleInputChange} placeholder="Father's Name" />
                    <input type="text" name="fathers_proffession" value={newUser.fathers_proffession} onChange={handleInputChange} placeholder="Father's Profession" />
                    <input type="text" name="full_mother_name" value={newUser.full_mother_name} onChange={handleInputChange} placeholder="Mother's Name" />
                    <input type="text" name="mothers_proffession" value={newUser.mothers_proffession} onChange={handleInputChange} placeholder="Mother's Profession" />
                    <input type="text" name="civilian_affairs_agent" value={newUser.civilian_affairs_agent} onChange={handleInputChange} placeholder="Civilian Affairs Agent" />
                    {/* Add other input fields as needed */}
                    <button onClick={handleAddUser} className="add-user-button">Add User</button>
                </div>
            )}
            {/* Button to toggle the add user form visibility */}
            <button className='toggle-add-user-button' onClick={() => setShowAddForm(!showAddForm)}>Toggle Add User Form</button>
            {/* List of users */}
            <ul className="users-list">
                {/* Iterate over filteredUsers and display each user */}
                {filteredUsers.map((user) => (
                    <li
                        key={user._id}
                        className={`user-item ${selectedUser === user._id ? 'selected' : ''}`}
                        onClick={() => handleClick(user._id)}
                    >
                        <div>
                            {/* Display user information */}
                            <h2>{user.name} {user.surname}</h2>
                            <p>Birth Date: {user.birth_date}</p>
                            {/* When a user is selected, show additional details */}
                            {selectedUser === user._id && (
                                <>
                                    <p>Gender: {user.gender}</p>
                                    <p>Birth Location: {user.birth_adresse}</p>
                                    <p>Father's Name & Profession: {user.full_father_name} {user.fathers_proffession}</p>
                                    <p>Mother's Name & Profession: {user.full_mother_name} {user.mothers_proffession}</p>
                                    <p>Civilian Affairs Agent: {user.civilian_affairs_agent}</p>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
    
};

export default Users;
