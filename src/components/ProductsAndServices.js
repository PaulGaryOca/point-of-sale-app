import React from 'react';
import Header from './Header';
import './ProductsAndServices.css';

const ProductsAndServices = () => {
    return (
        <div className="products-container">
            <Header />
            <h1>Products and Services</h1>
            <div className="button-grid">
                <div className="button-item">
                    <div className="button-info">
                        <button className="big-button">Grocery</button>
                        <p className="description">Get the freshest groceries delivered to your doorstep.</p>
                    </div>
                    <div className="background-image grocery"></div>
                </div>
                <div className="button-item">
                    <div className="button-info">
                        <button className="big-button">Pharmacy</button>
                        <p className="description">Access essential medications and health products.</p>
                    </div>
                    <div className="background-image pharmacy"></div>
                </div>
             
            </div>
        </div>
    );
};

export default ProductsAndServices;
