import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API requests
import '../css/css/ManageUsers.css'; // Include your professional styles

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await axios.get('/api/users'); // Replace with your actual API endpoint
      if (response.data) {
        setUsers(response.data); // Assuming `response.data` is an array of users
      } else {
        setError('Unexpected response from the server.');
      }
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('/api/users', { name: newUser.trim() });
      if (response.data) {
        setUsers([...users, response.data]); // Assuming the backend returns the newly created user
        setNewUser('');
        setSuccess('User added successfully!');
      } else {
        setError('Unexpected response from the server.');
      }
    } catch (err) {
      setError('Failed to add user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveUser = async (userId) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await axios.delete(`/api/users/${userId}`); // Assuming user ID is used in the API
      setUsers(users.filter((user) => user.id !== userId)); // Remove the user from the local state
      setSuccess('User removed successfully!');
    } catch (err) {
      setError('Failed to remove user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="manage-users-container">
      <h1 className="title">Manage Users</h1>
      <p className="description">
        Easily add, edit, or remove users from the system. Manage your user base with ease!
      </p>

      {/* Success and Error Feedback */}
      {error && <div className="feedback error">{error}</div>}
      {success && <div className="feedback success">{success}</div>}

      {/* Add User Section */}
      <div className="add-user">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user name"
          className="user-input"
          disabled={loading} // Disable input while loading
        />
        <button
          onClick={handleAddUser}
          className={`add-btn ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </div>

      {/* User List Section */}
      <div className="user-list">
        <h2 className="user-list-title">Current Users</h2>
        {loading && users.length === 0 ? (
          <p>Loading users...</p> // Loading indicator while fetching users
        ) : (
          <ul className="user-list-ul">
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <span className="user-name">{user.name}</span>
                <button
                  onClick={() => handleRemoveUser(user.id)}
                  className="remove-btn"
                  disabled={loading}
                >
                  {loading ? 'Removing...' : 'Remove'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
