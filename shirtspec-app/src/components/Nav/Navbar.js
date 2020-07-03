import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    const { links } = props;
    const linkLis = links.map(l => 
        <Link to={l.link}>
            <li>{l.title}</li>
        </Link>
        );

    return (
        <div className="nav">
            <div className="logo">
                Navbar
            </div>
            <ul>
                {linkLis}
            </ul>
        </div>
    )
}

export default Navbar;