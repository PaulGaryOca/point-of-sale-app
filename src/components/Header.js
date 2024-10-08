import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css';
import LoginPopUp from './LoginPopUp';
import SignUpPopUp from './SignUpPopUp';

const Header = () => {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

    const toggleLoginPopup = () => {
        setIsLoginPopupOpen(!isLoginPopupOpen);
    };

    const toggleSignUpPopup = () => {
        setIsSignUpPopupOpen(!isSignUpPopupOpen);
    };

    return (
        <header className="header">
            <div className="logo">NMPC Logo</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products-and-services">Products and Services</Link> {/* Updated Link */}
                <Link to="/">News and Events</Link>
                <Link to="/">About Us</Link>
            </nav>
            <div className="cta-buttons">
                <button className="secondary" onClick={toggleLoginPopup}>Log In</button>
                <button className="member-btn" onClick={toggleSignUpPopup}>Become a Member</button>
            </div>
            {isLoginPopupOpen && <LoginPopUp onClose={toggleLoginPopup} />}
            {isSignUpPopupOpen && <SignUpPopUp onClose={toggleSignUpPopup} />}
        </header>
    );
};

export default Header;
