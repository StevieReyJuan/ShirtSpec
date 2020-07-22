import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css';

const toolbar = props => (
    
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <Link to="/"><li>Logout</li></Link>
                    <Link to="/customers"><li>Customers</li></Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;