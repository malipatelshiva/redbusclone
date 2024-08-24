// MainNavbar.js

import React from 'react';
import './Navbar.css';

function MainNavbar() {
    return (
        <div className="navbar">
            <a href="#">User</a>
            <a href="#">City Lands</a>
            <a href="#">All Lands</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Premium</a>
            <a href="#" className="sell-btn">Sell my Land</a>
            <a href="#" className="account-btn">Account</a>
        </div>
    );
}

export default MainNavbar;
