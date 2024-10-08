import React from 'react';
import './JoinUsSection.css';

const JoinUsSection = () => {
    return (
        <section className="join-us-section">
            <div className="content">
                <h1>Join Us, Grow with Us!</h1>
                <p>
                    Be part of the MSU-IIT National Multi-Purpose Cooperative and be a part of our community. 
                    Grow with us as we work together for a better future!
                </p>
                <div className="button-group">
                    <button className="primary-btn">Become a Member</button>
                    <button className="secondary-btn">Learn More</button>
                </div>
            </div>
            <div className="statistics">
                <div className="stat-item">
                    <span className="stat-icon">👥</span>
                    <h3>70,000K+</h3>
                    <p>regular members</p>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">💰</span>
                    <h3>2 Billion+</h3>
                    <p>total assets</p>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">🏢</span>
                    <h3>20+</h3>
                    <p>branches</p>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">📅</span>
                    <h3>40+</h3>
                    <p>years of service</p>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
