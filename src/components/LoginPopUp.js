import React, { useState } from 'react';
import axios from 'axios';
import './LoginPopUp.css';

const LoginPopUp = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your API endpoint
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(response.data);
            // Handle success (e.g., redirect, show success message, etc.)
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default LoginPopUp;
