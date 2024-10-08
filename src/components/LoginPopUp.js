import React, { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import eye icons
import './LoginPopUp.css'; // Ensure the CSS file is imported

const LoginPopUp = ({ onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password); // Log email and password
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(response.data); // Handle login success
            onLoginSuccess(); // Call success handler
            onClose(); // Close popup on success
        } catch (error) {
            console.error('Login error:', error.response?.data || error); // Log the error response
            setError(error.response?.data?.error || 'Login failed'); // Set error message
        }
    };

    return (
        <div className="login-popup">
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)} 
                    >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} {}
                    </button>
                </div>
                <button type="submit">Log In</button>
            </form>
            {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
    );
};

export default LoginPopUp;
