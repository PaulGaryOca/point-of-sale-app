import React, { useState } from 'react';
import LoginPopUp from './LoginPopUp';
import './Header.css';

const Header = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleLoginClick = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <header className="header">
            <div className="logo">NMPC Logo</div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Products and Services</a>
                <a href="/">News and Events</a>
                <a href="/">About Us</a>
            </nav>
            <div className="cta-buttons">
                <button className="secondary" onClick={handleLoginClick}>Log In</button>
                <button>Become a member</button>
            </div>
            {isPopupVisible && <LoginPopUp onClose={closePopup} />}
        </header>
    );
};

export default Header;
