import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const staticToolbar = props => (
    
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <Link to="/customers"><li>Customers</li></Link>
                    <Link to="/"><li>Logout</li></Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default staticToolbar;