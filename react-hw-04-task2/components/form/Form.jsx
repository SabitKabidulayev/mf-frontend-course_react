import { useState, useEffect } from 'react';
import './form.css'; // Assuming you have a CSS file for styling

const Form = ({ addUser, selectedUser, setSelectedUser }) => {
    
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        street: '',
        city: ''
    });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.username || !user.email || !user.street || !user.city) {
            // Handle form validation error
            return;
        }
        addUser(user);
        setUser({
            name: '',
            username: '',
            email: '',
            street: '',
            city: ''
        });
        setSelectedUser(null);
        // Provide feedback to the user (optional)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="username"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
            />
            <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="street"
                placeholder="Street"
                value={user.street}
                onChange={handleChange}
            />
            <input
                required
                type="text"
                name="city"
                placeholder="City"
                value={user.city}
                onChange={handleChange}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default Form;