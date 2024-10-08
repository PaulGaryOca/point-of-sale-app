import React, { useState } from 'react';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './SignUpPopUp.css';

const SignUpPopUp = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { email, password });
            console.log(response.data);
            onClose(); 
        } catch (error) {
            setError(error.response?.data?.error || 'Signup failed'); 
        }
    };

    return (
        <div className="signup-popup">
            <button className="close-button" onClick={onClose}>×</button>
            <h2>Become a Member</h2>
            <form onSubmit={handleSignUp}>
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
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default SignUpPopUp;
