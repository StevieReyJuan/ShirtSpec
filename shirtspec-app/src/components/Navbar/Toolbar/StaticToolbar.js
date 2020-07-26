import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const staticToolbar = props => (
    
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
            </div>
            <div className='toolbar__logo'><Link to='/'>ShirtSpec</Link></div>
            <div className='spacer' />
            <div className='toolbar__navigation-items'>
                <ul>
                    <Link to='/customers'><li>Customers</li></Link>
                    {/* TODO: Logout function */}
                    <Link to='/'><li>Logout</li></Link> 
                </ul>
            </div>
        </nav>
    </header>
);

export default staticToolbar;