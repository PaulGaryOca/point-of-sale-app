import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import JoinUsSection from './components/JoinUsSection';
import ProductsAndServices from './components/ProductsAndServices';
import LoginPopUp from './components/LoginPopUp';
import SignUpPopUp from './components/SignUpPopUp';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div className="App">
                <Header 
                    isLoggedIn={isLoggedIn} 
                    onLoginClick={() => setShowLogin(true)} 
                    onLogoutClick={handleLogout} 
                    onSignUpClick={() => setShowSignUp(true)} 
                />
                
                <Routes>
                    {/* JoinUsSection as Home Page */}
                    <Route path="/" element={<JoinUsSection />} />
                    <Route path="/products-and-services" element={<ProductsAndServices />} />
                </Routes>

                {showLogin && <LoginPopUp onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
                {showSignUp && <SignUpPopUp onClose={() => setShowSignUp(false)} />}
            </div>
        </Router>
    );
}

export default App;
